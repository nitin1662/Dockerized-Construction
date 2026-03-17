import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Test from "./context/Test.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Test>
        <AuthProvider>
          <App></App>
        </AuthProvider>
      </Test>
    </StrictMode>
  </BrowserRouter>
);
