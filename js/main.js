

let contentCard = document.querySelector('.content_cards_slider_wrap');

let contentCardFake = document.querySelectorAll('.content_cards_cortes');  




const verifyVisibility = (entries) =>{
     
    
    if(entries[0].isIntersecting !== false){
         
        entries[0].target.setAttribute('id','cutes_active')
    }else{
        entries[0].target.removeAttribute('id')

    }

}


const observer =  new IntersectionObserver(verifyVisibility)


observer.observe(contentCard)



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




const fitCarrusel = () =>{

  let body = document.querySelector('body').offsetWidth;
  
  if(body < 400){
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 15,
      loop: 'true',
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  else{
    var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: 'true',
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
   
  
}

window.addEventListener('load',fitCarrusel)
