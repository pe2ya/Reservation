
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
