import {bannerTitle} from "../modules/constants.js";
import i18next from "i18next";

export function updateContent() {
    bannerTitle.innerHTML = i18next.t("home-title");
}