
// get the btn which will be click, input contaning text, 
//output textBox for showimng translation
var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var servelUrl = "https://api.funtranslations.com/translate/minion.json"

//convert url by appending key and value to the url
function getTranslationUrl(text) {
    return servelUrl + "?text=" + text;
}

//defining error for error
function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Something wrong with the server. Please try after sometime.")
}

//when click happens 

function clickHandler() {
    //outputDiv.innerText = "This will be translated to bannana: " + txtInput.value;
    var inputText = txtInput.value; //reading the input
    //calling server for response
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(translation => {
            var translatedText = translation.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);


};


btnTranslate.addEventListener("click", clickHandler);


// var btnprimary = document.querySelector('.btn-primary');
// var inputTag = document.querySelector('#input-tag')
//('#input[name=translator]') 


