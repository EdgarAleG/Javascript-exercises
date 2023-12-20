const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];
let validValues = ["1", "2", "3", "4", "5","6", "7", "8", "9"]

//Backspace (borrar)
//

inputCard.addEventListener("keydown", event => {
    event.preventDefault();
    handleCardInput(event, maskNumber, cardNumber);
    inputCard.value = cardNumber.join("");
})

inputDate.addEventListener("keydown", event => {
    event.preventDefault();
    handleCardInput(event, maskDate, dateNumber);
    inputDate.value = dateNumber.join("");
})

inputCVV.addEventListener("keydown", event => {
    event.preventDefault();
    handleCardInput(event, maskCVV, cvvNumber);
    inputCVV.value = cvvNumber.join("");
})
//-------------------------------------------------------

function handleCardInput(event, str, arr) {
    if (event.key === "Backspace" && arr.length > 0) {
        arr.pop();
        return;
    }

    if( validValues.includes(event.key) && arr.length +1 <= str.length) {
        if(str[ arr.length ] == "-" || str[ arr.length ] == "/") {
            arr.push( str[arr.length] , event.key);
        } else {
            arr.push(event.key);
        }

    } else {
        event.preventDefault();
        return false;
    }
}


