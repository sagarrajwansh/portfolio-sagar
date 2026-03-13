"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import ResumeButton from "./ResumeButton";
import AssistantWrapper from "./AssistantWrapper";
import BackButton from "./common/BackButton";
import ThemeToggle from "./ThemeToggle";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Routes that should render full screen without layout elements
  const fullScreenRoutes = [
    "/archery",
    "/test",
    "/projects/playground/project-dashboard",
  ];

  const isFullScreen = fullScreenRoutes.includes(pathname);

  // Theme logic based on route
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("test-theme");

    if (
      pathname.startsWith("/test") ||
      pathname === "/playground/project-dashboard"
    ) {
      root.classList.add("test-theme");
    }
  }, [pathname]);

  return (
    <>
      {!isFullScreen && <BackButton label="Back" />}
      {!isFullScreen && <AssistantWrapper />}
      {!isFullScreen && <ResumeButton />}
      {!isFullScreen && <ThemeToggle />}
      <main
        className={isFullScreen ? "h-screen w-screen overflow-hidden" : ""}
      >
        {children}
      </main>
      {!isFullScreen && <Footer />}
    </>
  );
}
