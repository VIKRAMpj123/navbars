let btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((item) => item.classList.remove("active"));

    btn.classList.add("active");
  });
});
