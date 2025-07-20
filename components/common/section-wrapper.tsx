/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

const SectionWrapper = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; title: string; description?: string }
>(({ children, ...props }, ref) => {
  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {props.title}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {props.description}
        </p>
      </div>
      {children}
    </div>
  );
});

export default SectionWrapper;
