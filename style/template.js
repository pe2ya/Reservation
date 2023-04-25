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
