import { age, declination } from "../utils/calcAge.js";
import modal from "../components/modal.js";

// возраст
document.querySelector(".age").textContent = age + " " + declination;

const portfolioImages = document.querySelectorAll(".portfolio__image");
portfolioImages.forEach((image) => {
  image.addEventListener("click", () => modal(image));
});

function toggleNavItem() {
  triggerTabList.forEach((item) => item.classList.remove("active"));
}

const triggerTabList = [].slice.call(document.querySelectorAll("#my-nav a")),
  animationTime = 500,
  framesCount = 20;

triggerTabList.forEach(function (triggerEl) {
  triggerEl.addEventListener("click", function (e) {
    toggleNavItem();
    e.preventDefault();
    e.target.classList.add("active");
    let coordY =
      document.querySelector(triggerEl.getAttribute("href")).getBoundingClientRect().top +
      window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
