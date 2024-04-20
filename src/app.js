// global
/**
 * introduction types
 * @readonly
 * @return {string}
 */
const introductionTypes = {
  short: `
  <p>Hi! I'm Chee Kian Teoh, a frontend developer who led the frontend project at <a href="https://www.nfinitenano.com/" target="_blank">Nfinite Nanotech</a>. I thrive on problem-solving and enjoy building from scratch. My core values: caring, curiosity and have desire to improve. Tech can be daunting, but my eagerness to learn helps me adapts. My goal? Keep growing as a frontend developer and be solid team player anywhere.</p>
  `,
  long: `
  <p>Hello there! I'm Chee Kian Teoh, a frontend developer who takes joy in solving problems and building things from the ground up. I taught myself web development and landed a job with a startup, where I lead a project to create a cool user interface for a machine. It's been an amazing journey! 😄</p>

  <p>My core values are be caring, be curious, and have desire to improve. Tech is a scary industry to jump into, but my eagerness to improve allow me to adapt to different challenges. As long as I am a frontend developer, my goal is to continue learning and practicing so that I can be a valuable team player in any environment.</p>
 `,
};

// Variables
let currentIntroductionType = "short";

// DOM
const $introductionButtons = document.querySelectorAll(".intro-button");
const $introduction = document.querySelector(".introduction");

// Event listeners
$introductionButtons.forEach($button => {
  $button.addEventListener("click", (e) => {
    populateIntroduction(e.currentTarget.id);
  })
})

// App
app();

function app () {
  populateIntroduction();
}

/**
 * 
 * @param {introductionTypes} introductionType 
 * @returns {string}
 */
function populateIntroduction(introductionType = "short") {
  currentIntroductionType = introductionType;

  toggleState();
  const content = introductionTypes[currentIntroductionType];
  $introduction.innerHTML = content;
}

function toggleState() {
  const CLICKED_CLASS = "clicked";

  $introductionButtons.forEach($button => {
    $button.classList.remove(CLICKED_CLASS);

    if ($button.id === currentIntroductionType) {
      $button.classList.add(CLICKED_CLASS);
    }
  })
}
