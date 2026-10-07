// Modal controls
const modal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('btn-login');
const registerBtn = document.getElementById('btn-register');
const heroRegisterBtn = document.getElementById('hero-register');
const ctaRegisterBtn = document.getElementById('cta-register');
const closeBtn = document.querySelector('.close');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Open modal
function openModal() {
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
}

// Switch tabs
function switchToLogin() {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
}

function switchToRegister() {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
}

// Event listeners
loginBtn.addEventListener('click', () => {
    openModal();
    switchToLogin();
});

registerBtn.addEventListener('click', () => {
    openModal();
    switchToRegister();
});

heroRegisterBtn.addEventListener('click', () => {
    openModal();
    switchToRegister();
});

ctaRegisterBtn.addEventListener('click', () => {
    openModal();
    switchToRegister();
});

closeBtn.addEventListener('click', closeModal);

tabLogin.addEventListener('click', switchToLogin);
tabRegister.addEventListener('click', switchToRegister);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Switch tab via form link
document.querySelectorAll('.switch-tab').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (loginForm.classList.contains('active')) {
            switchToRegister();
        } else {
            switchToLogin();
        }
    });
});

// Form submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login attempted');
    alert('¡Funcionalidad de login se conectará con backend pronto!');
    closeModal();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Register attempted');
    alert('¡Funcionalidad de registro se conectará con backend pronto!');
    closeModal();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
