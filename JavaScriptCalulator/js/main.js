var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var sumResult1 = document.getElementById('sumResult1');

function sumAndShowResult() {
    var a = parseFloat(input1.value);
    var b = parseFloat(input2.value);
    sumResult1.value = a + b;
}
input1.addEventListener('change', sumAndShowResult);
input2.addEventListener('change', sumAndShowResult);