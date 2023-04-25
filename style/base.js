// Select the DOM elements with the class "accordion"
const accordionElements = document.querySelectorAll('.accordion');

// Loop through the selected elements
accordionElements.forEach((accordionElement) => {
  // Set the styles for the "a" element inside the current accordion element
  const aElement = accordionElement.querySelector('a');
  aElement.style.position = 'relative';
  aElement.style.display = '-webkit-box';
  aElement.style.display = '-webkit-flex';
  aElement.style.display = '-ms-flexbox';
  aElement.style.display = 'flex';
  aElement.style.webkitBoxOrient = 'vertical';
  aElement.style.webkitBoxDirection = 'normal';
  aElement.style.webkitFlexDirection = 'column';
  aElement.style.msFlexDirection = 'column';
  aElement.style.flexDirection = 'column';
  aElement.style.width = '100%';
  aElement.style.padding = '1rem 3rem 1rem 1rem';
  aElement.style.color = '#7288a2';
  aElement.style.fontSize = '1.15rem';
  aElement.style.fontWeight = '400';
  aElement.style.border = '1px solid #e5e5e5';

  // Set the styles for the "a:hover" and "a:hover::after" states
  aElement.addEventListener('mouseover', () => {
    aElement.style.cursor = 'pointer';
    aElement.style.color = '#ff5353';
    aElement.style.border = '1px solid #ff5353';
    const afterElement = aElement.querySelector('::after');
    afterElement.style.border = '1px solid #ff5353';
  });

  // Set the styles for the "a.active" state
  aElement.classList.contains('active') && (() => {
    aElement.style.color = '#ff5353';
    aElement.style.borderBottom = '1px solid #ff5353';
    const afterElement = aElement.querySelector('::after');
    afterElement.style.content = '\f209';
    afterElement.style.color = '#ff5353';
    afterElement.style.border = '1px solid #ff5353';
  })();

  // Set the styles for the "::after" element inside the current "a" element
  const afterElement = aElement.querySelector('::after');
  afterElement.style.fontFamily = 'Ionicons';
  afterElement.style.content = '\f218';
  afterElement.style.position = 'absolute';
  afterElement.style.float = 'right';
  afterElement.style.right = '1rem';
  afterElement.style.fontSize = '1rem';
  afterElement.style.color = '#7288a2';
  afterElement.style.padding = '5px';
  afterElement.style.width = '30px';
  afterElement.style.height = '30px';
  afterElement.style.webkitBorderRadius = '50%';
  afterElement.style.mozBorderRadius = '50%';
  afterElement.style.borderRadius = '50%';
  afterElement.style.border = '1px solid #7288a2';
  afterElement.style.textAlign = 'center';

  // Set the styles for the ".content" element inside the current accordion element
  const contentElement = accordionElement.querySelector('.content');
  contentElement.style.opacity = '0';
  contentElement.style.padding = '0 1rem';
  contentElement.style.maxHeight = '0';
  contentElement.style.border = '1px solid #e5e5e5';
  contentElement.style.overflow = 'hidden';
});

var accordionLinks = document.querySelectorAll('.accordion a');

accordionLinks.forEach(function(link) {
link.addEventListener('click', function() {
    var activeLink = document.querySelector('.accordion a.active');
    if (activeLink && activeLink !== link) {
        activeLink.classList.remove('active');
        activeLink.nextElementSibling.classList.remove('active');
        }
        link.classList.toggle('active');
        link.nextElementSibling.classList.toggle('active');
    });
});
