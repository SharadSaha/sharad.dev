import {
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandDjango,
  IconBrandPython,
} from "@tabler/icons-react";
import {
  SiCplusplus,
  SiExpress,
  SiPostgresql,
  SiTensorflow,
} from "react-icons/si";
import SectionWrapper from "../common/section-wrapper";
import { BsDatabase } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills" className="h-fit bg-black px-10">
      <SectionWrapper
        title="Skills"
        description="My technical skills include React, Redux, TypeScript, Node.js, Express.js, PostgreSQL, CI/CD and more."
      >
        <div className="flex flex-wrap max-w-7xl mx-auto gap-4 px-4 md:px-8 lg:px-10">
          <IconBrandReact size={64} />
          <IconBrandRedux size={64} />
          <IconBrandTypescript size={64} />
          <IconBrandNodejs size={64} />
          <SiExpress size={64} />
          <SiPostgresql size={64} />
          <IconBrandCss3 size={64} />
          <IconBrandHtml5 size={64} />
          <IconBrandJavascript size={64} />
          <IconBrandDjango size={64} />
          <IconBrandPython size={64} />
          <SiTensorflow size={64} />
          <SiCplusplus size={64} />
          <BsDatabase size={64} />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
