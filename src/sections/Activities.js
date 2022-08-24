import data from "../data/Activities.json";
import Heading from '../components/Heading';
import AccordionItem from "../components/AccordionItem";
import { useRef} from "react";

const Activities = () => {
  const activities = data;
  const titleRef = useRef();

  return (
    <section className="activities" id="activities">
      <Heading title="Activities" titleRef={titleRef}/>
      <div className="container">
        <div className="accordion" id="accordionExample">
          {activities.map((ele, ind) => {
            return (
              <AccordionItem
                heading={ele.heading}
                link={ele.link}
                duration={ele.duration}
                body={ele.body}
                id={ind}
                key={ind}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
