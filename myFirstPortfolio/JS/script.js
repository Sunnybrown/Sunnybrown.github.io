// alert('You have opened my portfolio')

// About Tabs
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Nav Menu for Small Screen
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Home Animation
window.onload = function() {
    const homeText = document.querySelector('.home-text');
    const homeIMG = document.querySelector('.home-img');
    const canDo = document.querySelector('.can-do');

    homeText.classList.add('show');
    homeIMG.classList.add('show');
    canDo.classList.add('show');
    document.querySelector('#home').style.opacity = 2;
    
}



// About Animation
document.addEventListener('scroll', function() {
    var about = document.getElementById('about');
    var aboutCol1 = document.querySelector('.about-col-1');
    var aboutCol2 = document.querySelector('.about-col-2');
    var aboutOffset = about.offsetTop;
    var aboutHeight = about.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;

    if (scrollTop > aboutOffset - windowHeight + aboutHeight / 2) {
        aboutCol2.classList.add('slide-right');
        aboutCol1.classList.add('slide-left');
    }
});

// Functional form
// function sendMail(){
//     var parans = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_qnflpja";
//     const templateID = "template_dbb0bl8";

//     emailjs
//         .send(serviceID, templateID, parans)
//         .then((res) => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);

//             alert("Your message has been sent successfully");
//         })
//         .catch((err) => console.log(err));
// }
