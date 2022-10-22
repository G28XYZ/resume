import { age, declination } from "../utils/calcAge.js";
import modal from "../components/modal.js";
// возраст
document.querySelector(".age").textContent = age + " " + declination;

// опыт
document.querySelector("#experience").textContent = "менее года";

const portfolioImages = document.querySelectorAll(".portfolio__image");
portfolioImages.forEach((image) => {
  image.addEventListener("click", () => modal(image));
});

function toggleNavItem() {
  triggerTabList.forEach((item) => item.classList.remove("active"));
}

const triggerTabList = [].slice.call(document.querySelectorAll("#my-nav a"));

triggerTabList.forEach(function (triggerEl) {
  triggerEl.addEventListener("click", function (e) {
    toggleNavItem();
    e.target.classList.add("active");
    window.scrollBy({
      behavior: "smooth",
    });
  });
});
