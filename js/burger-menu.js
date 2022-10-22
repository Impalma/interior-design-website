//burger menu
const navSlide = () => {
        const burger = document.querySelector(".burger");
        const menu = document.querySelector(".menu-list");
        

        burger.addEventListener("click", () => {
            menu.classList.toggle("menu-list-active");
        });
}

navSlide();
