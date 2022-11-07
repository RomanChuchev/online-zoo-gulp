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

const pets = [
    {
        title: "Giant Pandas",
        native: "Native to Southwest China",
        description:
            "The giant panda, also known as the panda bear (or simply the panda), is a bear species endemic to China. It is characterised by its bold black-and-white coat and rotund body.",
        images: "./images/pets/pandas.png",
        alt: "pandas",
        srcset: "./images/pets/pandas.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
    {
        title: "Two-toed Sloth",
        native: "Mesoamerica, South America",
        description:
            "Choloepus is a genus of xenarthran mammals of Central and South America within the monotypic family Choloepodidae, consisting of two-toed sloths, sometimes also called two-fingered sloths.",
        images: "./images/pets/two-toed-sloth-big.png",
        alt: "sloth",
        srcset: "./images/pets/two-toed-sloth.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
    {
        title: "Eagles",
        native: "Native to South America",
        description:
            "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.",
        images: "./images/pets/eagles-big.png",
        alt: "eagles",
        srcset: "./images/pets/eagles.webp",
        type: "image/webp",
        iconAlt: "meet-fish_icon",
        iconSrc: "./images/icons/meet-fish_icon.svg",
    },
    {
        title: "cheetahs",
        native: "Native to Africa",
        description:
            "The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h.Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.",
        images: "./images/pets/cheetahs-big.png",
        alt: "cheetahs",
        srcset: "./images/pets/cheetahs.webp",
        type: "image/webp",
        iconAlt: "meet-fish_icon",
        iconSrc: "./images/icons/meet-fish_icon.svg",
    },

    {
        title: "Gorillas",
        native: "Native to Congo",
        description:
            "Gorillas are herbivorous, predominantly ground-dwelling great apes that inhabit the tropical forests of equatorial Africa. The genus Gorilla is divided into two species: the eastern gorilla and the western gorilla, and either four or five subspecies.",
        images: "./images/pets/gorillas1.png",
        alt: "gorillas",
        srcset: "./images/pets/gorillas1.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
    {
        title: "Penguins",
        native: "Native to Antarctica",
        description:
            "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.",
        images: "./images/pets/penguins-big.png",
        alt: "penguins",
        srcset: "./images/pets/penguins.webp",
        type: "image/webp",
        iconAlt: "meet-fish_icon",
        iconSrc: "./images/icons/meet-fish_icon.svg",
    },
    {
        title: "Gorillas",
        native: "Native to Congo",
        description:
            "Gorillas are the largest living primates, reaching heights between 1.25 and 1.8 metres, weights between 100 and 270 kg, and arm spans up to 2.6 metres, depending on species and sex. They tend to live in troops, with the leader being called a silverback.",
        images: "./images/pets/gorillas2-big.png",
        alt: "gorillas",
        srcset: "./images/pets/gorillas2.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },

    {
        title: "Alligators",
        native: "Native to Southeastern U. S.",
        description:
            "An alligator is a large reptile in the Crocodilia order in the genus Alligator of the family Alligatoridae. Additionally, several extinct species of alligator are known from fossil remains. Alligators first appeared during the Oligocene epoch about 37 million years ago.",
        images: "./images/pets/alligators-big.png",
        alt: "alligators",
        srcset: "./images/pets/alligators.webp",
        type: "image/webp",
        iconAlt: "meet-fish_icon",
        iconSrc: "./images/icons/meet-fish_icon.svg",
    },
    {
        title: "Red pandas",
        native: "Native to Himalayas and China",
        description:
            "The red panda was first formally described in 1825. The two currently recognised subspecies, the Himalayan and the Chinese red panda, genetically diverged about 250,000 years ago. ",
        images: "./images/pets/red-panda.png",
        alt: "red-pandas",
        srcset: "./images/pets/red-panda.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
    {
        title: "Wolves",
        native: "Native to Eurasia and N.America",
        description:
            "Of all members of the genus Canis, the wolf is most specialized for cooperative game hunting as demonstrated by its physical adaptations to tackling large prey, its more social nature, and its highly advanced expressive behaviour including individual or group howling. ",
        images: "./images/pets/wolve.png",
        alt: "red-pandas",
        srcset: "./images/pets/wolve.webp",
        type: "image/webp",
        iconAlt: "meet-fish_icon",
        iconSrc: "./images/icons/meet-fish_icon.svg",
    },
    {
        title: "African elephants",
        native: "Native to Africa",
        description:
            "Elephants can live up to 70 years in the wild. They communicate by touch, sight, smell, and sound; elephants use infrasound and seismic communication over long distances. Elephant intelligence has been compared with that of primates and cetaceans. They appear to have self-awareness, and appear to show empathy for dying and dead family members. ",
        images: "./images/pets/elephant.png",
        alt: "red-pandas",
        srcset: "./images/pets/elephant.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
    {
        title: "Koalas",
        native: "Native to Australia",
        description:
            "Koalas typically inhabit open Eucalyptus woodland, as the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to twenty hours a day. They are asocial animals, and bonding exists only between mothers and dependent offspring.",
        images: "./images/pets/koala.png",
        alt: "red-pandas",
        srcset: "./images/pets/koala.webp",
        type: "image/webp",
        iconAlt: "banana-bamboo_icon",
        iconSrc: "./images/icons/banana-bamboo_icon.svg",
    },
];

const createFigureTemplate = (pet) => {
    const {
        description: desc,
        images,
        alt,
        title,
        native,
        srcset,
        type,
        iconSrc,
        iconAlt,
    } = pet;

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

    const source1 = document.createElement("source");
    source1.srcset = srcset;
    source1.type = type;

    const source2 = document.createElement("source");
    source2.srcset = srcset;
    source2.type = type;

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

    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = iconAlt;

    info.appendChild(h4);
    info.appendChild(p);
    figcaption.appendChild(info);
    figcaption.appendChild(icon);
    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(img);
    figure.appendChild(description);
    figure.appendChild(picture);
    figure.appendChild(figcaption);

    return figure;
};

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");

(function creatCards() {
    createRandomCards(ITEM_LEFT);
    createRandomCards(ITEM_RIGHT);

    for (let i = 0; i < 6; i++) {
        const card = createFigureTemplate(pets[i]);
        ITEM_ACTIVE.appendChild(card);
    }
})();

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
        ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";

    createRandomCards(changedItem);

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
});

function createRandomCards(changedItem) {
    const arrayNumbers = [];
    while (arrayNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 12);

        if (arrayNumbers.indexOf(randomNumber) === -1) {
            arrayNumbers.push(randomNumber);
            const card = createFigureTemplate(pets[randomNumber]);
            changedItem.appendChild(card);
        }
    }
}

window.addEventListener("load", () => {
    const screenWidth = getComputedStyle(document.querySelector("head")).width;
    doSmthIfEqual(screenWidth);
    clearSlider(screenWidth);
});

window.addEventListener("resize", () => {
    const screenWidth = getComputedStyle(document.querySelector("head")).width;
    doSmthIfEqual(screenWidth);
    clearSlider(screenWidth);
});

let timerId;
function doSmthIfEqual(size) {
    clearInterval(timerId);
    if (size <= "410px") {
        timerId = setInterval(() => {
            moveRight();
        }, 5000);
    }
}
const slider = document.querySelector(".testimonials__slider");

function clearSlider(size) {
    if (size <= "810px") {
        slider.style.left = 0;
    }
}

// testimonials
window.addEventListener("DOMContentLoaded", () => {
    const scrollbar = document.querySelector(".testimonials__scrollbar");
    const slider = document.querySelector(".testimonials__slider");

    function scroll(e) {
        const screenWidth = window.screen.width;
        if (screenWidth >= 1260) {
            const blockWidth = 25.65;
            switch (e.target.value) {
                case "0":
                    slider.style.left = 0;
                    break;
                case "1":
                    slider.style.left = -blockWidth + "%";
                    break;
                case "2":
                    slider.style.left = -blockWidth * 2 + "%";
                    break;
                case "3":
                    slider.style.left = -blockWidth * 3 + "%";
                    break;
                case "4":
                    slider.style.left = -blockWidth * 4 + "%";
                    break;
                case "5":
                    slider.style.left = -blockWidth * 5 + "%";
                    break;
                case "6":
                    slider.style.left = -blockWidth * 6 + "%";
                    break;
                case "7":
                    slider.style.left = -blockWidth * 7 + "%";
                    break;
            }
        }
        if (screenWidth > 810 && screenWidth < 1260) {
            const blockWidthSmall = 34.41;
            switch (e.target.value) {
                case "0":
                    slider.style.left = 0;
                    break;
                case "1":
                    slider.style.left = -blockWidthSmall + "%";
                    break;
                case "2":
                    slider.style.left = -blockWidthSmall * 2 + "%";
                    break;
                case "3":
                    slider.style.left = -blockWidthSmall * 3 + "%";
                    break;
                case "4":
                    slider.style.left = -blockWidthSmall * 4 + "%";
                    break;
                case "5":
                    slider.style.left = -blockWidthSmall * 5 + "%";
                    break;
                case "6":
                    slider.style.left = -blockWidthSmall * 6 + "%";
                    break;
                case "7":
                    slider.style.left = -blockWidthSmall * 7 + "%";
                    break;
            }
        }
    }
    scrollbar.addEventListener("input", scroll);
});
