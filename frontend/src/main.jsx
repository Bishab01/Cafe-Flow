import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { CafeProvider, UnitProvider } from "./context/cafeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CafeProvider>
          <UnitProvider>
            <App />
          </UnitProvider>
        </CafeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
