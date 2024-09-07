import '../sass/style.scss'
import {onButtonMobileClick, onWindowResize} from "./modules/eventHandlers.js";
import {getTestimonialsData} from "./utils/getTestimonialsData.js";
import {getCommentersData} from "./utils/getCommentersData.js";
import {generateTestimonials} from "./utils/generateTestimonials.js";

onButtonMobileClick();

onWindowResize();

const list = await generateTestimonials();
console.log(list[0])