import { useRef } from "react";
import CardBox from "../components/CardBox";
import Heading from "../components/Heading";

const Skills = () => {
  const titleRef = useRef();

  return (
    <section className="skills" id="services">
      <Heading title="Services" titleRef={titleRef} />
      <div className="container ">
        <div className="row gap-4 px-3  justify-content-center">
          <CardBox
            title="Content Creation"
          />
          <CardBox
            title="Copywriting"
          />
          <CardBox
            title="Company Profiles "
          />
          <CardBox
            title="Translation"
          />
          <CardBox
            title="Blogs & Articles"
          />
          <CardBox
            title="Creative Writing"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
