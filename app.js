var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
function clickHandler(){
    console.log("clicked");
    alert(txtInput.value);
    console.log(txtInput.value);
};


btnTranslate.addEventListener("click", clickHandler);