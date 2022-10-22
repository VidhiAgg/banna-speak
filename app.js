var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var servelUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// //outputDiv.innerText = "Hii this is task"

function getTranslationUrl(text) {
    return servelUrl + "?text=" + text;
}
function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Something wrong with the server. Please try after sometime.")
}

function clickHandler() {
    // outputDiv.innerText = "This will be translated to bannana: " + txtInput.value;
    var inputText = txtInput.value; //taking input
    //calling server for response
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(translation => console.log(translation.contents.translated))
        .catch(errorHandler);


};


btnTranslate.addEventListener("click", clickHandler);


// var btnprimary = document.querySelector('.btn-primary');
// var inputTag = document.querySelector('#input-tag')
//('#input[name=translator]') 


