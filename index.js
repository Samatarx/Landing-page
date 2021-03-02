const drop = document.getElementById('dropdown');
const navLinks = document.querySelector('.nav-links')

drop.addEventListener('click', ()=>{
    navLinks.classList.toggle('drop')
})