import { li } from "motion/react-client";
import { AnimationScroll } from "../UI/AnimationScroll";
import skillsData from "../apis/skills.json";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills-section">
          {/* Heading */}
          <div className="about-heading">
            <h1>- MY TOOLKIT</h1>
          </div>

          {/* Sub Heading */}
          <div>
            <p className="about-span1">
              The tools behind <span className="skills-span1">the</span>
              <span className="skills-span1">work.</span>
            </p>
          </div>

          {/* Animation Scroll */}
          <AnimationScroll />

          {/* Skills Box */}
          <div className="skill-grid">
            {skillsData.map((curEle, id) => {
              const { title, subtitle } = curEle;
              return (
                <div key={id} className={`skill-card skill-card-${id+1}`}>
                  <div className="flex flex-col gap-4">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </div>

                  <div className="skill-list">
                    {curEle.skills.map((cur, index) => {
                      const { content } = cur;
                      return (
                        <span key={index} className="skill-item">
                          {content}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
