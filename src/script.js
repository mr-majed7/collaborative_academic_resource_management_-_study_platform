document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.querySelector('.dashboard');
    const loginPage = document.querySelector('.login-page');
    const content = document.getElementById('content');

    const homeLink = document.getElementById('home-link');
    const materialsLink = document.getElementById('materials-link');
    const questionsLink = document.getElementById('questions-link');
    const profileLink = document.getElementById('profile-link');

    const materialsTemplate = document.getElementById('materials-template').content;
    const viewMaterialsTemplate = document.getElementById('view-materials-template').content;
    const searchMaterialsTemplate = document.getElementById('search-materials-template').content;
    const questionsTemplate = document.getElementById('questions-template').content;
    const profileTemplate = document.getElementById('profile-template').content;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginPage.style.display = 'none';
        dashboard.style.display = 'block';
    });

    homeLink.addEventListener('click', () => loadTemplate(viewMaterialsTemplate));
    materialsLink.addEventListener('click', () => loadTemplate(materialsTemplate));
    questionsLink.addEventListener('click', () => loadTemplate(questionsTemplate));
    profileLink.addEventListener('click', () => loadTemplate(profileTemplate));

    function loadTemplate(template) {
        content.innerHTML = '';
        content.appendChild(document.importNode(template, true));
    }
});

function createFolder() {
    alert("Create New Folder function executed");
}

function addMaterial() {
    alert("Add Material function executed");
}

function takeNotes() {
    alert("Add Notes function executed");
}

function updateMaterials() {
    alert("Update/Delete Materials function executed");
}

function viewCourses() {
    alert("View Courses function executed");
}

function sortFilterMaterials() {
    alert("Sort/Filter Materials function executed");
}

function setPomodoro() {
    alert("Set Pomodoro Timer function executed");
}

function trackProgress() {
    alert("Track Progress function executed");
}

function searchMaterials() {
    alert("Search Materials function executed");
}

function filterMaterials() {
    alert("Filter Materials function executed");
}

function viewBookmarked() {
    alert("View Bookmarked Materials function executed");
}

function postQuestion() {
    alert("Post Question function executed");
}

function replyQuestion() {
    alert("Reply to Questions function executed");
}

function searchQuestions() {
    alert("Search Questions function executed");
}

function searchProfiles() {
    alert("Search Profiles function executed");
}

function viewProfile() {
    alert("View Profile function executed");
}

function followUser() {
    alert("Follow User function executed");
}

function acceptRequest() {
    alert("Accept Request function executed");
}
