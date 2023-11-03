// global
const introLength = "short";
const introductions = {
  short: `
  <p>I'm Chee Kian Teoh, a 21-year-old computer science student at Wilfrid Laurier University in Waterloo, Canada.</p>
  <p>When I was 17, I was unsure about my future career. My family helped me realize my interest in computers. I tried a data science course on Udemy but didn't like it. However, I discovered a passion for coding.</p>
  <p>I found joy in problem-solving and creating things from scratch. I started learning web development on my own. I also got a job with a startup, leading a project to create a cool user interface for a machine. It's been a great journey! 😄</p>`,
  long: `
  <p>Hi, I'm Chee, a 21-year-old Computer Science student at Wilfrid Laurier University in Canada.</p>

  <p>At 17, I wasn't sure about my future. I talked with my family and realized I always liked computers. I tried learning "data science" with a long Udemy course, but it didn't excite me.</p>
  
  <p>However, I found that I really enjoyed the programming part of the course. It was different from my other studies because I got instant feedback from the programs I made. So, I decided to study Computer Science.</p>
  
  <p>I also discovered that I enjoy problem-solving and creating things. I started by teaching myself web development, and it felt like I had a superpower to build things from scratch.</p>
  
  <p>Now, I'm balancing my Computer Science studies with self-taught web development. I even got a job with a startup's engineering team, where I led a project to create a user interface for a machine. It's been an exciting journey! 😄</p>
  `,
}

// selectors
const $body = document.querySelector("body");

app();



// initialize here
function app() {
  setIntroductionLength(introLength);
  setEventListeners();
}

// setters
function setIntroductionLength(length) {
  const $introduction = $body.querySelector(".introduction");

  if (!$introduction || !introductions[length]) return;

  $introduction.innerHTML = introductions[length];
}

function setEventListeners() {
  const $introButtons = $body.querySelectorAll(".intro-button");

  if (!$introButtons) return;
  $introButtons.forEach(($button) => {
    $button.addEventListener("click", function () {
      setIntroductionLength(this.id);
    });
  });
}

// getters
