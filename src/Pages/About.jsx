export const About = () => {
  const content = [
    {
      title: "Name",
      subtitle: "Tushar Deshmukh",
    },
    {
      title: "Location",
      subtitle: "Nagpur, India",
    },
    {
      title: "Degree",
      subtitle: "B.Tech - Computer Science and Engg.",
    },
    {
      title: "Status",
      subtitle: "Available for Work",
    },
  ];

  const extraSkills = [
    {
      type: "Problem Solver",
    },
    {
      type: "Fast Learner",
    },
    {
      type: "Detail Oriented",
    },
    {
      type: "Self-Motivated",
    },
  ];

  return (
    <div className="container">
      <div className="about-section">
        {/* Heading */}
        <div className="about-heading">
          <h1>- ABOUT ME</h1>
          <h2>Who I Am & What I Do</h2>
        </div>

        {/* About Content */}
        <div className="about-grid">
          <div className="about-left">
            <img src="profile.webp" loading="lazzy" alt="Profile" className="about-img" />

            <div className="about-skills-wrapper">
              {extraSkills.map((curEle, index) => {
                const { type } = curEle;
                return (
                  <p key={index} className="about-skills-w-title">
                    {type}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bio + Skill Cards */}
          <div className="about-grid-2">
            <p className="about-span1">I turn ideas into <span className="about-span2">useful</span> digital products.</p>
            <div className="about-para">
              <p>
                Specialization in React.js and modern frontend development. I've
                built production-deployed applications, integrated REST APIs,
                and collaborated on real-world projects during my internship at
                CyberAthon.
              </p>
              <p>
                My approach combines technical precision with design thinking —
                I care about both how things work and how they feel. I write
                clean, maintainable code and constantly push myself to learn new
                technologies.
              </p>
            </div>

            <div className="about-skills-section">
              <div className="about-skills-s">
                {content.map((curEle, index) => {
                  const { title, subtitle } = curEle;
                  return (
                    <div key={index} className="about-skills-s-btn">
                      <p className="about-skills-s-title">{title}</p>
                      <p className="about-skills-s-subtitle">{subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
