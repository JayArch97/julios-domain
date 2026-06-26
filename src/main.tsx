import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "./app/projects/page.tsx";
import Blogs from "./app/blog/page.tsx";
import { Loneliness } from "./app/blog/components/loneliness";
import { Memories } from "./app/pictures || memories/page.tsx";
import App from "./App.tsx";
import { ThemeProvider } from "./hooks/use-theme.tsx";

// ThemeProvider owns the `.dark` class on <html> (OS preference + explicit
// user choice). The initial paint is handled by the inline script in
// index.html to avoid a flash of the wrong theme before React mounts.
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/homepage" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/loneliness" element={<Loneliness />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
);
