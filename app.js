var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//outputDiv.innerText = "Hii this is task"
function clickHandler(){
    outputDiv.innerText = "This will be translated to bannana: " + txtInput.value;

};


btnTranslate.addEventListener("click", clickHandler);



// var btnprimary = document.querySelector('.btn-primary');
// var inputTag = document.querySelector('#input-tag')
//('#input[name=translator]')