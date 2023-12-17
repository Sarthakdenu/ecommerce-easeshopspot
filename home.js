let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slider = document.querySelector('.slider');

function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';

 
  document.querySelectorAll('.price-tag').forEach(tag => tag.style.display = 'none');


  const currentSlide = document.querySelector('.slider .slide:nth-child(' + (currentIndex + 1) + ')');
  const currentPriceTag = currentSlide.querySelector('.price-tag');
  currentPriceTag.style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var mainContent = document.getElementById("main-content");
    
    if (menu.style.width === "250px") {
      menu.style.width = "0";
      mainContent.style.marginLeft = "0";
    } else {
      menu.style.width = "250px";
      mainContent.style.marginLeft = "250px";
    }
  }