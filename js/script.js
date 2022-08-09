// document.querySelector(".about-header")
let aboutButton = document.querySelector("#about-button")
let projectsButton = document.querySelector("#projects-button")
let aboutElement = document.querySelector(".about-container");
let projectsElement = document.querySelector(".projects-container");

console.log(aboutElement.style.display);

function toggleAbout() {

  if (projectsElement.style.display != 'none' ) {
    projectsElement.style.display = 'none';
  };

  if (aboutElement.style.display == 'none' || aboutElement.style.display == '') {
    aboutElement.style.display = 'block';
  } else {
    aboutElement.style.display = 'none';
  };

};

function toggleProjects() {

  if (aboutElement.style.display != 'none' ) {
    aboutElement.style.display = 'none';
  };

  if (projectsElement.style.display == 'none' || projectsElement.style.display == '') {
    projectsElement.style.display = 'block';
  } else {
    projectsElement.style.display = 'none';
  };

};

aboutButton.addEventListener("click", toggleAbout);
projectsButton.addEventListener("click", toggleProjects);
