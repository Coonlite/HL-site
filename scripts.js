// Прелоадер
let mask= document.querySelector(".mask");
window.addEventListener('load',()=>{
  mask.classList.add('hide');
  setTimeout(()=>{
    mask.remove();
  },600)
})

document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const agree = document.getElementById('agree').checked;
  
  let isValid = true;
  
  if (name === '') {
    showError('name-error', 'Name is required.');
    isValid = false;
  }
  
  if (email === '') {
    showError('email-error', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email-error', 'Please enter a valid email address.');
    isValid = false;
  }
  
  if (!agree) {
    showError('agree-error', 'You must agree to the terms and conditions.');
    isValid = false;
  }

  if (isValid) {



    this.submit();
  }

});


function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(function (element) {
    element.textContent = '';
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const header = document.querySelector('header');
const blockAbout = document.querySelector('.block-about');

function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (window.scrollY >= blockAbout.offsetTop - header.offsetHeight) {
    header.classList.add('full-width');
  } else {
    header.classList.remove('full-width');
  }
}

window.addEventListener('scroll', handleScroll);

const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');
const footerNav = document.querySelector('.footer-nav');
const footerNavLinks = document.querySelectorAll('.footer-nav li a');

burger.addEventListener('click', () => {
  footerNavLinks.forEach(link => {
    link.classList.toggle('active');
  });
  nav.classList.toggle('active');
  footerNav.classList.toggle('active');
  burger.classList.toggle('active');
  nav.appendChild(footerNav);
});