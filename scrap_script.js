const registerLink = document.getElementById('register-link');
const formContainer = document.getElementById('form-container');

registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  formContainer.style.display = 'flex';
});