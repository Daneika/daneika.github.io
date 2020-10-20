const overlay = document.getElementById("overlay");

document.getElementById("open-navbar-icon").addEventListener("click", () => { 
  console.log("clicked")
  overlay.classList.add("change");
});


document.querySelector(".close-navbar-icon").addEventListener("click", () => { overlay.classList.remove("change");
});

for (element of document.getElementsByClassName("nav-link")) {
element.addEventListener("click", () => overlay.classList.remove("change"));
}
const colors = ["#9fc5e8", "#6fa8dc", "#3d85c6", "#0b5394"];

let i = 0;
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color:${colors[i++]}`;
});
