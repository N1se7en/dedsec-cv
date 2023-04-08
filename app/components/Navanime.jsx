import React from "react";

export default function Navanime({ children }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const hoverEffect = (e) => {
    const originalValue = e.target.innerText;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      let value = e.target.innerText.split("");
      value = value
        .map((letter, index) => {
          if (index < iteration) {
            return originalValue[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      e.target.innerText = value;

      if (iteration >= e.target.innerText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    e.target.addEventListener("mouseleave", () => {
      clearInterval(interval);
      e.target.innerText = originalValue;
    });

    return () => clearInterval(interval);
  };

  return (
    <li className="randomizer p-2" onMouseEnter={hoverEffect}>
      {children}
    </li>
  );
}
