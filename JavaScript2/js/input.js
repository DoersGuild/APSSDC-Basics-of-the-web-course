var colorInput = document.getElementById('colorInput');
colorInput.addEventListener('change', function () {
    console.log('Input changed', this, this === colorInput);
    setColor(myParagraph, this.value);
});
/* element.addEventListener('nameOfTheEvent', callBackFunction); */