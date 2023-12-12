const images = [
  {
    src: "/slade.jpeg",
    alt: "Slade Image",
    description: "This is an image of Slade.",
    link: "https://www.youtube.com/embed/WM7M7zSMJcw?si=uHN37IIxeMn5nLdP?autoplay=1",
    id: 1,
  },
  {
    src: "/wizard.jpeg",
    alt: "Wizard Image",
    description: "This is an image of a wizard.",
    link: "https://www.youtube.com/embed/IJPc7esgvsA?si=rsxUJ4sNuoyQ0v-k?autoplay=1",
    id: 2,
  },
  {
    src: "Paul-McCartney.jpeg",
    alt: "Paul McCartney Image",
    description: "This is an image of Paul McCartney.",
    link: "https://www.youtube.com/embed/94Ye-3C1FC8?si=e1CWapd62taH5w5V?autoplay=1",
    id: 3,
  },
  {
    src: "Brenda-Lee.jpeg",
    alt: "Brenda Lee Image",
    description: "This is an image of Brenda Lee.",
    link: "https://www.youtube.com/embed/TFsZy9t-qDc?si=oIuMdRBaayjCtKv2?autoplay=1",
    id: 4,
  },
  {
    src: "white-christmas.jpg",
    alt: "Frank & Bing",
    description: "This is an image of Frank & Bing.",
    link: "https://www.youtube.com/embed/mMl4Pls41qI?si=kYNnKs8-DazEJugF?autoplay=1",
    id: 5,
  },
];

const imageContainer = document.querySelector(".image-container");

let currentImageIndex = 0;

// FORWARD BUTTON
const forwardBtn = document.getElementById("forwards");
forwardBtn.addEventListener("click", moveForward);

// BACKWARDS BUTTON
const backwardsBtn = document.getElementById("backwards");
backwardsBtn.addEventListener("click", moveBackwards);

function moveForward() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

function moveBackwards() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}

function updateImage() {
  const currentImage = images[currentImageIndex];
  imageContainer.innerHTML = `
    <img src="${currentImage.src}" />
    
  `;
}

// PLAY FUNCTION
const play = document.getElementById("play");
play.addEventListener("click", playFunction);

function playFunction() {
  const iPodImageContainer = document.querySelector(".image-container");
  const currentImage = images[currentImageIndex];
  const videoLink = currentImage.link + "&autoplay=1"; // Add autoplay parameter

  iPodImageContainer.innerHTML = `
    <iframe width="300" height="300" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;

  console.log("play clicked!");
}

// STOP FUNCTION

const stop = document.getElementById("stop");
stop.addEventListener("click", stopFunction);

function stopFunction() {
  const imageStop = document.querySelector(".image-container");

  imageStop.innerHTML = `
  <img src="/placeholder-img.png" alt="placeholder-img" />
  `;
}
