---
title: Personal Projects
tags: ["project"]
image: /assets/portfolio/portfolio2/thumbnail.webp
imageAlt: the screenshot of my first 5 favorites projects
description: Compilation of frontendmentor.io and frontendpractice.com challenges coded by me ʕ•́ᴥ•̀ʔっ♡
buttonText: View Projects
projectList: [
  {
    projectName: "Tip Calculator",
    projectRepo: "https://github.com/teoh4770/tips-calc-app",
    projectLive: "https://teoh4770.github.io/tips-calc-app/",
  },
  {
    projectName: "Password Generator",
    projectRepo: "https://github.com/teoh4770/fm-password-generator-app",
    projectLive: "https://teoh4770.github.io/fm-password-generator/",
  },
  {
    projectName: "Backstage Talks Magazine Archive Mock Up",
    projectRepo: "https://github.com/teoh4770/FP-backstage-talks-magazine-archive-mock-up",
    projectLive: "https://teoh4770.github.io/FP-backstage-talks-magazine-archive-mock-up/",
  },
  {
    projectName: "Google Calculator",
    projectRepo: "https://github.com/teoh4770/fm-calculator",
    projectLive: "https://teoh4770.github.io/fm-calculator/",
  },
  {
    projectName: "Quizzical: a small quiz app (made with React)",
    projectRepo: "https://github.com/teoh4770/Quizzical",
    projectLive: "https://inspiring-cranachan-7f7f91.netlify.app/",
  }
]
---

<article class="portfolio-page container">

## Personal Projects

<div class="wrapper" markdown="1">

  <div class="portfolio-page__links" markdown="1">

    Link to: [My Personal Project List on Github](https://github.com/stars/teoh4770/lists/mock-up-projects)  

    </div> 

  To me, learning only happens when I engage with the materials and use the knowledge myself. Therefore, hands-on learning plays a significant role in my coding journey. During my free time, I enjoy working on frontend challenges to enhance my fundamental skills as a frontend developer. I choose two platforms, namely Frontend Mentor and Frontend Practice, which provide a collection of real-world design mockups for me to recreate.

  <img src="/assets/portfolio/portfolio2/image1.webp" alt="the landing page of the makeup artist website">

  **What did I build the projects with?**
  - HTML
  - CSS
  - JavaScript
  - TypeScript
  - Figma (for design reference)
</div>

### Project List
<div class="wrapper" markdown="1">  
  
  Below are my {{projectList.length}} favorites works with Frontend Mentors and Frontend Practice:

  **Projects**

  <ul>
  {%- for project in projectList -%}  

  <li>
    <a href="{{project.projectRepo}}" target="_blank">{{project.projectName}}</a> 
    | 
    <a href="{{project.projectLive}}" target="_blank">Live</a></li>

  {%- endfor -%}
  </ul>



<img src="/assets/portfolio/portfolio2/image2.webp" alt="the landing page of Backstage Talks Magazine Archive Mock Up">
<small>A little sneak peek of my Backstage Talks Mock Up Project</small>
</div>

### Web Stack and Explanation
<div class="wrapper" markdown="1">
  To improve my frontend fundamental, I created projects using the basic web stack - HTML, CSS and JavaScript, as recommended by both Frontend Mentor and Frontend Practice. Most of the projects are deployed on Github Page, the hosting service provided by Github.
</div>

### Lessons Learned
<div class="wrapper" markdown="1">
  The lesson I have learnt from building these projects are perfectly concluded in this single quote:

  "All big things come from small beginnings. The seed of every habit is a single, tiny decision. But as that decision is repeated, a habit sprouts and grows stronger. Roots entrench themselves and branches grow. The task of breaking a bad habit is like uprooting a powerful oak within us. And the task of building a good habit is like cultivating a delicate flower one day at a time." - James Clear, Author of Atomic Habit
</div>

</article>
