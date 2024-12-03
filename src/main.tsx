import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import YoutubeApp from "./YoutubeApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <YoutubeApp />
  </StrictMode>
);
