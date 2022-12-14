/* PopUp Testimonails*/
const homePage = document.querySelector(".home");
if (homePage !== null) {
    const cards = document.querySelectorAll(".testimonials__card");
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
    const popup = document.querySelector("#popup");
    const popupCard = document.querySelector("#popup-card");

    let unlock = true;

    const timeout = 500;

    if (cards.length > 0) {
        for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            card.addEventListener("click", function (e) {
                if (window.innerWidth <= 810) {
                    popupCard.innerHTML = "";
                    popupCard.append(e.target.cloneNode(true));
                    popupOpen(popup);
                    e.preventDefault();
                }
            });
        }
    }
    const popupCloseIcon = document.querySelectorAll(".close-popup");
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener("click", function (e) {
                popupClose(el.closest(".popup"));
                e.preventDefault();
            });
        }
    }

    function popupOpen(popup) {
        if (popup && unlock) {
            console.log(popup);
            const popupActive = document.querySelector(".popup.open");
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            popup.classList.add("open");
            popup.addEventListener("click", function (e) {
                if (!e.target.closest(".popup__content")) {
                    popupClose(e.target.closest(".popup"));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove("open");
            console.log(popupActive);
            console.log(popupCard, "popupCard");
            popupCard.innerHTML = "";
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue =
            window.innerWidth -
            document.querySelector("body").offsetWidth +
            "px";

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = "0px";
                }
            }
            body.style.paddingRight = "0px";
            body.classList.remove("lock");
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener("keydown", function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector(".popup.open");
            popupClose(popupActive);
        }
    });

    (function () {
        // ?????????????????? ??????????????????
        if (!Element.prototype.closest) {
            // ??????????????????
            Element.prototype.closest = function (css) {
                var node = this;
                while (node) {
                    if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    })();
    (function () {
        // ?????????????????? ??????????????????
        if (!Element.prototype.matches) {
            // ???????????????????? ????????????????
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector;
        }
    })();
}
