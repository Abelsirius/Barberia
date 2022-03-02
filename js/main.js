let contentCard = document.querySelector('.content_card_servicios');

let contentCardFake = document.querySelectorAll('.card_service');  




const verifyVisibility = (entries) =>{
     
    
    if(entries[0].isIntersecting !== false){
         
        entries[0].target.classList.add('active')
    }else{
        entries[0].target.classList.remove('active')

    }

}


const observer =  new IntersectionObserver(verifyVisibility)


observer.observe(contentCard)




  
var swiper = new Swiper('.swiper', {

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop : true,
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 100,
    modifier: 1,
  
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


/* -------------------- ActivarHeader -------------- */ 


let header = document.querySelector('header');


const activeHeader = () =>{
    
   let pageY  = window.scrollY;

   if(pageY > 0){
     header.classList.add('active')
   }
   else{
    header.classList.remove('active')
   }

}

window.addEventListener('scroll',activeHeader)



/* ----- Nav ----- */ 


let btnMenu = document.querySelector('.nav_menu_icon');
let iconMenu = document.querySelector('.ri-menu-line')


const toggleMenu = () =>{
   
  let navMenu = document.querySelector('.nav_menu');

   navMenu.classList.toggle('active');
   
   if(navMenu.classList.contains('active')){
    iconMenu.className ="ri-close-line";
   }else{
    iconMenu.className ="ri-menu-line";

   }
}

btnMenu.addEventListener('click',toggleMenu)



/* ------ Close Nav ----------- */



let arrLinks = document.querySelectorAll('.nav_menu li');
let arrLinksa = document.querySelectorAll('.nav_menu li a');



const closeNav = (e) =>{
 
   let nav_menu = document.querySelector('.nav_menu');
   nav_menu.classList.remove('active');
 

   let iconMenu = document.querySelector('.ri-close-line');
   iconMenu.className = 'ri-menu-line';

   arrLinksa.forEach(link => link.classList.contains('active') ? link.classList.remove('active') : console.log('as'))

   e.target.classList.add('active')
}  


arrLinks.forEach(link => link.addEventListener('click',(e)=>closeNav(e)))

