import React, { useState, useEffect } from 'react';
import { styles } from "../styles";

const TypingEffect = () => {
  const lines = [
    "Hi, I'm ",
    "Fares",
    "I develop 3D visuals,",
    "user interfaces and web applications"
  ];
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentLine < lines.length) {
      if (text.length < lines[currentLine].length) {
        setTimeout(() => {
          setText(lines[currentLine].slice(0, text.length + 1));
        }, 80); // Typing speed
      } else {
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setText('');
        }, 1000); // Delay before typing next line
      }
    }
  }, [text, lines, currentLine]);

  return (
    <div>
      <h1 className={`${styles.heroHeadText} `}>
        {currentLine >= 1 && "Hi, I'm "}
        {currentLine >= 2 && <span className="text-[#915EFF]">Fares</span>}
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        {currentLine >= 3 && "I develop 3D visuals,"}
        {currentLine >= 4 && " user interfaces and web applications"}
        {text}
      </p>
    </div>
  );
};

export default TypingEffect;
