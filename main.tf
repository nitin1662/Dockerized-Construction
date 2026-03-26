provider "aws" {
  region = "ap-south-1"
}

# -----------------------------
# Security Group (Allow Ports)
# -----------------------------
resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow HTTP, frontend, backend"

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Frontend"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Backend"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# -----------------------------
# EC2 Instance
# -----------------------------
resource "aws_instance" "docker_server" {
  ami           = "ami-0f559c3642608c138" # Amazon Linux 2023 (ap-south-1)
  instance_type = "t3.micro"
  key_name      = "roomzy-newkey" # 🔴 CHANGE THIS

  security_groups = [aws_security_group.allow_web.name]

  user_data = <<-EOF
              #!/bin/bash
              exec > /var/log/user-data.log 2>&1
              set -x

              echo "===== STARTING SETUP ====="

              # Wait for system
              sleep 30

              echo "===== UPDATING SYSTEM ====="
              sudo dnf update -y

              echo "===== INSTALLING DOCKER ====="
              sudo dnf install docker -y

              echo "===== STARTING DOCKER ====="
              sudo systemctl daemon-reexec
              sudo systemctl daemon-reload
              sudo systemctl start docker
              sudo systemctl enable docker

              echo "===== WAITING FOR DOCKER ====="
              sleep 20

              sudo usermod -aG docker ec2-user

              echo "===== VERIFY DOCKER ====="
              docker --version || echo "Docker not ready yet"

              # Retry loop (VERY IMPORTANT)
              for i in {1..5}
              do
                docker info && break
                echo "Docker not ready, retrying..."
                sleep 10
              done

              echo "===== PULLING IMAGES ====="

              docker pull pariks18/frontend:latest
              docker pull pariks18/backend:latest

              echo "===== REMOVING OLD CONTAINERS ====="
              docker rm -f frontend || true
              docker rm -f backend || true

              echo "===== RUNNING BACKEND ====="
              docker run -d \
                --name backend \
                -p 5000:5000 \
                pariks18/backend:latest

              sleep 10

              echo "===== RUNNING FRONTEND ====="
              docker run -d \
                --name frontend \
                -p 3000:3000 \
                pariks18/frontend:latest

              echo "===== RUNNING NGINX (OPTIONAL) ====="
              docker run -d \
                --name nginx \
                -p 80:80 \
                nginx

              echo "===== FINAL STATUS ====="
              docker ps -a

              echo "===== SETUP COMPLETE ====="
              EOF

  tags = {
    Name = "Docker-App-Server"
  }
}

# -----------------------------
# Output Public IP
# -----------------------------
output "public_ip" {
  value = aws_instance.docker_server.public_ip
}