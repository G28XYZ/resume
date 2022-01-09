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

triggerTabList.forEach(function (triggerEl) {
  triggerEl.addEventListener("click", function (e) {
    toggleNavItem();
    e.preventDefault();
    e.target.classList.add("active");
    window.scrollBy({
      behavior: "smooth",
    });
  });
});
