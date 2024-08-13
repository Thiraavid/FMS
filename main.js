const mst = document.getElementById("mst");
const fms = document.getElementById("fms");

mst.addEventListener("click", () => {
  fms.style.color = "red";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "b") {
    fms.style.color = "blue";
  }
});

// AOS.init();
// gsap.from("nav", {  y: -100, duration: 1 });
// gsap.from("#fms", {  y: 10, duration: 1,delay:1 ,opacity:0});
// gsap.from(".para", {  y: 10, duration: 1,delay:2 ,opacity:0});
// gsap.from("#c-btn", {  y: 10, duration: 1,delay:3 ,opacity:0, scale:0});
// gsap.from(".c-right", {  x: 1000, duration: 1,delay:2 ,opacity:0, });