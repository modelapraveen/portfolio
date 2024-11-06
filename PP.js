//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Secroll sction
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Loop through each section to check if it's in view
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links and add to the current link
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
            // active sections for animations on scroll 
            sec.classList.add('show-animate')
        }
        // if want to use animation that repates on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header functionality
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
