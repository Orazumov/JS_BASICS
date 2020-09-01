'use strics';

document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement('afterbegin', loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

window.addEventListener ('load', function() {
    loadIcon.style.display = 'none';
    images.init();

    leftArrow.addEventListener('click', function () {
        images.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        images.setNextRightImage();
    });

});

function setSizes(slider) {
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width !== null && width !== "") {
        slider.style.width = width;
    }
    if (height !== null && height !== "") {
        slider.style.height = height;
    }
}
setSizes(slider);


let images = {
    currentIndex: 0,
    slides: [],

    init () {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrenIndex();
    },

    showImageWithCurrenIndex() {
        this.slides[this.currentIndex].classList.remove('hidden-item');
  
      },
      

      setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIndex == 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex--;
        }
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.classList.add('slider-LeftToRightAnimation');
        currentSlide.classList.remove('hidden-item');
        setTimeout(() => {
            currentSlide.classList.remove('slider-LeftToRightAnimation')}, 500);

    },

    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIndex == this.slides.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex++;
        }
        const currentSlide = this.slides[this.currentIndex];
        currentSlide.classList.add('slider-RightToLeftAnimation');
        currentSlide.classList.remove('hidden-item');
        setTimeout(() => {
            currentSlide.classList.remove('slider-RightToLeftAnimation')}, 500);

    },
    
    hideVisibleImage() {
        document.querySelector('.slider-item:not(.hidden-item)')
        .classList.add('hidden-item');
    },

};

