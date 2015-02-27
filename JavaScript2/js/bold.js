// document.querySelectorAll('selector')
var buttons = document.querySelectorAll('button, li');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.fontWeight = 'bold';
}