import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FreelaceTemplate } from "./screens/FreelaceTemplate";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FreelaceTemplate />
  </StrictMode>,
);
