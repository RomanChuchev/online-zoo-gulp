import * as flsFunctions from "./modules";
import "./modules/dynamic_adapt.js";
/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp();

document
    .querySelector(".burger-wrapper")
    .addEventListener("click", function () {
        document.querySelector(".header__burger").classList.toggle("open");
        document.querySelector(".header__menu").classList.toggle("open");
    });
