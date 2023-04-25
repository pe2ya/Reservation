// Box sizing rules
const pgelements = document.querySelectorAll('*');
for (let i = 0; i < pgelements.length; i++) {
  pgelements[i].style.boxSizing = 'border-box';
  pgelements[i].style.fontFamily = "'Roboto', sans-serif";
}

// Remove default margin
const marginElements = document.querySelectorAll("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd");
for (let i = 0; i < marginElements.length; i++) {
  marginElements[i].style.margin = "0";
}

// Remove list styles on ul, ol elements with a list role
const listElements = document.querySelectorAll("ul[role='list'], ol[role='list']");
for (let i = 0; i < listElements.length; i++) {
  listElements[i].style.listStyle = "none";
}

// Set core root defaults
document.documentElement.addEventListener('focusin', (event) => {
  if (event.target === document.documentElement) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
});

// Set core body defaults
document.body.style.minHeight = '100vh';
document.body.style.textRendering = 'optimizeSpeed';
document.body.style.lineHeight = '1.5';

// A elements that don't have a class get default styles
const aElements = document.querySelectorAll("a:not([class])");
for (let i = 0; i < aElements.length; i++) {
  aElements[i].style.textDecorationSkipInk = 'auto';
}

// Make images easier to work with
const imgElements = document.querySelectorAll("img, picture");
for (let i = 0; i < imgElements.length; i++) {
  imgElements[i].style.maxWidth = '100%';
  imgElements[i].style.display = 'block';
}

// Inherit fonts for inputs and buttons
const inputElements = document.querySelectorAll("input, button, textarea, select");
for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].style.font = 'inherit';
}

// root
const root = document.documentElement.style;
root.setProperty('--btn-container-color', '#eeeeee');
root.setProperty('--body-color', '#ffffff');
root.setProperty('--btn-active', '#4d13d1');
root.setProperty('--btn-active-text', '#ffffff');
root.setProperty('--nav-size', '6em');
root.setProperty('--nav-text-color', '#000000');
root.setProperty('--nav-text-color-hover', '#606060');
root.setProperty('--scroll-bar-color', '#2c0d0d');
root.setProperty('--scroll-bar-color-hover', '#555');
root.setProperty('--form-cansel-color', '#afafaf');
root.setProperty('--form-cansel-color-hover', '#5f5f5f');
root.setProperty('--form-comfirm-color', '#187ff5');
root.setProperty('--text-color', '#000000');
root.setProperty('--element-default-color', 'black');
root.setProperty('--element-premium-color', 'lightcoral');
root.setProperty('--element-premium-plus-color', 'lightskyblue');
root.setProperty('--element-reserved-color', 'green');
root.setProperty('--footer-color', '#ffffff');
root.setProperty('--footer-text-color', '#6d6d6d');
root.setProperty('--footer-icon-color', '#d3d3d3');

const body = document.body.style;
const main = document.querySelector('main');
const constructor = main.querySelectorAll('.constructor, .preview, .default');

body.backgroundColor = 'var(--body-color)';
body.width = '100vw';
body.height = '100vh';
body.display = 'flex';

constructor.forEach(el => {
  el.style.position = 'absolute';
  el.style.top = '0';
  el.style.zIndex = '11';
  el.style.transition = 'left .4s linear';
});

main.querySelector('.constructor').style.flexFlow = 'row-reverse';
main.querySelector('.page.constructor').style.left = '100%';
main.querySelector('.preview').style.left = '-100%';
main.querySelector('.default').style.flexFlow = 'column';

const defaultButtons = document.querySelector("main .default .buttons");
defaultButtons.style.height = "100vh";
defaultButtons.style.display = "flex";
defaultButtons.style.justifyContent = "space-evenly";
defaultButtons.style.alignItems = "center";

const mediaQuery = window.matchMedia("(max-width: 600px)");

if (mediaQuery.matches) {
const defaultButtons = document.querySelector("main .default .buttons");
defaultButtons.style.flexFlow = "column-reverse";

const btnIcon = document.querySelector(".page.default .btn-container ion-icon");
btnIcon.style.transform = "scale(4)";

const body = document.querySelector("body");
body.style.overflowX = "hidden";
body.style.position = "fixed";
}

const btnContainer = document.querySelectorAll(".page .btn-container");
btnContainer.forEach(container => {
container.style.backgroundColor = "var(--btn-container-color)";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.cursor = "pointer";
container.style.transition = "all .325s ease";
container.style.justifyContent = "center";
container.style.width = "2em";
});

// Get all elements with class "btn-container" inside elements with class "buttons" inside elements with class "default"
const defaultButtons = document.querySelectorAll('.page.default .buttons .btn-container');

// Loop through each element and apply the following styles
defaultButtons.forEach(button => {
  button.style.width = '15em';
  button.style.aspectRatio = '1';
  button.style.borderRadius = '99vw';
  button.style.position = 'relative';
  button.style.marginBottom = 'var(--nav-size)';
});

// Get all elements with class "btn-container" inside elements with class "page"
const allButtons = document.querySelectorAll('.page .btn-container');

// Loop through each element and apply the following styles on hover
allButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2)';
    button.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'none';
    button.style.boxShadow = 'none';
  });

  // Apply the following styles to ion-icon elements inside elements with class "btn-container"
  const ionIcon = button.querySelector('ion-icon');
  ionIcon.style.transform = 'scale(2)';

  // Apply the following styles specifically to ion-icon elements inside elements with class "page default"
  if (button.closest('.page.default')) {
    ionIcon.style.transform = 'scale(6)';
  }

  // Apply the following styles specifically to ion-icon elements inside elements with class "page constructor"
  if (button.closest('.page.constructor')) {
    ionIcon.style.transform = 'rotate(180deg) scale(2)';
  }
});

// Get the elements matching the selectors
const constructorAndPreview = document.querySelectorAll('.constructor.active, .preview.active');
const content = document.querySelector('.content');
const previewContent = document.querySelector('.preview .content');
const typography = document.querySelectorAll('h1, label, a, li, button, input');
const menu = document.querySelector('.constructor .menu');

// Modify their CSS properties
constructorAndPreview.forEach(el => {
  el.style.left = '0';
});

content.style.flex = '1';
content.style.overflowY = 'auto';
content.style.display = 'flex';

previewContent.style.padding = '3em 2em';

typography.forEach(el => {
  el.style.fontWeight = '300';
  el.style.margin = '0 auto';
  el.style.width = 'fit-content';
  el.style.overflowWrap = 'break-word';
  el.style.textAlign = 'center';
});

menu.style.backgroundColor = 'var(--btn-container-color)';
menu.style.flex = '2';
menu.style.minWidth = '17.5em';
menu.style.height = '100vh';
menu.style.overflowY = 'auto';
menu.style.display = 'flex';
menu.style.flexFlow = 'column';
menu.style.gap = '5em';
menu.style.padding = '3em 1em';

const constructorMenu = document.querySelector('.constructor .menu');

// Apply styles to all children elements
for (let i = 0; i < constructorMenu.children.length; i++) {
  constructorMenu.children[i].style.margin = '0 auto';
  constructorMenu.children[i].style.fontFamily = "'Roboto', sans-serif";
}

// Apply styles to labels
const menuLabels = document.querySelectorAll('.constructor .menu label');
menuLabels.forEach(label => {
  label.style.display = 'flex';
  label.style.flexFlow = 'column';
  label.style.marginBottom = '0em';
});

// Apply styles to text inputs
const textInputs = document.querySelectorAll('.menu .section input[type="text"]');
textInputs.forEach(input => {
  input.style.border = 'none';
  input.style.borderRadius = '20px';
  input.style.textAlign = 'center';
  input.style.padding = '.2em';
  input.style.marginBottom = '1em';

  // Add event listener to remove outline when input is focused
  input.addEventListener('focus', () => {
    input.style.outline = 'none';
  });
});