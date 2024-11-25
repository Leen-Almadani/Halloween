/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    closebtn = document.getElementById('nav-close'),
    togglebtn = document.getElementById('nav-toggle');

togglebtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
})
    
closebtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
})
    


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const removeMenu = () => {
    navMenu.classList.remove('show-menu')

}
navLink.forEach((n)=>n.addEventListener('click',removeMenu))

/*=============== ATROPOS JS ===============*/
const myAtropos = Atropos({
    el: '.home__images',
    shadow: false,
    highlight:false,
   
  });

/*=============== ADD SHADOW HEADER ===============*/

const header = document.getElementById('header');
const scrollAction = () => {
    
    scrollY >= 50 ? header.classList.add('header-shadow')
        :header.classList.remove('header-shadow')
}
window.addEventListener('scroll',scrollAction)