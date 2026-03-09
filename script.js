const text = "Hello, I'm Khairu Kinarta";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect(){

if(index < text.length){

typingElement.innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,80);

}

}

window.onload = typeEffect;



function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}



const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.onclick = function(){

navMenu.classList.toggle("active");

};



/* SCROLL REVEAL */

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);



/* LOAD SKILLS FROM JSON */

fetch("skills.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("skills-container");

data.forEach(skill => {

const skillBox = document.createElement("div");

skillBox.classList.add("skill");

skillBox.innerHTML = `
<p>${skill.name}</p>
<div class="skill-bar">
<div class="skill-level" style="width:${skill.level}"></div>
</div>
`;

container.appendChild(skillBox);

});

});



/* LOAD PROJECT FROM JSON */

fetch("projects.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("project-container");

data.forEach(project => {

const card = document.createElement("div");
card.classList.add("project-card");

card.innerHTML = `
<img src="${project.image}">
<div class="project-info">
<h3>${project.title}</h3>
<p>${project.desc}</p>

<div class="project-buttons">
<a href="${project.github}">GitHub</a>
<a href="${project.demo}">Live Demo</a>
</div>

</div>
`;

container.appendChild(card);

});

});