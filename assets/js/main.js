const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});
function changeReadMore1() {
    const mycontent = document.getElementById('mybox1id');
    const mybutton = document.querySelector('.readmore_btn_1');

    if (!mycontent.classList.contains('active')) {
        mycontent.classList.add('active');
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.classList.remove('active');
        mybutton.textContent = 'Read More';
    }
}

function changeReadMore2() {
    const mycontent = document.getElementById('mybox2id');
    const mybutton = document.querySelector('.readmore_btn_2');

    if (!mycontent.classList.contains('active')) {
        mycontent.classList.add('active');
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.classList.remove('active');
        mybutton.textContent = 'Read More';
    }
}

function changeReadMore3() {
    const mycontent = document.getElementById('mybox3id');
    const mybutton = document.querySelector('.readmore_btn_3');

    if (!mycontent.classList.contains('active')) {
        mycontent.classList.add('active');
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.classList.remove('active');
        mybutton.textContent = 'Read More';
    }
}


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.edu__box',{ interval: 200});  
sr.reveal('.work__box',{ interval: 200}); 
sr.reveal('.project__box',{ interval: 200});
