const form = document.querySelector('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const age = document.getElementById('age');
const presentation = document.querySelector('textarea');
const countDown = document.querySelector('span');
const postalCode = document.getElementById('postalCode');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault(evt);
  stringChecks(evt);
  numberChecks(evt);
  postalCodeChecks(evt);
  emailChecks(evt);
  mdpChecks(evt);
}

const regExString = new RegExp('^[a-zA-Z]+$');
function stringChecks(evt) {
  if (!firstName.value.match(regExString) || !lastName.value.match(regExString)) {
    alert("Merci d'utiliser l'aphabet");
  }
}

const regExNumber = /\D/;
function numberChecks(evt) {
  if (regExNumber.test(age.value) || regExNumber.test(postalCode.value)) {
    alert('Merci de renseigner un nombre');
  }
  if (age.value > 115) {
    alert("Merci d'indiquer un age crédible");
  }
}

presentation.addEventListener('input', (e) => {
  const maxLength_textArea = presentation.getAttribute('maxlength');
  const currentLength = presentation.value.length;
  const charsLeft = maxLength_textArea - currentLength;
  if (currentLength >= maxLength_textArea) {
    return console.log('You have reached the maximum number of characters');
  }
  countDown.textContent = charsLeft + ' chars left.';
  console.log(charsLeft + ' caractères restants');
});

function postalCodeChecks(evt) {
  const maxLength_postalCode = 5;
  const minLength_postalCode = 5;
  const currlength = postalCode.value.length;
  if (currlength > maxLength_postalCode || currlength < minLength_postalCode) {
    alert('Please enter 5 numbers');
  }
}

const regExEmail = /\b[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

function emailChecks(evt) {
  if (!regExEmail.test(email.value)) {
    alert('email invalide');
  }
}

const regExMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function mdpChecks(evt) {
  if (!regExMdp.test(password.value)) {
    alert('caractère non autorisé');
  }

  if (password.value != passwordConfirmation.value) {
    alert('merci de renseigner le même mdp');
  }
}
