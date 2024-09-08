import {showOptions} from "../utils/showOptions.js";
import {buttonMobile, languageSelect} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";
import {generateTestimonials} from "../utils/generateTestimonials.js";
import {updateLanguage} from "../utils/updateLanguage.js";

export const onButtonMobileClick = () =>{
    buttonMobile.addEventListener('click', showOptions);
}

export const onWindowResize = () =>{
    window.addEventListener('resize', restoreOptions);
}

export const onWindowLoad = () =>{
    window.addEventListener('load', generateTestimonials);
}

export const onLanguageSelectChange = () => {
    languageSelect.addEventListener('change', updateLanguage);
}