function setHTML(element, string) {
    // Set the HTML content of the element to the string
    element.innerHTML = string;
}

function setColor(element, color) {
    element.style.color = color;
}
var myParagraph = document.getElementById('myParagraph');
setHTML(myParagraph, 'Hello 123');
setColor(myParagraph, 'red');
var myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
    setColor(myParagraph, 'green');
});
var myOtherButton = document.getElementById("myOtherButton");
myOtherButton.addEventListener('click', function () {
    setColor(myParagraph, 'red');
});

function sum(a, b) {
    return a + b;
}
console.log(5, 6, sum(5, 6));
// > < == !=
// === !==
console.log('5>6', 5 > 6);
console.log('5<6', 5 < 6);
console.log('5===6', 5 === 6);
console.log('5!==6', 5 !== 6);
if (5 !== 6) {
    console.log('5 is not 6');
}
if (5 === 6) {
    console.log('5 is 6? Impossible!');
} else {
    console.log('That is right, 5 is still not 6');
} if (5 === 6) {
    console.log('5 is 6? Impossible!');
} else if (6 > 5) {
    console.log('6 is indeed greater than 5');
}
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(i);
}
console.log(arr);

function colorChildren(list) {
    var colors = ['red', 'green', 'blue', 'purple'];
    console.log('colorChildren', list, colors, list.children);
    for (var i = list.children.length - 1; i >= 0; i--) {
        // list.children[i].style.color = colors[i];
        setColor(list.children[i], colors[list.children.length - 1 - i]);
        console.log('colorChildren - loop', i, list.children.length - 1 - i, list.children[i].innerHTML, colors[list.children.length - 1 - i]);
    }
}
var list = document.getElementById("myList");
colorChildren(list);
