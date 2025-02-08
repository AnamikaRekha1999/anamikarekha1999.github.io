function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let sayac = 5;

function myStyle() {
  let cssStyle = document.getElementById("cssStyle");

  console.log(sayac);
  if (sayac == 0) {
    sayac = 1;
    cssStyle.href = "style2.css";
  } else if (sayac == 1) {
    sayac = 2;
    cssStyle.href = "style3.css";
  } else if (sayac == 2) {
    sayac = 3;
    cssStyle.href = "style4.css";
  } else if (sayac == 3) {
    sayac = 4;
    cssStyle.href = "style5.css";
  } else if (sayac == 4) {
    sayac = 5;
    cssStyle.href = "style6.css";
  } else {
    sayac = 0;
    cssStyle.href = "style.css";
  }
}

let skillsHtml = document.getElementsByClassName("skillsHtml")[0];

let worksHtml = document.getElementsByClassName("worksHtml")[0];
let educationHtml = document.getElementsByClassName("educationHtml")[0];
let interestsHtml = document.getElementsByClassName("interestsHtml")[0];
let ProjectExperienceHtml = document.getElementsByClassName("ProjectExperienceHtml")[0];

// Using data.js directly instead of fetching resume.json
const data = window.data;

let user = data.basics;

document.getElementById("myImg").src = user.image;
document.getElementById("name").innerHTML = user.name;
document.getElementById("home").innerHTML = user.name;
document.getElementById("label").innerHTML = user.label;
document.getElementById("location").innerHTML =
  user.location.city + ", " + user.location.countryCode;
document.getElementById("email").innerHTML = user.email;
document.getElementById("email").href = "mailto:" + user.email;

document.getElementById("githubHtml").href = user.profiles.github.url;
document.getElementById("linkedinHtml").href = user.profiles.linkedin.url;

document.getElementById("linkedinHtml").innerHTML =
  "in/" + user.profiles.linkedin.username;
document.getElementById("githubHtml").innerHTML =
  "" + user.profiles.github.username;

document.getElementById("summary").innerHTML = user.summary;

let skills = data.skills;
for (let i in skills) {
  let list = skills[i];
  skillsHtml.innerHTML += `<hr>`;
  skillsHtml.innerHTML += `<h4>${list.situation}</h4>`;

  for (let j in list.keywords) {
    skillsHtml.innerHTML += `<span class="skills" style="display: inline-block;">${list.keywords[j]}</span>`;
  }
}

// ProjectExperienceHtml
let repository = data.ProjectExperience;

for (let i in repository) {
  ProjectExperienceHtml.innerHTML += `<hr>`;
  ProjectExperienceHtml.innerHTML += `<h3 style="display:inline-block;">${repository[i].name}</h3>`;
  ProjectExperienceHtml.innerHTML += `<p style=" font-size: 0.7em; font-style: italic;">${repository[i].bestLang}</p>`;
  ProjectExperienceHtml.innerHTML += `<p>${repository[i].explanation}</p>`;
  for (let j in repository[i].tag) {
    ProjectExperienceHtml.innerHTML += `<span style="display:inline-block;">${repository[i].tag[j]}</span>`;
  }
}

let works = data.work;
for (let i in works) {
  let list = works[i];

  worksHtml.innerHTML += `<hr>`;
  worksHtml.innerHTML += `<h4>${list.position} - ${list.name}</h4>`;
  worksHtml.innerHTML += `<span class="worksSpan">${list.startDate} - ${list.endDate} - ${list.location}</span>`;
  worksHtml.innerHTML += `<p>${list.summary}</p>`;

  if (list.highlights && list.highlights.length > 0) {
    worksHtml.innerHTML += `<ul>`;
    for (let j in list.highlights) {
      worksHtml.innerHTML += `<li>${list.highlights[j]}</li>`;
    }
    worksHtml.innerHTML += `</ul>`;
  } else {
    worksHtml.innerHTML += `<p>No highlights available</p>`;
  }
}

// Education section
let education = data.education;
for (let i in education) {
  let list = education[i];
  educationHtml.innerHTML += `<h3>${list.institution}</h3>`;
  educationHtml.innerHTML += `<h4>${list.area} (${list.studyType})</h4>`;

  let endDate = list.endDate ? list.endDate : 'Present';
  educationHtml.innerHTML += `<p class="worksSpan">(${list.startDate} - ${endDate})</p>`;
  educationHtml.innerHTML += `<p>GPA: ${list.gpa}</p>`;
}

// Interests section
let interests = data.interests;
for (let i in interests) {
  interestsHtml.innerHTML += `<span style="display:inline-block;" class="interestsSpan">${interests[i]}</span>`;
}

// Relevant Coursework
let RelevantCourseworkHtml = document.getElementsByClassName("RelevantCourseworkHtml")[0];
let RelevantCoursework = data.Relevant_Coursework;
for (let i in RelevantCoursework) {
  RelevantCourseworkHtml.innerHTML += `<span style="display:inline-block;" class="RelevantCourseworkSpan">${RelevantCoursework[i]}</span>`;
}
