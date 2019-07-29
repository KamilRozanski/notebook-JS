"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const message = document.querySelector(".form__message--js");
const save = document.querySelector(".button__save--js");
const load = document.querySelector(".button__load--js");


save.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('message', message.value);
  
})

load.addEventListener('click', (e) => {
  e.preventDefault();
  message.value = localStorage.getItem('message');
})
