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

// Apply styles to .setter elements
const setters = document.querySelectorAll('.menu .section .setter');
setters.forEach(setter => {
  setter.style.display = 'flex';
  setter.style.flexFlow = 'row-reverse';
  setter.style.gap = '1em';
  setter.style.justifyContent = 'space-between';
  setter.style.margin = '.75em 0 2em 0';
  setter.style.padding = '0 .5em';
  setter.style.display = 'none';
});

const contentBtnContainer = document.querySelector('.content .btn-container');
contentBtnContainer.style.background = 'var(--body-color)';
contentBtnContainer.style.transition = '.25s';

contentBtnContainer.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.075)';
    this.style.boxShadow = 'none';
});

const sectionSetterBtnContainer = document.querySelector('.section .setter .btn-container');
sectionSetterBtnContainer.style.flex = '1';
sectionSetterBtnContainer.style.height = '1.6em';
sectionSetterBtnContainer.style.borderRadius = '3px';

const sectionAdd = document.querySelector('.section.add');
sectionAdd.style.display = 'flex';
sectionAdd.style.flexFlow = 'column';
sectionAdd.style.gap = '2em';

const sectionEditBtnContainer = document.querySelector('.section .btn-container.edit');
sectionEditBtnContainer.style.padding = '.5em 1.5em';
sectionEditBtnContainer.style.width = '12em';
sectionEditBtnContainer.style.gap = '2em';
sectionEditBtnContainer.style.borderRadius = '99vw';

sectionEditBtnContainer.addEventListener('click', function() {
    this.classList.add('active');
});

const contentEditor = document.querySelector('.content .editor');
contentEditor.style.overflow = 'auto'; 
contentEditor.style.flex = '8';

// Get the editor element and all of its children
const editor = document.querySelector('.editor');
const editorChildren = editor.children;

// Apply margin to all children of the editor
for (let i = 0; i < editorChildren.length; i++) {
  editorChildren[i].style.margin = '2em auto';
}

// Get the add button container and set its style properties
const addButton = document.querySelector('.editor .btn-container.add');
addButton.style.width = '10em';
addButton.style.aspectRatio = '1';
addButton.style.borderStyle = 'dashed';
addButton.style.borderRadius = '5px';

// Get the set section and its active class, and set their style properties
const setSection = document.querySelector('.menu .section.set');
const setActiveClass = 'active';
setSection.style.transform = 'translate(0, -250px)';
setSection.style.transition = 'all .325s ease-in';
setSection.style.transitionDelay = '0s';
setSection.classList.remove(setActiveClass);

// Add a click event listener to the set section that toggles the active class
setSection.addEventListener('click', () => {
  setSection.classList.toggle(setActiveClass);
  setSection.style.transform = setSection.classList.contains(setActiveClass)
    ? 'translate(0, 0)'
    : 'translate(0, -250px)';
  setSection.style.transitionDelay = setSection.classList.contains(setActiveClass)
    ? '.2s'
    : '0s';
});

// Get the element container and set its style properties
const elementContainer = document.querySelector('#el-container');
elementContainer.style.width = 'inherit';
elementContainer.style.height = 'auto';
elementContainer.style.padding = '1.5em';
elementContainer.style.display = 'flex';
elementContainer.style.flexFlow = 'column';
elementContainer.style.gap = '2em';

const elContainer = document.querySelector('#el-container');

const autoFill = document.querySelectorAll('.auto-fill');
autoFill.forEach(item => {
  item.style.margin = '0';
  item.style.width = 'fit-content';
  item.style.display = 'grid';
  item.style.gap = '.3em';
});

const elements = document.querySelectorAll('.element');
elements.forEach(item => {
  item.style.width = '1.4em';
  item.style.aspectRatio = '1';
  item.style.borderRadius = '2px';
  item.style.backgroundColor = 'var(--element-default-color)';
  item.style.cursor = 'pointer';
  item.style.textAlign = 'center';
});

const activeElements = document.querySelectorAll('.element.active');
activeElements.forEach(item => {
  item.style.backgroundColor = '#4d13d1';
});

const emptyElements = document.querySelectorAll('.element.empty');
emptyElements.forEach(item => {
  item.style.backgroundColor = 'transparent !important';
  item.style.color = 'var(--text-color) !important';
  item.style.cursor = 'auto';
});

const emptyElementsInElContainer = elContainer.querySelectorAll('#el-container .element.empty');
emptyElementsInElContainer.forEach(item => {
  item.style.cursor = 'pointer';
  item.style.border = '1px dashed';
});

// Get the elements with specific classes or ids and set their styles using JavaScript
const elementsWithRoundColor = document.querySelectorAll(".round-color");
elementsWithRoundColor.forEach(element => {
element.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--element-premium-color");
});

const elementWithPremiumPlus = document.querySelector(".premium-plus");
elementWithPremiumPlus.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--element-premium-plus-color");

const elementWithReserved = document.querySelector(".reserved");
elementWithReserved.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--element-reserved-color");

const ionIconInEditBtn = document.querySelector(".section .btn-container.edit ion-icon");
ionIconInEditBtn.style.transform = "rotate(0deg) scale(1.5)";

const previewContent = document.querySelector(".page.preview .content");
previewContent.style.flexFlow = "column";

const nav = document.querySelector("nav");
nav.style.height = getComputedStyle(document.documentElement).getPropertyValue("--nav-size");
nav.style.borderRadius = "5px";
nav.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--btn-container-color");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.padding = "1em 3em";

const header = document.querySelector('header');
header.style.position = 'sticky';
header.style.top = '0';
header.style.zIndex = '10';
header.style.width = '100vw';
header.style.padding = '1em';
header.style.background = 'var(--body-color)';
header.style.transition = 'box-shadow .2s ease';

const logo = document.querySelector('.logo a');
logo.style.display = 'flex';
logo.style.flexFlow = 'wrap';
logo.style.gridGap = '.5em';
logo.style.cursor = 'pointer';
logo.style.height = '1.5em';
logo.style.maxHeight = '1.5em';
logo.style.width = 'auto';
logo.style.fontWeight = '500';
logo.style.fontSize = '1.3em';
logo.style.textDecoration = 'none';
logo.style.alignItems = 'center';

const imgContainer = document.querySelector('.img-container');
imgContainer.style.height = '1.5em';
imgContainer.style.width = '1.5em';

const img = document.querySelector('.img-container img');
img.style.height = '100%';

const navLinks = document.querySelector('.nav-links');
navLinks.style.listStyle = 'none';
navLinks.style.padding = '0';

const navLinksItems = document.querySelectorAll('.nav-links li');
navLinksItems.forEach(item => {
item.style.display = 'inline-block';
item.style.padding = '0em 1.2em';
item.style.fontWeight = '300';
item.style.fontSize = '1.1em';
item.style.textDecoration = 'none';
item.style.color = 'var(--nav-text-color)';
item.style.transition = 'all .3s ease 0s';

const link = item.querySelector('a');
link.style.textDecoration = 'none';

link.addEventListener('hover', () => {
link.style.color = 'var(--nav-text-color-hover)';
});

const afterEl = document.createElement('span');
afterEl.style.content = '';
afterEl.style.width = '0px';
afterEl.style.height = '1px';
afterEl.style.display = 'block';
afterEl.style.background = 'var(--nav-text-color-hover)';
afterEl.style.transition = '.325s';
item.appendChild(afterEl);

link.addEventListener('mouseover', () => {
afterEl.style.width = '100%';
});
});

const user = document.querySelector('.user');
user.style.cursor = 'pointer';
user.style.width = '2em';
user.style.height = '2em';
user.style.display = 'flex';
user.style.justifyContent = 'center';
user.style.alignItems = 'center';
user.style.borderRadius = '99vw';
user.style.transition = '.325s';
user.style.marginLeft = '3.5em';

const userIcon = user.querySelector('ion-icon');
userIcon.style.transform = 'scale(1.5)';
userIcon.style.cursor = 'pointer';

user.addEventListener('mouseover', () => {
user.style.backgroundColor = '#CCCCCC';
});

const userButton = user.querySelector('button');
userButton.style.display = 'none';

const constructorTitle = document.querySelector('.section.set .constructor-title');
constructorTitle.style.width = '100%';
constructorTitle.style.height = '100%';
constructorTitle.style.position = 'absolute';
constructorTitle.style.top = '10em';
constructorTitle.style.left = '0';
constructorTitle.style.display = 'flex';
constructorTitle.style.alignItems = 'center';
constructorTitle.style.textAlign = 'center';
constructorTitle.style.fontSize = '1.5em';
constructorTitle.style.opacity = '1';
constructorTitle.style.transition = 'all .325s ease-in';
constructorTitle.style.transitionDelay = '.2s';
constructorTitle.style.zIndex = '-1';

constructorTitle.classList.add('active');
constructorTitle.addEventListener('transitionend', () => {
constructorTitle.style.top = '0';
constructorTitle.style.opacity = '0';
constructorTitle.style.transitionDelay = '0s';
});

const scrollBarStyles = `
    width: 10px;
    height: 10px;
`;

const scrollBarTrackStyles = `
    background: transparent;
`;

const scrollBarThumbStyles = `
    background: var(--scroll-bar-color);
`;

const scrollBarThumbHoverStyles = `
    background: var(--scroll-bar-color-hover);
`;

const bodyScrollBarStyles = `
    width: 0px !important;
    height: 0px !important;
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = `
    ::-webkit-scrollbar {
        ${scrollBarStyles}
    }

    ::-webkit-scrollbar-track {
        ${scrollBarTrackStyles}
    }

    ::-webkit-scrollbar-thumb {
        ${scrollBarThumbStyles}
    }

    ::-webkit-scrollbar-thumb:hover {
        ${scrollBarThumbHoverStyles}
    }

    body::-webkit-scrollbar {
        ${bodyScrollBarStyles}
    }
`;

document.head.appendChild(styleSheet);

const formWindow = document.querySelector('.form-window');
const formContentCtn = document.querySelector('.form-content');

formWindow.style.display = 'none';
formWindow.style.position = 'fixed';
formWindow.style.zIndex = '1';
formWindow.style.left = '0';
formWindow.style.top = '0';
formWindow.style.width = '100%';
formWindow.style.height = '100%';
formWindow.style.overflow = 'auto';
formWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';

const scrollbar = formWindow.style.scrollbar;
scrollbar.width = '0';
scrollbar.height = '0';

const formWindowActive = document.querySelector('.form-window.active');
formWindowActive.style.display = 'block';

const formHeaderElements = ['h1', 'p'];
const formHeader = formContentCtn.querySelectorAll(formHeaderElements.join(', '));
formHeader.forEach(header => {
header.style.margin = '2em auto';
});

const formLinks = formContentCtn.querySelectorAll('a');
formLinks.forEach(link => {
link.style.color = '#424242';
link.style.opacity = '.8';
link.style.fontWeight = 'inherit';
link.style.textDecoration = 'underline';
});

const formLinksHover = formContentCtn.querySelectorAll('a:hover');
formLinksHover.forEach(link => {
link.style.opacity = '1';
});

const formContentStyle = formContent.style;
formContentStyle.backgroundColor = '#fefefe';
formContentStyle.margin = '5% auto 15% auto';
formContentStyle.border = '1px solid #888';
formContentStyle.width = '80%';
formContentStyle.maxWidth = '40em';
formContentStyle.borderRadius = '20px';
formContentStyle.animation = 'animatezoom 0.6s';

const keyframes = `@keyframes animatezoom { from {transform: scale(0)} to {transform: scale(1)} }`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(keyframes));

document.head.appendChild(style);

const containers = document.querySelectorAll('.form-content .container');

containers.forEach(container => {
container.style.padding = '1em';
});

const textInputsCnt = document.querySelectorAll('.form-content input[type=text], .form-content input[type=password], .form-content button');

textInputsCnt.forEach(input => {
input.style.width = '100%';
input.style.padding = '.75em 1.25em';
input.style.margin = '.5em 0';
input.style.borderRadius = '4px';
input.style.borderRadius = '99vw';

if (input.tagName === 'INPUT') {
  input.style.display = 'inline-block';
  input.style.border = '1px solid #ccc';
}

});

const futureButton = document.querySelector('.form-content button');

futureButton.style.backgroundColor = '#04AA6D';
futureButton.style.color = 'white';
futureButton.style.border = 'none';
futureButton.style.cursor = 'pointer';
futureButton.style.transition = 'all .325s';

futureButton.addEventListener('mouseover', function() {
futureButton.style.opacity = '0.8';
});

const lastContainer = document.querySelector('.form-content .container:nth-last-child(1)');

lastContainer.style.display = 'flex';
lastContainer.style.flexFlow = 'row';
lastContainer.style.justifyContent = 'space-between';

const lastContainerButton = document.querySelector('.form-content .container:nth-last-child(1) button');

lastContainerButton.style.width = '10em';
lastContainerButton.style.padding = '.8em 1em';
lastContainerButton.style.backgroundColor = 'var(--form-comfirm-color)';
lastContainerButton.style.fontWeight = '500';
lastContainerButton.style.fontSize = '1.1em';
lastContainerButton.style.borderRadius = '99vw';

const lastContainerCancelButton = document.querySelector('.form-content .container:nth-last-child(1) .cancel');

lastContainerCancelButton.style.backgroundColor = 'transparent';
lastContainerCancelButton.style.border = '2px solid var(--form-cansel-color)';
lastContainerCancelButton.style.color = 'var(--form-cansel-color)';

lastContainerCancelButton.addEventListener('mouseover', function() {
lastContainerCancelButton.style.borderColor = 'var(--form-cansel-color-hover)';
lastContainerCancelButton.style.color = 'var(--form-cansel-color-hover)';
});

const formContentContainers = document.querySelectorAll('nav .form-content .container');

formContentContainers[formContentContainers.length - 1].style.flexFlow = 'column';

const formContentButtons = document.querySelectorAll('nav .form-content .container:nth-last-child(1) button');
formContentButtons.forEach(button => {
    button.style.width = '100%';
});

const formContentLabels = document.querySelectorAll('.form-content label');
formContentLabels.forEach(label => {
    label.style.fontSize = '1.25em';
});

const templateContainer = document.querySelector('.template-container');
templateContainer.style.display = 'flex';
templateContainer.style.flexFlow = 'column';
templateContainer.style.gap = '1.5em';

const templateContainerH1 = document.querySelector('.template-container h1');
templateContainerH1.style.textAlign = 'center';
templateContainerH1.style.margin = '0 auto';

const templateInfo = document.querySelector('.template-container .template-info');
templateInfo.style.display = 'flex';
templateInfo.style.flexFlow = 'column';
templateInfo.style.gap = '1.7em';
templateInfo.style.overflow = 'auto';

const templateSeats = document.querySelector('.template-container .template-info .template-seats');
templateSeats.style.display = 'flex';
templateSeats.style.flexFlow = 'row';
templateSeats.style.justifyContent = 'space-between';
templateSeats.style.gap = '1.5em';

// Get all elements with class "element" under ".template-seats" and add event listener for hover
const templateSeats = document.querySelectorAll('.template-seats .element');
templateSeats.forEach((element) => {
element.addEventListener('mouseenter', (event) => {
// Get the data-hover attribute of the element and set it as the content of its :before pseudo-element
const content = event.target.getAttribute('data-hover');
event.target.style.background = 'var(--btn-active)';
event.target.style.color = '#ffffff';
event.target.style.position = 'relative';
event.target.style.zIndex = '1';
event.target.style.overflow = 'visible';
const before = event.target.style.setProperty('content', "${content}");
before.style.opacity = '1';
});

element.addEventListener('mouseleave', (event) => {
// Reset styles of the element and its :before pseudo-element when mouse leaves
event.target.style.background = '';
event.target.style.color = '';
event.target.style.position = '';
event.target.style.zIndex = '';
event.target.style.overflow = '';
const before = event.target.style.setProperty('content', '');
before.style.opacity = '0';
});
});

// Get the price group element and set its styles
const priceGroup = document.querySelector('.template-container .price-group');
priceGroup.style.display = 'flex';
priceGroup.style.gap = '3em';
priceGroup.style.alignItems = 'center';
priceGroup.style.justifyContent = 'center';
priceGroup.style.marginTop = '2em';

// Get the price elements and set their styles
const prices = document.querySelectorAll('.template-container .price .element');
prices.forEach((price) => {
price.style.cursor = 'auto';
});

// Add keyframe animation for future use
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes showText { 0% { opacity: 0; } 100% { opacity: 1; } }`);

const footerBasic = document.querySelector(".footer-basic");
const footerBasicUl = document.querySelector(".footer-basic ul");
const footerBasicUlLinks = document.querySelectorAll(".footer-basic ul a");
const footerBasicSocial = document.querySelector(".footer-basic .social");
const footerBasicSocialLinks = document.querySelectorAll(".footer-basic .social a");
const footerBasicCopyRight = document.querySelector(".footer-basic .copyright");

footerBasic.style.marginTop = "0.1em";
footerBasic.style.padding = "1.5em 0";
footerBasic.style.backgroundColor = "var(--footer-color)";
footerBasic.style.color = "var(--footer-text-color)";
footerBasic.style.boxShadow = "inset 0 -8px 4px 4px var(--footer-color), inset 0 0 4px 0px var(--footer-text-color)";

footerBasicUl.style.padding = "0";
footerBasicUl.style.listStyle = "none";
footerBasicUl.style.display = "flex";
footerBasicUl.style.justifyContent = "center";
footerBasicUl.style.textAlign = "center";
footerBasicUl.style.fontSize = "1.125em";
footerBasicUl.style.lineHeight = "1.6";
footerBasicUl.style.marginBottom = "0";

footerBasicUlLinks.forEach(link => {
    link.style.display = "inline-block";
    link.style.transition = "all .3s ease 0s";
    link.style.color = "var(--footer-text-color)";
});

footerBasicUlLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.opacity = "1";
    });
});

footerBasicSocial.style.textAlign = "center";

footerBasicSocialLinks.forEach(link => {
    link.style.fontSize = "1.5em";
    link.style.width = "1.5em";
    link.style.height = "1.5em";
    link.style.lineHeight = "1.5em";
    link.style.display = "inline-block";
    link.style.textAlign = "center";
    link.style.borderRadius = "50%";
    link.style.border = "1px solid var(--footer-icon-color)";
    link.style.margin = "0 .1em";
    link.style.color = "inherit";

    link.addEventListener("mouseover", () => {
        link.style.borderRadius = "8px";
        link.style.transform = "scale(1.15)";
    });
});

footerBasicCopyRight.style.marginTop = "1em";
footerBasicCopyRight.style.textAlign = "center";
footerBasicCopyRight.style.fontSize = ".875em";
footerBasicCopyRight.style.marginBottom = "0";

const socialIcons = document.querySelectorAll('.social a i');
socialIcons.forEach(icon => {
icon.style.transition = '.375s';
});

const instagramIcons = document.querySelectorAll('.social a i[class*="instagram"]');
instagramIcons.forEach(icon => {
icon.addEventListener('mouseover', () => {
icon.style.color = 'coral';
});
});

const snapchatIcons = document.querySelectorAll('.social a i[class*="snapchat"]');
snapchatIcons.forEach(icon => {
icon.addEventListener('mouseover', () => {
icon.style.color = '#fbd35d';
});
});

const twitterIcons = document.querySelectorAll('.social a i[class*="twitter"]');
twitterIcons.forEach(icon => {
icon.addEventListener('mouseover', () => {
icon.style.color = '#2196f3';
});
});

const facebookIcons = document.querySelectorAll('.social a i[class*="facebook"]');
facebookIcons.forEach(icon => {
icon.addEventListener('mouseover', () => {
icon.style.color = '#253cbe';
});
});

const alignCenterElements = document.querySelectorAll('.align-center');
alignCenterElements.forEach(element => {
element.style.display = 'flex';
element.style.justifyContent = 'center';
element.style.alignItems = 'center';
});

const borderElements = document.querySelectorAll('.border');
borderElements.forEach(element => {
element.style.border = '2px solid #ccc';
element.style.borderRadius = '20px';
});

const signupElement = document.querySelector('.signup');
signupElement.style.maxWidth = '30em';
signupElement.style.margin = '2em auto';

const signupButton = document.querySelector('.signup button');
signupButton.style.width = '100%';

const backElements = document.querySelectorAll('.back');
backElements.forEach(element => {
element.style.margin = '0';
element.style.fontWeight = 'normal';
element.style.color = '#5a5a5a';
element.style.padding = '1em';
});

const backIcons = document.querySelectorAll('.back ion-icon');
backIcons.forEach(icon => {
icon.style.transform = 'scale(1.2)';
});

backElements.forEach(element => {
element.addEventListener('mouseover', () => {
element.style.opacity = '.8';
});
});

const message = document.querySelectorAll('.message');
for (let i = 0; i < message.length; i++) {
message[i].style.border = '1px solid #ccc';
message[i].style.borderRadius = '10px';
message[i].style.margin = '1em';
message[i].style.padding = '2em 3em';
message[i].style.background = '#ededed';
message[i].style.fontSize = 'larger';
}

const theaterLinks = document.querySelectorAll('.theater a');
for (let i = 0; i < theaterLinks.length; i++) {
theaterLinks[i].style.display = 'flex';
theaterLinks[i].style.flexFlow = 'row';
theaterLinks[i].style.backgroundColor = '#eeeeee';
theaterLinks[i].style.margin = '1em';
theaterLinks[i].style.borderRadius = '10px';
theaterLinks[i].style.width = 'inherit';

theaterLinks[i].querySelector('.logo').style.minWidth = '7em';
theaterLinks[i].querySelector('.logo').style.minHeight = '7em';
theaterLinks[i].querySelector('.logo').style.flex = '1';

const textDiv = theaterLinks[i].querySelector('.text');
textDiv.style.flex = '4';
textDiv.style.display = 'flex';
textDiv.style.flexFlow = 'column';

const textElements = textDiv.querySelectorAll('*');
for (let j = 0; j < textElements.length; j++) {
textElements[j].style.margin = '0 2em !important';
textElements[j].style.flex = '1';
}

const textParagraph = theaterLinks[i].querySelector('.text p');
textParagraph.style.textAlign = 'right';
}

const theaterLinksHover = document.querySelectorAll('.theater a:hover');
for (let i = 0; i < theaterLinksHover.length; i++) {
theaterLinksHover[i].style.transform = 'scale(1.02)';
}

const button86 = document.querySelector(".button-86");
button86.style.all = "unset";
button86.style.width = "100px";
button86.style.height = "30px";
button86.style.fontSize = "16px";
button86.style.background = "transparent";
button86.style.border = "none";
button86.style.position = "relative";
button86.style.color = "#f0f0f0";
button86.style.cursor = "pointer";
button86.style.zIndex = "1";
button86.style.padding = "10px 20px";
button86.style.display = "none";
button86.style.alignItems = "center";
button86.style.justifyContent = "center";
button86.style.whiteSpace = "nowrap";
button86.style.userSelect = "none";
button86.style.webkitUserSelect = "none";
button86.style.touchAction = "manipulation";

const button86Active = document.querySelector(".button-86.active");
button86Active.style.display = "flex";

const button86Before = document.querySelector(".button-86::before");
button86Before.style.content = "''";
button86Before.style.position = "absolute";
button86Before.style.bottom = "0";
button86Before.style.right = "0";
button86Before.style.zIndex = "-99999";
button86Before.style.transition = "all .4s";
button86Before.style.transform = "translate(0%, 0%)";
button86Before.style.width = "100%";
button86Before.style.height = "100%";
button86Before.style.background = "#28282d";
button86Before.style.borderRadius = "10px";

const button86After = document.querySelector(".button-86::after");
button86After.style.content = "''";
button86After.style.position = "absolute";
button86After.style.bottom = "0";
button86After.style.right = "0";
button86After.style.zIndex = "-99999";
button86After.style.transition = "all .4s";
button86After.style.transform = "translate(10px, 10px)";
button86After.style.width = "35px";
button86After.style.height = "35px";
button86After.style.background = "#ffffff15";
button86After.style.backdropFilter = "blur(5px)";
button86After.style.webkitBackdropFilter = "blur(5px)";
button86After.style.borderRadius = "50px";

const button86HoverBefore = document.querySelector(".button-86:hover::before");
button86HoverBefore.style.transform = "translate(5%, 20%)";
button86HoverBefore.style.width = "110%";
button86HoverBefore.style.height = "110%";

const button86HoverAfter = document.querySelector(".button-86:hover::after");
button86HoverAfter.style.borderRadius = "10px";
button86HoverAfter.style.transform = "translate(0, 0)";
button86HoverAfter.style.width = "100%";
button86HoverAfter.style.height = "100%";

const button86ActiveAfter = document.querySelector(".button-86:active::after");
button86ActiveAfter.style.transition = "0s";
button86ActiveAfter.style.transform = "translate(0, 5%)";

const btn86Container = document.querySelector(".btn-86-container");
btn86Container.style.position = "sticky";
btn86Container.style.bottom = "4em";
btn86Container.style.background = "transparent";
btn86Container.style.display = "flex";
btn86Container.style.alignItems = "center";
btn86Container.style.justifyContent = "right";
btn86Container.style.padding = "1em 3em";

const test = document.querySelector('#test');
test.style.paddingInline = '5em';

const messanger = document.querySelector('.messanger');
messanger.style.padding = '0.2em';
messanger.style.width = '500px';
messanger.style.height = '550px';
messanger.style.margin = '1.5em auto';
messanger.style.border = '3px solid rgba(52, 52, 55, 0.4823529412)';
messanger.style.backgroundColor = '#ececec';
messanger.style.borderRadius = '5px';

const messages = messanger.querySelector('.messages');
messages.style.overflowY = 'scroll';
messages.style.display = 'flex';
messages.style.flexDirection = 'column';
messages.style.justifyContent = 'end';
messages.style.borderRadius = '5px';
messages.style.margin = '0.5em auto';
messages.style.height = '85%';
messages.style.width = '95%';
messages.style.backgroundColor = '#ffffff';

const scrollbar = messages.querySelector('::-webkit-scrollbar');
scrollbar.style.width = '6px';
scrollbar.style.height = '6px';

const scrollbarTrack = messages.querySelector('::-webkit-scrollbar-track');
scrollbarTrack.style.borderRadius = '10px';
scrollbarTrack.style.background = 'rgba(0, 0, 0, 0.1)';

const scrollbarThumb = messages.querySelector('::-webkit-scrollbar-thumb');
scrollbarThumb.style.borderRadius = '10px';
scrollbarThumb.style.background = 'rgba(0, 0, 0, 0.2)';

scrollbarThumb.addEventListener('mouseover', () => {
    scrollbarThumb.style.background = 'rgba(0, 0, 0, 0.4)';
});

scrollbarThumb.addEventListener('mousedown', () => {
    scrollbarThumb.style.background = 'rgba(0, 0, 0, 0.9)';
});

const msgItem = messages.querySelector('.msg-item');
msgItem.style.fontSize = '1.2em';
msgItem.style.alignSelf = 'flex-end';
msgItem.style.margin = '10px';
msgItem.style.marginRight = '10px';
msgItem.style.padding = '0.2em 0.8em';
msgItem.style.width = 'fit-content';
msgItem.style.height = 'fit-content';
msgItem.style.border = '#6a6a6b';
msgItem.style.borderRadius = '5px';
msgItem.style.backgroundColor = '#dadada';

const sender = messanger.querySelector('.sender');
sender.style.marginTop = '1em';
sender.style.position = 'relative';
sender.style.bottom = '0';
sender.style.height = 'fit-content';
sender.style.display = 'flex';
sender.style.justifyContent = 'center';

const project = sender.querySelector('#project');
project.style.padding = '0';
project.style.width = '20%';
project.style.margin = '0 0.2em';

const msgText = sender.querySelector('.msg-text');
msgText.style.paddingLeft = '1em';
msgText.style.width = '75%';
