const bodyEl = document.querySelector("body");
const sliderContainer = document.querySelector(".slider-container");
const imageContainer = document.querySelector(".image-container");
const imgEl = document.querySelectorAll("img");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const bgImages = [
  "https://picsum.photos/id/66/500/300",
  "https://picsum.photos/id/16/500/300",
  "https://picsum.photos/id/18/500/300",
  "https://picsum.photos/id/11/500/300",
];

let currentImg = 1;
let timeout;

nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgEl.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  bodyEl.style.backgroundImage = `url('${bgImages[currentImg - 1]}')`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 5000);
}
