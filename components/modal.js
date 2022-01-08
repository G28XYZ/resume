const exampleModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
const modalContent = document.querySelector(".modal-content");
const modalTitle = modalContent.querySelector(".modal-title");
const modalImage = modalContent.querySelector(".modal-image");
const modalText = modalContent.querySelector(".modal-text");

const closeModal = modalContent.querySelector(".close_modal");
closeModal.addEventListener("click", () => {
  exampleModal.hide();
});
function modal(item) {
  modalImage.src = item.src;
  modalText.src = item.attributes.descr.value;
  modalTitle.textContent = item.alt;
  exampleModal.show();
}

export default modal;
