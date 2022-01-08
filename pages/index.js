import { age, declination } from "../utils/calcAge.js";
// возраст
document.querySelector(".age").textContent = age + " " + declination;

var triggerTabList = [].slice.call(document.querySelectorAll("#my-nav a"));
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (e) {
    e.preventDefault();
    tabTrigger.show();
  });
});
