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

ScrollReveal().reveal("nav", {
  origin: "top",
  distance: "100px",
  duration: 2000,

  ease: "easeOut",
});
ScrollReveal().reveal("#fms", {
  origin: "bottom",
  distance: "10px",
  opacity: "0",
  duration: 2000,
  delay: "500",
  ease: "ease",
});
ScrollReveal().reveal("p", {
  origin: "bottom",
  distance: "10px",
  opacity: "0",
  duration: 2000,
  delay: "1000",
  ease: "ease",
});
ScrollReveal().reveal("h2", {
  origin: "bottom",
  distance: "10px",
  opacity: "0",
  duration: 2000,
 
  ease: "ease",
});
ScrollReveal().reveal("#c-r", {
  origin: "right",
  distance: "100px",
  opacity: "0",
  duration: 1000,
  delay: "1000",
  ease: "ease",
});
ScrollReveal().reveal("#f-img", {
  origin: "left",
  distance: "100px",
  opacity: "0",
  duration: 1000,

  ease: "ease",
});
ScrollReveal().reveal("button", {
  origin: "bottom",
  distance: "10px",
  scale: 0,
  opacity: "0",
  duration: 2500,
  delay: "1000",
  ease: "ease",
});
ScrollReveal().reveal("#fm", {
  origin: "bottom",
  distance: "10px",
interval:200,
  opacity: "0",
  duration: 2500,

  ease: "ease",
});
