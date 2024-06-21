document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const createAccountForm = document.getElementById('create-account-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const dashboard = document.getElementById('dashboard');
    const loginPage = document.getElementById('login-page');
    const createAccountPage = document.getElementById('create-account-page');
    const forgotPasswordPage = document.getElementById('forgot-password-page');
    const content = document.getElementById('content');

    const homeLink = document.getElementById('home-link');
    const materialsLink = document.getElementById('materials-link');
    const questionsLink = document.getElementById('questions-link');
    const profileLink = document.getElementById('profile-link');

    const createAccountLink = document.getElementById('create-account-link');
    const backToLoginFromCreateLink = document.getElementById('back-to-login-from-create');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const backToLoginFromForgotLink = document.getElementById('back-to-login-from-forgot');

    const materialsTemplate = document.getElementById('materials-template').content;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginPage.style.display = 'none';
        dashboard.style.display = 'block';
    });

    createAccountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createAccountPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    forgotPasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset link sent to your email');
        forgotPasswordPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    createAccountLink.addEventListener('click', () => {
        loginPage.style.display = 'none';
        createAccountPage.style.display = 'block';
    });

    backToLoginFromCreateLink.addEventListener('click', () => {
        createAccountPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    forgotPasswordLink.addEventListener('click', () => {
        loginPage.style.display = 'none';
        forgotPasswordPage.style.display = 'block';
    });

    backToLoginFromForgotLink.addEventListener('click', () => {
        forgotPasswordPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    homeLink.addEventListener('click', () => loadHomeContent());
    materialsLink.addEventListener('click', () => loadTemplate(materialsTemplate));
    questionsLink.addEventListener('click', () => loadQuestionsContent());
    profileLink.addEventListener('click', () => loadProfileContent());

    function loadHomeContent() {
        content.innerHTML = `
            <h2>Welcome to your Dashboard</h2>
            <p>Select a section from the menu to get started.</p>
        `;
    }

    function loadTemplate(template) {
        content.innerHTML = '';
        content.appendChild(document.importNode(template, true));
    }

    function loadQuestionsContent() {
        content.innerHTML = `
            <h2>Questions Section</h2>
            <p>Here you can post questions and get answers from other users.</p>
        `;
    }

    function loadProfileContent() {
        content.innerHTML = `
            <h2>Profile Section</h2>
            <p>Here you can view and manage your profile.</p>
        `;
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
