const formOfLogin = document.querySelector('.login-form');
formOfLogin.addEventListener('submit', submitClick);
const profile = {};

function submitClick(event) {
event.preventDefault();

const email = event.currentTarget.elements.email;
 const password = event.currentTarget.elements.password;

if (email.value === '' || password.value === '') {
     alert('Заповніть всі поля!');
 } else {
   profile.email = email.value;
   profile.password = password.value;

   console.log(profile);
  }
  event.currentTarget.reset();
 }