var swiper = new Swiper(".slider-characters", {
  slidesPerView: 3.5,
  spaceBetween: 19,
  freeMode: true,
});

// modal player
const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', () => {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open-modal');
});