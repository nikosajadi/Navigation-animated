const menuBars = document.getElementById('menu-bars'); 
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');  
const nav2 = document.getElementById('nav-2'); 
const nav3 = document.getElementById('nav-3'); 
const nav4 = document.getElementById('nav-4'); 
const nav5 = document.getElementById('nav-5'); 
const navItems=[nav1, nav2, nav3, nav4, nav5];

//controllers navAnimation Animate
//for Each method allows us to run a function on each item whithin the array
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}

function toggleNav() {
    //toggle: Menu Bars open/Closed menuBars
    menuBars.classList.toggle('change');
   //toggle: Menu Active 
   overlay.classList.toggle('overlay-active');
if (overlay.classList.contains('overlay-active')) {
// Animate In - overlay
   // overlay.classList.remove('overlay-slide-left');
   // overlay.classList.add('overlay-slide-right'); 
   //in order to limit line we can use Replace instead of Add or remove
   overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
   //Animate In - Nav Items
  navAnimation('out','in');
 } else {
   //Animate out - Overlay
   //  overlay.classList.remove('overlay-slide-right');
   //  overlay.classList.add('overlay-slide-left');
   //in order to limit line we can use Replace instead of Add or remove
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    //Animate out - Nav Items
navAnimation('in','out');
 }

}
//Event Listeners
menuBars.addEventListener('click',toggleNav);
// nav1.addEventListener('click',toggleNav);
// nav2.addEventListener('click',toggleNav);
// nav3.addEventListener('click',toggleNav);
// nav4.addEventListener('click',toggleNav);
// nav5.addEventListener('click',toggleNav);
navItems.forEach((nav)=>{
  nav.addEventListener('click',toggleNav);
});