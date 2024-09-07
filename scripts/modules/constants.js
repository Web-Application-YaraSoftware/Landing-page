export const apiRandomUser = "https://randomuser.me/api/";

export const buttonMobile = document.querySelector('#display-button');
export const menuOptions = document.querySelector('.navbar__complete-list');
export const navbar = document.querySelector('.navbar');
export const header = document.querySelector('.header');
export const testimonialsContent = document.querySelector('div.testimonials__content');

let maxScrollLeft = testimonialsContent.scrollWidth - testimonialsContent.clientWidth;
let interval = null;

export let stepCarrousel = 1;
export let stopTestimonialsCarrousel = () =>{
    stepCarrousel = 0;
    isActiveCarrousel = false;
    clearInterval(interval);
};
export let startTestimonialsCarrousel = () =>{
    stepCarrousel =  1;
    isActiveCarrousel = true;
    interval = setInterval(()=>{
        testimonialsContent.scrollLeft = testimonialsContent.scrollLeft + stepCarrousel;
        if(testimonialsContent.scrollLeft === maxScrollLeft) stepCarrousel = stepCarrousel * -1;
        if(testimonialsContent.scrollLeft === 0) stepCarrousel = stepCarrousel * -1;
        /*console.log(stepCarrousel)*/
    }, 15);
};
export let isActiveCarrousel = false;
export let isOverTest = false;