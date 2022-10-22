
class Gallery {
    constructor() {
        this.init();

    }

    init() {
        this.container = document.createElement(".projects-div");
        this.container.id = "gallery";
        document.body.appendChild(this.container);

        this.galleryImg = document.createElement("img.projects-images");
        this.container.appendChild(this.galleryImg);

        this.addListeners();
    }

    addListeners() {
        const images = document.querySelectorAll(".projects-images");
        images.forEach( img => {
            img.addEventListener("click",
            () => this.galleryImgClicked(img) );
        });

        this.container.addEventListener("click", () => {
            this.hideGallery();
        })

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") this.hideGallery();

        })
    }

    hideGallery = () => {
        this.container.classList.remove("active");
    }

    galleryImgClicked = (img) => {
        this.galleryImg.src = img.src;
        this.container.classList.add("active");
    }
}

const gallery = new Gallery();