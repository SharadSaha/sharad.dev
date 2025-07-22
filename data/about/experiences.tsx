/* eslint-disable @next/next/no-img-element */
import { IExperience } from "./interface";

const ExperienceSectionImage = ({ src }: { src: string }) => {
  return (
    <div className="relative cursor-pointer group w-full h-20 md:h-44 lg:h-60 rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
      <img
        src={src}
        alt="img"
        width={500}
        height={500}
        className="block w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const MathWorksInternshipSection = () => {
  return (
    <div>
      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Built a real-time{" "}
        <span className="font-semibold text-sky-500">IMU Data Visualizer</span>{" "}
        for MATLAB’s ROS tools, crafted{" "}
        <span className="font-semibold text-sky-500">C++ plugins</span> for
        Gazebo, and solved complex{" "}
        <span className="font-semibold">time sync challenges</span> across
        simulators.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <ExperienceSectionImage src={"/images/mathworks-intern-img-1.jpg"} />
        <ExperienceSectionImage src={"/images/mathworks-intern-img-2.jpg"} />
      </div>
    </div>
  );
};

const RdashInternshipSection = () => {
  return (
    <div>
      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Delivered{" "}
        <span className="font-semibold text-sky-500">30+ features</span>,
        optimized frontend performance by{" "}
        <span className="font-semibold">7%</span> through code-splitting and
        lazy-loading, and enforced{" "}
        <span className="font-semibold">type-safe, modular architectures</span>{" "}
        to enhance maintainability.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <ExperienceSectionImage src={"/images/rdash-intern-img-1.jpg"} />
        <ExperienceSectionImage src={"/images/rdash-intern-img-2.jpg"} />
      </div>
    </div>
  );
};

const RdashFulltimeSection = () => {
  return (
    <div>
      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Led modules for{" "}
        <span className="font-semibold text-sky-500">3000+ global users</span> —
        designed{" "}
        <span className="font-semibold">
          Daily Progress Reports with PDF automation
        </span>
        , implemented{" "}
        <span className="font-semibold">
          <span className="text-sky-500">i18n</span>, multi-currency, and tax
          flexibility
        </span>
        , and delivered{" "}
        <span className="font-semibold">
          interactive schedulers with Gantt charts
        </span>
        .
      </p>

      <div className="grid grid-cols-2 gap-4">
        <ExperienceSectionImage src={"/images/rdash-sde-img-1.jpg"} />
        <ExperienceSectionImage src={"/images/rdash-sde-img-2.jpg"} />
        <ExperienceSectionImage src={"/images/rdash-sde-img-3.jpg"} />
        <ExperienceSectionImage src={"/images/rdash-sde-img-4.jpg"} />
      </div>
    </div>
  );
};

export const experiences: IExperience[] = [
  {
    title: "Software Engineer I (2024)",
    content: <RdashFulltimeSection />,
  },
  {
    title: "Software Engineer Intern (2024)",
    content: <RdashInternshipSection />,
  },
  {
    title: "EDG Intern (2023)",
    content: <MathWorksInternshipSection />,
  },
];
