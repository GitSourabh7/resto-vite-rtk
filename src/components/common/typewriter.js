import Typewriter from "typewriter-effect/dist/core";

// Function for typewriter effect
export default function startTypewriter() {
  var app = document.getElementById("typing");

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
  });

  typewriter
    .pauseFor(500)
    .typeString("Best global food restaurant in ")
    .typeString(`<strong><span style="color: #1976d2;">India</span></strong>`)
    .pauseFor(500)
    .deleteChars(5)
    .typeString(`<strong><span style="color: #1976d2;">China</span></strong>`)
    .pauseFor(500)
    .deleteChars(5)
    .typeString(`<strong><span style="color: #1976d2;">Japan</span></strong>`)
    .pauseFor(500)
    .deleteChars(5)
    .typeString(`<strong><span style="color: #1976d2;">Italy</span></strong>`)
    .pauseFor(500)
    .start();
}

// Start the typewriter effect when the page loads
window.onload = () => {
  startTypewriter();
};
