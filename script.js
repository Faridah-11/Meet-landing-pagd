'use strict'

let toggleBtn = document.querySelector('.btn');
let navlinks = document.querySelector('.navlinks');
let content = document.querySelectorAll('.content')
let navbar = document.querySelector('.navbar')
let doc = document;

toggleBtn.addEventListener('click', function(e){
     e.target.classList.toggle('changebtn');
     navlinks.classList.toggle('hidden');
     content.forEach(elem => 
        elem.classList.toggle('back'));
})