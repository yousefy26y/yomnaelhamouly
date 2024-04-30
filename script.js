function darkmode3(){
const darkModeToggle = document.getElementById('darkmode');
const body = document.body;
const footer = document.querySelector('footer');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    nav .classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
});}
 


function darkmode() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('dark-mode');
}
function darkmode2() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });}
function darkmode4() {
const footerLinks = document.querySelectorAll('.footer a');

    footerLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });
}





function darkmode5() {
    // Select the dropdown menu and its links
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownLinks = dropdownMenu.querySelectorAll('.dropdown-content a');

    // Change background color of the dropdown menu
    dropdownMenu.style.backgroundColor = '#222';

    // Change background color of each link and set up hover effects
    dropdownLinks.forEach(link => {
        link.style.backgroundColor = '#333'; // Change background color of link
        link.style.color = '#fff'; // Change text color of link

        // Add hover effect
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#444'; // Change background color on hover
        });

        // Reset background color on mouse leave
        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '#333';
        });
    });
}



