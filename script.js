const links = document.querySelector(".profile__links");
const share = document.querySelector(".share");
const shareImg = document.querySelector(".share__img");

share.addEventListener("click", show);

links.style.display = "none";

function show() {
  if (links.style.display === "none") {
    links.style.display = "flex";
    share.style.backgroundColor = "hsl(217, 19%, 35%)";
  } else {
    links.style.display = "none";
    share.style.backgroundColor = "hsl(210, 46%, 95%)";
  }
}
