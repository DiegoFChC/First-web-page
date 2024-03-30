// Header
const header = document.getElementsByTagName("header");
const modalMenu = document.querySelector(".modalMenu");
const modalMenuContent = document.querySelector(".modalMenu .content");
const menuList = document.querySelectorAll(".modalMenu .content nav ul li");

header[0].onclick = function () {
  header[0].classList.toggle("open");
  modalMenu.classList.toggle("openModal");
  modalMenuContent.classList.add("openMenuModal");
};

function closeMenuModal() {
  header[0].classList.toggle("open");
  modalMenuContent.classList.remove("openMenuModal");
  modalMenuContent.classList.add("closeModal");
  setTimeout(() => {
    modalMenu.classList.toggle("openModal");
    modalMenuContent.classList.remove("closeModal");
  }, 300);
}
modalMenu.addEventListener("click", (e) => {
  if (e.target == modalMenu) {
    closeMenuModal();
  }
});

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenuModal();
  });
});
