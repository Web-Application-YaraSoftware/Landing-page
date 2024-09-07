import {showOptions} from "../utils/showOptions.js";
import {buttonMobile} from "./constants.js";

export const toggleMenu = () =>{
    buttonMobile.addEventListener('click', showOptions);
}