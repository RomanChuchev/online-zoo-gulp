/*Testimonials Scroll*/
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
