let date = new Date(document.lastModified);
let time = date.toLocaleString("en-US");

document.getElementById("lastTime").textContent = time;

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}