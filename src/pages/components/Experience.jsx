import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import "../../style/Experience.css";
import videoEditorSertificate from "../../assets/video-editor-certif.jpg";
import bootcampKelasCertificate1 from "../../assets/kelas-bootcamp-1.jpg";
import bootcampKelasCertificate2 from "../../assets/kelas-bootcamp-2.jpg";

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h1>Experience</h1>
        <div className="timeline-experience">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2024 - January 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Digital Marketing Bootcamp (Bootcamp)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Harisenin.com <HiMiniBuildingOffice />
              </h4>
              <p>
                Digital Marketing Fundamental, Performance Marketing,
                Copywriting, Social Media Ads Ads, SEO & SEM Specialist
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="April 2024 - June 2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Digital Marketing Bootcamp (Bootcamp)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Kelas.work <HiMiniBuildingOffice />
              </h4>
              <p>Digital Marketing Strategy, Copywriting, Digital Ads</p>
              <div className="certificate">
                <a
                  href="https://drive.google.com/file/d/1gzz1RxRgv9r48YZllm7-eI9aVPifL3Qx/view?usp=sharing"
                  target="_blank"
                >
                  <img src={bootcampKelasCertificate1} alt="" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1d8YeC5S1jMjwXQjqqSKcbrJyMKPDQJu-/view?usp=sharing"
                  target="_blank"
                >
                  <img src={bootcampKelasCertificate2} alt="" />
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="October 2023 - January 2024 "
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Video Editor (Internship)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Rufu Property <HiMiniBuildingOffice />
              </h4>
              <p>
                My internship as a video editor opened my eyes to the exciting
                world of video editing. I learned a great deal about Filmora and
                CapCut, from the basics to advanced techniques. This intensive
                learning process has yielded satisfying results, leading me to
                be recognized as the best video editor intern.
              </p>
              <div className="certificate">
                <a
                  href="https://drive.google.com/file/d/1ttNqHZ6zl_qfhSrlCnwwr4EIdDBEbEUG/view?usp=sharing"
                  target="_blank"
                >
                  <img src={videoEditorSertificate} alt="" />
                </a>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </section>
  );
}

export default Experience;
