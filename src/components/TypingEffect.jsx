import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { styles } from "../styles";

const TypingEffect = () => {
  const lines = useMemo(() => [
    "I develop 3D visuals, ",
    "user interfaces, mobile and web applications"
  ], []);
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState('');

  const typeText = useCallback(() => {
    if (currentLine < lines.length) {
      if (text.length < lines[currentLine].length) {
        setText(prevText => prevText + lines[currentLine][text.length]);
      } else {
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setText('');
        }, 250);
      }
    }
  }, [text, lines, currentLine]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      typeText();
    }, 50);

    return () => clearTimeout(timeout);
  }, [text, typeText]);

  return (
    <div>
        <h1 className="text-white-100 animate-twinkling">Welcome to My Portfolio</h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
  Hi, I'm <span className="text-[#915EFF]">Fares</span>
</h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        {lines.slice(0, currentLine).join('')}{text}
      </p>
    </div>
  );
};

export default TypingEffect;
