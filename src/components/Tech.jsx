import { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (technology) => {
    setHoveredTech(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 relative"
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            {hoveredTech === technology.name && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 p-2 bg-black text-white rounded-lg">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
