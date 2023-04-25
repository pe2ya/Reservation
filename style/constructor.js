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
