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

document.querySelector(".menu__blur").addEventListener("click", function () {
    document.querySelector(".header__burger").classList.toggle("open");
    document.querySelector(".header__menu").classList.toggle("open");
});

// {
/* <figure class="slider__card card">
    <div class="card__description">
        Eagle is the common name for many large birds of prey of the family
        Accipitridae. Eagles belong to several groups of genera, some of which
        are closely related. Most of the 60 species of eagle are from Eurasia
        and Africa.
    </div>
    <picture class="card__picture">
        <source
            srcset="./images/pets/eagles-small.png"
            type="image/png"
            media="(max-width: 961px)"
        />
        <source
            srcset="./images/pets/eagles-mid.png"
            type="image/png"
            media="(max-width: 1001px)"
        />
        <img
            class="card__image"
            src="./images/pets/eagles-big.png"
            alt="animal"
        />
    </picture>
    <figcaption class="card__info">
        <div class="info">
            <h4 class="card__title">Eagles</h4>
            <p class="card__native">Native to South America</p>
        </div>
        <img src="./images/icons/meet-fish_icon.svg" alt="meet-fish_icon" />
    </figcaption>
</figure>; */
// }
const createFigureTemplate = (pet) => {
    const { description: desc, images, alt, title, native } = pet;

    const figure = document.createElement("figure");
    figure.classList.add("slider__card");
    figure.classList.add("card");

    const description = document.createElement("div");
    description.classList.add("card__description");
    description.innerText = desc;

    const picture = document.createElement("picture");
    picture.classList.add("card__picture");

    const img = document.createElement("img");
    img.classList.add("card__image");
    img.src = images;
    img.alt = alt;

    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("card__info");

    const info = document.createElement("div");
    info.classList.add("info");

    const h4 = document.createElement("h4");
    h4.classList.add("card__title");
    h4.innerText = title;

    const p = document.createElement("p");
    p.classList.add("card__native");
    p.innerText = native;

    info.appendChild(h4);
    info.appendChild(p);
    figcaption.appendChild(info);
    picture.appendChild(img);
    figure.appendChild(description);
    figure.appendChild(picture);
    figure.appendChild(figcaption);

    return figure;
};

const pets = [
    {
        title: "Eagles",
        native: "Native to South America",
        description:
            "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.",
        images: "./images/pets/eagles-big.png",
        alt: "eagles-big",
    },
    {},
];

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
};

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        const card = createFigureTemplate(pets[0]);
        // card.innerText = Math.floor(Math.random() * 8);
        changedItem.appendChild(card);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});
