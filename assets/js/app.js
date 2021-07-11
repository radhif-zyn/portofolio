//Animate On Scroll JS Initialize
AOS.init();


//NAVBAR
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('showed');
            nav.classList.toggle('showed');
        })
    }
}

showMenu('menu-toggle', 'nav-menu');

//NAVBAR ACTIVE LINKS
const navLink = document.querySelectorAll('.nav-links');
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE NAVBAR STYLE ON SCROLL
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('nav-scrolled', window.scrollY > 0);
});


// Email.Js
// EMAIL.JS USER ID AND TOKEN
/*
    User ID user_zTbVrwONTldKlNZvy9MWg
    Access Token 481e6b8ea443fc0ea80b1e6217b7957d
*/

const form = document.getElementById('contact-form')

form.addEventListener('submit', function(event) {

    event.preventDefault();
    
    emailjs.sendForm('contact_service', 'contact_form', this)
    .then(function() {
        console.log('SUCCESS!');
        swal({
            title: "Email has been sent!",
            text: "Your message has been sent successfully!",
            icon: "success",
            button: "OK!",
        });
        form.reset()
    }, function(error) {
        console.log('FAILED...', error);
        swal({
            title: "Email failed to send!",
            text: "Your message failed to send, please try again :(",
            icon: "error",
            button: "OK!",
        });
        form.reset()
    });
});

