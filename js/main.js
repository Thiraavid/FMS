const mst = document.getElementById("mst");
const fms = document.getElementById("fms");
const x = document.getElementById("demo");


mst.addEventListener("click", () => {
  fms.style.color = "red";
});

document.addEventListener("keypress", (e) => {
  if (e.key === "b") {
    fms.style.color = "blue";
  }
});

const showPosition = (position) => {
  x.innerHTML =
    "Latitude:" +
    position.coords.latitude +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longitude:" +
    position.coords.longitude;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};
getLocation();

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
ScrollReveal().reveal(".fm", {
  origin: "bottom",
  distance: "10px",
  interval: 200,
  opacity: "0",
  duration: 2500,

  ease: "ease",
});
