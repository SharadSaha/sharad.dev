"use client";

import { data } from "@/data";
import SectionWrapper from "../common/section-wrapper";
import { InfiniteMovingCards } from "../ui/moving-cards";
import {
  IconBrandCss3,
  IconBrandDjango,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { SiExpress, SiPostgresql, SiTensorflow } from "react-icons/si";

const Projects = () => {
  return (
    <section id="projects" className="h-fit bg-black px-10 pb-20">
      <SectionWrapper
        title="Projects"
        description="Here are some of the projects I have been working on recently."
      >
        <div className="antialiased relative flex flex-col nitems-center justify-center overflow-hidden">
          <InfiniteMovingCards
            items={data.projects.map((p) => ({
              name: p.name,
              description: p.description,
              customNode: (
                <div className="flex gap-2 py-2">
                  {p.skills.includes("react") && <IconBrandReact />}
                  {p.skills.includes("redux") && <IconBrandRedux />}
                  {p.skills.includes("typescript") && <IconBrandTypescript />}
                  {p.skills.includes("node") && <IconBrandNodejs />}
                  {p.skills.includes("mongodb") && <IconBrandMongodb />}
                  {p.skills.includes("html") && <IconBrandHtml5 />}
                  {p.skills.includes("css") && <IconBrandCss3 />}
                  {p.skills.includes("js") && <IconBrandJavascript />}
                  {p.skills.includes("django") && <IconBrandDjango />}
                  {p.skills.includes("python") && <IconBrandPython />}
                  {p.skills.includes("postgres") && <SiPostgresql size={24} />}
                  {p.skills.includes("express") && <SiExpress size={24} />}
                  {p.skills.includes("tensorflow") && (
                    <SiTensorflow size={24} />
                  )}
                </div>
              ),
              onClick: () => window.open(p.link, "_blank"),
            }))}
            direction="right"
            speed="fast"
          />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
