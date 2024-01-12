let links = document.querySelectorAll("li");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventlistener("click", () => {
    links.forEach((item) => item.classList.remove("active"));

    link.classList.add("active");

    indicator.Style.tranform = `translateX(calc(
            ${index * 90}px
            ))`;
  });
});
