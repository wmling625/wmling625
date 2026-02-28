const emailInput = document.querySelector('.email');
const submitButton = document.querySelector('.button');

if (emailInput && submitButton) {
  emailInput.addEventListener('input', (e) => {
    const emailValue = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    submitButton.disabled = !isValidEmail;
  });
}
