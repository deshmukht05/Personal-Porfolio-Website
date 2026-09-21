import { Gem } from "lucide-react";

export const AnimationScroll = () => {
  const items = [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "RESTful API integration (Axios)",
    "MySQL",
    "Tailwind CSS",
    "GitHub",
    "Java",
    "MongoDB",
  ];

  const renderItems = () =>
    [...items, ...items].map((item, index) => (
      <div key={index} className="flex items-center gap-4 md:gap-16">
        <span className="animation-text">{item}</span>
        <Gem size={12} className="text-[#c8d6ff] shrink-0" />
      </div>
    ));

  return (
    <div className="animation-scroll-wrapper">
      {/* Back bar — slower, one direction */}
      <div className="animation-scroll-bar2">
        <div className="overlay-fade-1"></div>
        <div className="overlay-fade-2"></div>
        <div className="flex animate-scroll-slow items-center gap-4 md:gap-16">
          {renderItems()}
        </div>
      </div>

      {/* Front bar — faster, opposite direction */}
      <div className="animation-scroll-bar1">
        <div className="overlay-fade-1"></div>
        <div className="overlay-fade-2"></div>
        <div className="flex animate-scroll-fast items-center gap-4 md:gap-16">
          {renderItems()}
        </div>
      </div>
    </div>
  );
};