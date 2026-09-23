import { NavLink } from "react-router-dom";
import projectData from "../apis/projects.json";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="skills-section">
          {/* Heading */}
          <div className="about-heading">
            <h1>- COMPLETED WORK</h1>
          </div>

          {/* Sub Heading */}
          <div>
            <p className="about-span1">
              A few things I've <span className="skills-span1">brought</span>
              <span className="skills-span1">to show.</span>
            </p>
          </div>

          {/* Projects Box */}
          <div className="project-grid">
            {projectData.map((curEle, index) => {
              const { category, title, img, description, url, content } =
                curEle;

              return (
                <div key={index} className="flex flex-col gap-8">
                  <hr className="horizontal-line" />
                  <div className="project-card">
                    <div className="project-img">
                      <img src={img} alt={title} />
                      <div className="project-img-overlay"></div>
                    </div>

                    <div className="project-card-right">
                      <p className="category">{category}</p>
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>

                      <div className="skill-list">
                        {content.map((cur, i) => {
                          const { type } = cur;
                          return (
                            <span key={i} className="skill-item">
                              {type}
                            </span>
                          );
                        })}
                      </div>

                      <NavLink className="url" to={url} target="_blank">
                        <button>GitHub</button>
                      </NavLink>
                    </div>
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
