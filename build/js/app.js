let header = document.querySelector('header');
let button = document.querySelector('.burger');
let mobileNav = document.getElementById('hidden-nav');
let buttonState = 0;

let dropdown = () =>{
    if(buttonState == 0){
        buttonState = 1;
        mobileNav.style.display = 'flex';
        mobileNav.style.transformOrigin = 'top center';
        mobileNav.style.animation = 'dropdownAnimation 0.2s linear forwards';
    }
};

let dropdownRev = () => {
    if(buttonState == 1){
        buttonState = 0;
        mobileNav.style.display = 'none';
    }
};

button.addEventListener('pointerenter',dropdown);
header.addEventListener('pointerleave',dropdownRev);

