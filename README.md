 # Dockerized-Construction
 
 ## Group No: D6 - Group 07
 
 ## Project No	DO-18
 
 
 ### Project Description

This project focuses on containerizing a Construction Management System using Docker and modern DevOps practices. The main objective is to package the entire application, along with all its dependencies, into lightweight and portable Docker containers. Containerization ensures that the system runs consistently across multiple environments such as development, testing, and production without facing compatibility or dependency issues.In traditional software deployment, applications often fail to run properly when moved from one environment to another due to differences in system configurations, libraries, or runtime dependencies. Docker solves this problem by creating isolated containers that include everything the application needs to run. This project uses Docker to encapsulate the construction management platform and its supporting services, ensuring reliability, portability, and scalability.The Construction Management System itself is designed to assist organizations in efficiently handling various construction-related operations. These operations include project planning, task scheduling, resource allocation, workforce management, and progress monitoring. By running each service inside a container, the system ensures that updates, scaling, and maintenance can be performed smoothly without disrupting other services.
The use of containerization also improves collaboration among development teams. Developers can run the same containerized application on their local machines that will later run in production, which eliminates the common problem of “it works on my machine.” This makes the development process faster, more efficient, and more reliable.

### Project Overview

The Dockerized Construction Management System serves as a centralized platform for managing and monitoring construction projects while simultaneously providing a robust and automated deployment infrastructure. The core application is developed using Node.js and Express.js, which handle backend operations such as API development, business logic, and communication with the database.The platform provides a web-based management dashboard that allows administrators and project managers to manage construction projects efficiently. Through this dashboard, users can create new projects, assign tasks to workers, allocate resources, monitor timelines, and track the progress of ongoing construction activities.To ensure a modular and scalable architecture, the system follows a multi-container design. Each major component of the system—such as the application server, database server, and supporting services—runs in a separate Docker container. These containers communicate with each other through Docker networking, allowing the entire system to operate as a unified platform.

The deployment workflow is further enhanced using CI/CD (Continuous Integration and Continuous Deployment) practices. Whenever developers push updates to the source code repository, automated pipelines are triggered. These pipelines build new Docker images, run tests, and deploy the updated containers automatically.
To manage multiple containers simultaneously, the project uses Docker Compose. Docker Compose simplifies the configuration and deployment of multi-container applications by defining all services in a single configuration file. With a single command, the entire system—including the backend server, database, and other dependencies—can be started or stopped.This automated workflow significantly reduces manual configuration efforts and ensures that updates can be deployed quickly and reliably.

### Objectives
#### 1. Containerization

The primary objective of this project is to package the construction management application and its supporting services into Docker containers. Containerization allows the application to run independently of the underlying operating system, ensuring that it behaves consistently in every environment.

#### 2. Portability

Another major objective is to make the system highly portable. By using Docker containers, the application can be deployed on various platforms such as local development machines, cloud servers, or production environments without requiring additional configuration.

#### 3. Efficiency

The project aims to improve operational efficiency by automating the deployment process and reducing the need for manual setup. Developers and administrators can launch the entire system using simple commands, which saves time and reduces human errors.

#### 4. Scalability

The system is designed to support the growing needs of construction projects. Containerization allows services to be scaled easily by running multiple instances of containers when the system experiences increased workload.

#### 5. Security

Security is an important objective of this project. The system uses secure authentication mechanisms, encrypted environment variables, and controlled access to ensure that sensitive data such as project details and user credentials are protected.

#### 6. Maintainability

By separating services into independent containers, the system becomes easier to maintain. Individual components can be updated, restarted, or replaced without affecting the entire application.

### Tech Stack
| Category | Tools / Technologies Used |
|----------|---------------------------|
| IaC & Orchestration | Terraform, Kubernetes (K8s), Docker |
| CI/CD & Automation | GitHub Actions, Git |
| Backend (Control Plane) | Node.js, Express.js |
| Database & Authentication | MongoDB (Mongoose), JWT, Bcrypt |
| Frontend / Templating | EJS (Embedded JavaScript) |
| Environment Management | Dotenv, Cookie-parser, Multer |


### Key Features

Containerized Application Deployment
All components of the system are packaged into Docker containers, making deployment quick and consistent.

Project and Task Management
The platform enables administrators to create projects, assign tasks, and monitor construction progress.

Secure Authentication System
User authentication is implemented using JWT tokens and password encryption with Bcrypt.

Automated Build Process
Every update to the source code triggers automated Docker image builds and container deployment.

Multi-Service Architecture
Different modules such as resource management, scheduling, and reporting run as independent services.

### Group Members

| S.No | Name | Enrollment Number |
|------|------|------------------|
| 1 | PALAK HARDE | EN22CS301673 |
| 2 | PARIKSHIT GOLE | EN22CS301685 |
| 3 | NITIN KUMAR SINGH | EN22CS301662 |
| 4 | NITISH SINGH YADAV | EN22CS301663 |
| 5 | PRIYAL GUPTA | EN22CS301619 |


### Conclusion

The Dockerized Construction Management System highlights how containerization can improve software deployment and management in project-based industries. By using Docker to package applications and services, the system ensures reliable deployments, faster development cycles, and simplified scalability. This approach reduces environment-related issues and provides a flexible infrastructure capable of supporting large-scale construction project management.
