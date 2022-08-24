import { useRef } from "react";
import Heading from "../components/Heading";
import logos from '../assets/logos.png';

const Clients = () => {
  const titleRef = useRef();
  return (
    <section className="clients" id="clients">
      <Heading title="Notable Clients" titleRef={titleRef} />
      <div className="container">
        <div className="image">
          <img src={logos} alt="Logos" />
        </div>
      </div>
    </section>
  );
}

export default Clients;