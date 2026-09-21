import {
  Monitor,
  Code2,
  Braces,
  Terminal,
  Cpu,
  GitBranch,
  BookOpen,
  GraduationCap,
  Database,
  Cloud,
  Smartphone,
  FileCode2,
} from "lucide-react";

const OUTER_ICONS = [Monitor, Code2, Braces, Terminal, Cpu, GitBranch];
const INNER_ICONS = [BookOpen, GraduationCap, Database, Cloud, Smartphone, FileCode2];

function OrbitRing({ icons, radius, duration, reverse = false, iconSize = 20 }) {
  return (
    <>
      {/* Static circular path line */}
      <div
        className="orbit-path"
        style={{ "--radius": `${radius}px` }}
      />

      {/* Spinning icon ring */}
      <div
        className="orbit-ring"
        style={{
          "--duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {icons.map((Icon, i) => {
          const angle = (360 / icons.length) * i;
          return (
            <div
              key={i}
              className="orbit-slot"
              style={{
                "--angle": `${angle}deg`,
                "--radius": `${radius}px`,
              }}
            >
              <div className="orbit-counter">
                <div
                  className="orbit-icon-box"
                  style={{
                    "--duration": `${duration}s`,
                    animationDirection: reverse ? "reverse" : "normal",
                  }}
                >
                  <Icon size={iconSize} strokeWidth={1.75} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function OrbitBackground({ children }) {
  return (
    <div className="orbit-scene">
      {/* Center glow */}
      <div className="orbit-glow" />

      {/* Ellipse wrapper — squashes the circular orbit into an ellipse */}
      <div className="orbit-ellipse">
        <OrbitRing icons={OUTER_ICONS} radius={420} duration={55} iconSize={22} />
        <OrbitRing
          icons={INNER_ICONS}
          radius={280}
          duration={38}
          reverse
          iconSize={18}
        />
      </div>

      {/* Your page content sits on top */}
      <div className="orbit-content">{children}</div>
    </div>
  );
}