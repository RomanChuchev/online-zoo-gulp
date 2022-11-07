/*Burger Menu*/
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
