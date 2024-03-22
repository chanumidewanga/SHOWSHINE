//color sceme
const setTheme = theme => document.documentElement.className = theme;

function changeColor() {
  
  // generate random RGB values between 0 and 255
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  // apply the random color to background color style
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
// Get the buttons and the h1 element
const increaseBtn = document.getElementById("increase-h1-font-size");
const decreaseBtn = document.getElementById("decrease-h1-font-size");
const normalBtn = document.getElementById("normal-h1-font-size");
const h1Elements = document.getElementsByTagName("h1");
const h3Elements = document.getElementsByTagName("h3");
const pElements = document.getElementsByTagName("p");

// Set the default font size for h1,h3,p
let h1FontSize = 18;
const defaultH1FontSize = 18;

let h3FontSize = 30;
const defaultH3FontSize = 30;

let pFontSize = 12;
const defaultpFontSize = 12;


// Add click event listeners to the buttons
increaseBtn.addEventListener("click", () => {
  h1FontSize = 25;
  h3FontSize = 32;
  pFontSize = 14;
  
  for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.fontSize = h1FontSize + "px";
  }
  for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.fontSize = h3FontSize + "px";
  }
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.fontSize = pFontSize + "px";
  }
  
});

decreaseBtn.addEventListener("click", () => {
  h1FontSize = 20;
  h3FontSize = 26;
  pFontSize = 10;

  for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.fontSize = h1FontSize + "px";
  }
  for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.fontSize = h3FontSize + "px";
  }
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.fontSize = pFontSize + "px";
  }

});

normalBtn.addEventListener("click", () => {
  h1FontSize = defaultH1FontSize;
  h3FontSize = defaultH3FontSize;
  pFontSize = defaultpFontSize;

  for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.fontSize = h1FontSize + "px";
  }
  for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.fontSize = h3FontSize + "px";
  }
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.fontSize = pFontSize + "px";
  }
});