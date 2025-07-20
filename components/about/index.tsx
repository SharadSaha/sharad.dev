import { data } from "@/data";
import { Timeline } from "../ui/timeline";

const About = () => {
  return (
    <section id="about" className="h-fit bg-black px-10">
      <Timeline data={data.about.experiences} />
    </section>
  );
};

export default About;
