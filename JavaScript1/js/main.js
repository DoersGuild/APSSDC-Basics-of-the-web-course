console.log('Hello everyone!'); // String
console.log(50); // Number - Integer
console.log(50.56); // Number - Float
console.log([5, 1, 3, 68, 34]); // Array
console.log({
    'a': 1,
    'b': 2
}); // Object
// int i = 0;
var i = 0;
console.log('i = ', i);
i = 'i changed into a string';
console.log('i = ', i);
var arr = [5, 2573, 3, 68, 34];
console.log('arr[1] = ', arr[1]);
arr[1] = 75;
console.log('arr[1] = ', arr[1]);
console.log('arr = ', arr);
arr.push(125);
console.log('arr = ', arr);
// Object
var obj = {
    'a': 1,
    'b': 2,
    'key': 'value 1'
};
console.log('obj = ', obj);
console.log('obj["a"] = ', obj['a']);
console.log('obj["b"] = ', obj['b']);
console.log('obj["key"] = ', obj['key']);
console.log('obj.key = ', obj.key);
obj.key = 'value 2';
console.log('obj.key = ', obj.key);
console.log('obj = ', obj);
obj.key2 = 'value for key2';
console.log('obj = ', obj);
var str = 'hello';
console.log('str = ', str);
console.log('str.length = ', str.length);
console.log('str.toUpperCase() = ', str.toUpperCase());
console.log('document.body = ', document.body);
console.log('document.getElementById("main") = ', document.getElementById("main"));
console.log('document.getElementById("myParagraph") = ', document.getElementById("myParagraph"));
var myParagraph = document.getElementById("myParagraph");
console.log('myParagraph = ', myParagraph);
console.log('myParagraph.innerHTML = ', myParagraph.innerHTML);
myParagraph.innerHTML = 'Hello myParagraph';
console.log('myParagraph.innerHTML = ', myParagraph.innerHTML);
myParagraph.innerHTML = 'Hello <b>myParagraph</b>';
console.log('myParagraph.innerHTML = ', myParagraph.innerHTML);