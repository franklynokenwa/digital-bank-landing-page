const digitalBankingBackgroundImage = document.getElementById('digital-banking-background-image');
const mobileBackground = document.getElementsByClassName("mobile-background");
const a = document.getElementById('mobile-background');
const fil = document.getElementsByClassName("fil");
const myNav = document.getElementById("burger");

const hamburger = document.getElementById('hamburger');

const close = document.getElementById('close');
const b = document.getElementsByClassName("digital-banking-background-image");

const mobileNav = document.getElementById('mobile-nav');

burger.style = "display:none";

    mobileBackground[0].style = "display:block";
    // hamburger.style = "z-index:1";
       
    function closeNav() {
        hamburger.style ="visibility:visible";
        close.style ="visibility:hidden";
        mobileNav.style = "visibility:hidden";
               
    }
    function open() {
        hamburger.style ="visibility:hidden";
        close.style ="visibility:visible";
        mobileNav.style = "visibility:visible";              
        
    }

    hamburger.addEventListener("click", open);
    close.addEventListener("click", closeNav);

   /* for (let i = 0; i < fil.length; i++) {
        fil[i].addEventListener("mouseover", good);
    function good() {   
    fil[i].classList.toggle("filter-color"); 
}
    }*/