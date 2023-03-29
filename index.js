const optionModal = document.querySelector("#optionModal");
const optionSelect = document.querySelector("#optionSelect");
const modal = document.querySelector("#modal");
optionSelect.addEventListener("click", function () {
  optionModal.style.display = "block";
  modal.style.display = "block";
});

modal.addEventListener("click", function () {
  optionModal.style.display = "none";
  modal.style.display = "none";
});
