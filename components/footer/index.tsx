/* eslint-disable @next/next/no-img-element */
"use client";
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconExchange,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBook,
} from "@tabler/icons-react";
import SectionWrapper from "../common/section-wrapper";
import { FloatingDock } from "../ui/floating-icons";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <section id="projects" className="h-fit bg-black px-10 pb-10">
      <SectionWrapper title="Socials">
        <div className="flex items-start pb-10">
          <FloatingDock items={links} />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Footer;
