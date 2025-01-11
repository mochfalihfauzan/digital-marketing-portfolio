import "../../style/About.css";

import {
  SiSemrush,
  SiGoogleanalytics,
  SiGoogleads,
  SiGoogle,
  SiMeta,
  SiTiktok,
  SiWordpress,
  SiCanva,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaFrog } from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Hello! I am Moch Falih Fauzan. As an SEO Specialist, I am passionate
          about data analysis and optimizing every aspect of a website to
          achieve top search engine rankings. With a data-driven approach, I
          help businesses grow organically and sustainably. I also leverage paid
          advertising channels like Meta Ads, TikTok Ads, and Google Ads to
          complement SEO efforts and accelerate business growth.
        </p>
        <h4>Technology & Tools</h4>
        <div className="skills">
          <div className="skill">
            <SiSemrush />
            <small>Semrush</small>
          </div>
          <div className="skill">
            <FaFrog />
            <small>Screaming Frog</small>
          </div>

          <div className="skill">
            <AiFillGoogleSquare />
            <small>Google Keyword Planner</small>
          </div>
          <div className="skill">
            <SiGoogleanalytics />
            <small>Google Analytics</small>
          </div>
          <div className="skill">
            <SiGoogle />
            <small>Google Search Console</small>
          </div>
          <div className="skill">
            <SiGoogleads />
            <small>Google Ads</small>
          </div>
          <div className="skill">
            <SiMeta />
            <small>Meta Ads</small>
          </div>
          <div className="skill">
            <SiTiktok />
            <small>Tiktok Ads</small>
          </div>
          <div className="skill">
            <SiHtml5 />
            <small>HTML</small>
          </div>
          <div className="skill">
            <SiCss3 />
            <small>CSS</small>
          </div>
          <div className="skill">
            <SiWordpress />
            <small>Wordpress </small>
          </div>
          <div className="skill">
            <SiCanva />
            <small>Canva </small>
          </div>
        </div>
      </div>
    </section>
  );
}
