import * as flsFunctions from "./modules";
import "./modules/dynamic_adapt.js";
/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

flsFunctions.isWebp();

document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
        this.classList.toggle("open");
        document.querySelector(".header__menu").classList.toggle("open");
    });
