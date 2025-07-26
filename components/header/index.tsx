"use client";

import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { TextGenerateEffect } from "../ui/text-effect";
import MainButton from "../ui/main-button";
import { BsArrowRight } from "react-icons/bs";
import { FloatingNav } from "../ui/navbar";
import Logo from "./logo";
import Contact from "./contact";

const HeaderBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </div>
    </div>
  );
};

const Header = () => {
  const [contactFormOpen, setContactFormOpen] = useState<boolean>(false);
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Home",
      onClick: () => handleNavClick("home"),
      icon: <BsArrowRight />,
    },
    {
      name: "About",
      onClick: () => handleNavClick("about"),
      icon: <BsArrowRight />,
    },
    {
      name: "Skills",
      onClick: () => handleNavClick("skills"),
      icon: <BsArrowRight />,
    },
    {
      name: "Projects",
      onClick: () => handleNavClick("projects"),
      icon: <BsArrowRight />,
    },
  ];

  return (
    <div
      className="relative h-screen sm:px-4 px-4 py-20 bg-black flex justify-center items-center"
      id="home"
    >
      <Logo />
      <FloatingNav
        navItems={navItems}
        onBtnClick={() => setContactFormOpen(true)}
      />
      <h1 className="text-4xl font-bold overflow-x-hidden">
        <Spotlight className="top-1/4 left-1/6" fill="hsl(210, 70%, 60%)" />
        <Spotlight className="top-1/2 left-1/3" fill="hsl(320, 70%, 60%)" />
        <HeaderBackground>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <TextGenerateEffect
                duration={1}
                filter={false}
                className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-snug"
                words="Building clean, fast, and impactful web products."
                styleEndingWord
              />
              <div className="text-sm font-light text-white max-w-xl leading-snug px-10">
                I&apos;m Sharad, a software engineer who cares about simplicity,
                performance, and crafting meaningful user experiences through
                modern web technologies.
              </div>
            </div>
            <MainButton onClick={() => setContactFormOpen(true)}>
              <div className="flex items-center gap-2 px-1">
                Contact Me <BsArrowRight />
              </div>
            </MainButton>
          </div>
          {contactFormOpen && (
            <Contact onClose={() => setContactFormOpen(false)} />
          )}
        </HeaderBackground>
      </h1>
    </div>
  );
};

export default Header;
