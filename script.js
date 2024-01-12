const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const form = document.getElementById('form');
const thankYouPage = document.querySelector('.sign-up-after-page');
const errorText = document.querySelector('.error-text');

form.addEventListener('submit', (e) => {
      e.preventDefault()
})

submitBtn.addEventListener('click', () => {
      const inputValue = input.value;
      if (inputValue === null || inputValue === '' || !inputValue.match(/^[A-Za-z0-9\.\-_]+@[A-Za-z]+\.[a-z]{2,4}(\.([a-z]{2,4}))?$/)) {
            input.classList.add('error');
            errorText.innerText = 'Valid email required';
      } else {
            input.classList.remove('error');
            thankYouPage.classList.add('active');
            errorText.innerText = '';
      }
})

dismissBtn.addEventListener('click', () => {
      thankYouPage.classList.remove('active');
})
