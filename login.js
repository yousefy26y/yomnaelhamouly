function splitimage(){
const welcometext  =document.getElementById("welcomemessage");
	 welcometext.style.display="block";}
function popup(){
const welcometext  =document.getElementById("popup");
	 welcometext.style.display="block";}
function popup2(){
const welcometext  =document.getElementById("popup2");
	 welcometext.style.display="block";}


function myMove() {
  let id = null;
  const elem = document.getElementById("welcome");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.3);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      
    }
  }
}
function myMovex() {
  let id = null;
  const elem = document.getElementById("welcome2");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos +"px"; 
      
    }
  }
}






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



