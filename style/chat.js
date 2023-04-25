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
