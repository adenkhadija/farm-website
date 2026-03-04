let hamburger = document.getElementById('hamburger'); 
let nav = document.querySelector('.header-nav'); // selecting class


hamburger.addEventListener('click', () => {
    // adding a class 
    let headerNav = document.getElementsByClassName('header-nav')[0]; // Array 

    headerNav.classList.replace("header-nav", 'visableHeader'); 



})



