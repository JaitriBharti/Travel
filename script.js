const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the wrapper
    wrapper.classList.remove('active-popup');
});

// Close the wrapper if the user clicks outside the form
document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target) && !event.target.classList.contains('btnLogin-popup')) {
        wrapper.classList.remove('active-popup');
    }
});

