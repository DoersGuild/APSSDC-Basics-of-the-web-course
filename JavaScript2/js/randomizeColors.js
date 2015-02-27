function getRandomNumberInRange(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function colorChildrenRandom(list) {
    var colors = ['red', 'green', 'blue', 'purple'];
    for (var i = 0; i < list.children.length; i++) {
        setColor(list.children[i], colors[getRandomNumberInRange(0, list.children.length - 1)]);
    }
}
var list = document.getElementById("myList");
var myListRandomizerButton = document.getElementById("myListRandomizerButton");
myListRandomizerButton.addEventListener('click', function () {
	colorChildrenRandom(list);
});