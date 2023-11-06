// global
const introductions = {
  short: `
  <p>Hello there! I'm Chee Kian Teoh, a frontend developer who takes joy in solving problems and building things from the ground up. I taught myself web development and landed a job with a startup, where I lead a project to create a cool user interface for a machine. It's been an amazing journey! 😄</p>

  <p>My core values are be caring, be curious, and have desire to improve. Tech is a scary industry to jump into, but my eagerness to improve allow me to adapt to different challenges. As long as I am a frontend developer, my goal is to continue learning and practicing so that I can be a valuable team player in any environment.</p>
 `,
};

// selectors
const $body = document.querySelector("body");
app();

// initialize here
function app() {
  setIntroductionLength();
  setEventListeners();
}

// setters
function setIntroductionLength() {
  const $introduction = $body.querySelector(".introduction");

  if (!$introduction || !introductions["short"]) return;

  $introduction.innerHTML = introductions["short"];
  setButtonState("short");
}

function setButtonState(length) {
  const $introButtons = $body.querySelectorAll(".intro-button");
  const className = "clicked";

  if ($introButtons.length === 0) return;
  $introButtons.forEach(($button) => {
    $button.classList.remove(className);

    if ($button.id === length) {
      $button.classList.add(className);
    }
  });
}

function setEventListeners() {
  const $introButtons = $body.querySelectorAll(".intro-button");

  if ($introButtons.length === 0) return;
  $introButtons.forEach(($button) => {
    $button.addEventListener("click", function () {
      setIntroductionLength(this.id);
    });
  });
}

// getters

// Testing
