import { useRef, useState} from "react";
import Heading from "../components/Heading";
import unlock from "../assets/Logos/unlock.PNG";
import cc from '../assets/Logos/cc-plus.PNG';
import narrative from '../assets/Logos/narrative-2.jpg';
import flair from '../assets/Logos/flair.JPG';
import Sample from "../components/Sample";

const Projects = () => {
  const titleRef = useRef();
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="projects" id="projects">
      <Heading title="Projects & Samples" titleRef={titleRef} />

      <div className="container">
        {/* 1 */}
        <div className="project-left">
          <img src={unlock} alt="unlock" style={{ width: "280px" }} />
          <div className="about">
            <p className="text-light fs-5">
              <a
                href="https://unlockassist.com"
                target="_blank"
                rel="noreferrer"
              >
                UNLOCK
              </a>
              is Egypt's business services marketplace, matching top agencies
              with clients who are actively searching for business services such
              as marketing, legal, software, financial & consulting services.
            </p>
            <hr className="text-light" />
            <Sample
              title="Blog Post"
              link="https://unlockassist.com/blog/everything-you-need-to-know-about-the-cbes-new-import-rules.html"
              body="Everything you need to know about the CBE's new import rules"
            />
            <Sample
              title="Interviews & Captions"
              link="https://www.linkedin.com/posts/unlockprofessionals_businessservices-marketplace-marketing-activity-6947188452408864769-eiP6?utm_source=linkedin_share&utm_medium=ios_app"
              body="UNLOCK Service providers showcase"
            />
            <Sample
              title="Content Creation"
              link="https://www.instagram.com/reel/CfbXo_clpPF/?igshid=YmMyMTA2M2Y="
              body="Hear from the service provider: Mahmoud Aboutaleb"
            />
          </div>
        </div>
        {expanded &&
        <>
        {/* 2 */}
        <div className="project-right mt-5">
          <img 
            src={flair} 
            alt="unlock"
            style={{ width: "280px", padding: "90px 10px", backgroundColor: "white" }} 
          />
          <div className="about">
            <p className="text-light fs-5">
              <a
                href="https://flair-magazine.com"
                target="_blank"
                rel="noreferrer"
              >
                FLAIR Magazine 
              </a>
              <span> </span>is the 1st Arab International Luxury Living Magazine published on a monthly basis and distributed throughout Cairo, the UAE, Qatar, Bahrain, and Europe, and via an exclusive global VIP mailing list.  
            </p>
            <hr className="text-light" />
            <Sample
              title="Event Coverage"
              link="https://flair-magazine.com/cats-of-egypt-x-khoyout-troupe-in-the-love-of-our-furry-cunning-friends/"
              body="Cats of Egypt x Khoyout Troupe: In the Love of Our Furry Cunning Friends"
            />
            <Sample
              title="Movie Review"
              link="https://flair-magazine.com/flair-movie-review-spenser-confidential/"
              body="Spencer Confidential"
            />
            <Sample
              title="Lifestyle Article"
              link="https://flair-magazine.com/jewellery-spotted-on-celebrities-at-the-oscars/"
              body="Jewelry Spotted on Celebrities at the Oscars"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="project-left mt-5">
          <img src={narrative} alt="unlock" style={{ width: "280px" }} />
          <div className="about">
            <p className="text-light fs-5">
              <a
                href="https://narrativesummit.com"
                target="_blank"
                rel="noreferrer"
              >
                Narrative Summit
              </a>
              <span> </span>is an initiative that aims to create a platform fostering leadership and collaboration with various institutions and partners positioning and promoting the nation brand of Egypt. The initiative was first launched in the form of an international, locally managed PR conference in 2016 by CC Plus, a multi-disciplinary corporate communications firm.
            </p>
            <hr className="text-light" />
            <Sample
              title="Copywriting"
              link="https://fb.watch/8olPtBkvK-/"
              body="Narrative Summit - Reshaping Norms Episode"
            />
            <Sample
              title="Campaign Idea Generation - Copywriting"
              link="https://www.instagram.com/p/COsNuqpLsIH/?utm_medium=copy_link"
              body="Touristic Spots in Egypt Promotion"
            />
            <Sample
              title="Storyboard & Copywriting"
              link="https://www.instagram.com/p/CL4a0vqFQbi/?utm_medium=copy_link"
              body="Narrative Summit Reshaping Norms - Overview"
            />
            <Sample
              title="Media report"
              link="https://narrativesummit.com/wp-content/uploads/2020/11/Narrative-Recommendations-2019-English.pdf"
              body="Narrative Summit  2019 Report"
            />
          </div>
        </div>
        {/* 4 */}
        <div className="project-right" style={{marginTop: "200px"}}>
          <img 
            src={cc} 
            alt="unlock"
            style={{ width: "280px", padding: "30px", backgroundColor: "white" }} 
          />
          <div className="about">
            <p className="text-light fs-5">
              <a
                href="https://cc-plus.com"
                target="_blank"
                rel="noreferrer"
              >
                CC Plus 
              </a>
              <span> </span> is a full-fledged multi-disciplinary communications and PR firm operating in local and regional markets, delivering on clients’ brand reputation as well as providing strategic thinking and delivering high impact campaigns across all communication spectrums.  
            </p>
            <hr className="text-light" />
            <Sample
              title=""
              link="https://cc-plus.com/articles/2021/05/20/pr-to-the-rescue-3-sony-walks-into-the-future-through-the-past/"
              body="> Sony Walks into the Future through the Past"
            />
            <Sample
              title=""
              link="https://cc-plus.com/articles/2021/03/30/the-business-of-influence-2-2/"
              body="> PR to the Rescue: A Supermodel Almost Caused National Division in the US"
            />
            <Sample
              title=""
              link="https://cc-plus.com/articles/2021/07/11/how-to-avoid-bad-press/"
              body="> CC PLUS TIPS: How to Avoid Bad Press"
            />
          </div>
        </div>
        </>
        }
        
        <div className="button">
          <button 
            className="btn d-block mx-auto py-3 px-5 mb-2 fw-bold rounded-pill"
            onClick={e => {
              setExpanded(!expanded)
            }}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
