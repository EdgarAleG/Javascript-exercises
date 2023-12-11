const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const answer = document.getElementById("answer")
const btnCalulate = document.getElementById("calcular")

btnCalulate.addEventListener('click', calculate)

function calculate() {
    const option1 = parseFloat( n1.value )
    const option2 = parseFloat( n2.value )
    let ans = option1 + option2
    answer.innerText = ans

    answer.style = "color:red"
}

//----------------------------------------------
async function getData(){
    const response = await fetch('https://api.github.com/repos/hadley/ggplot2/commits')
    .then( response => response.json())
    .then( json => console.log(json) )
    .catch(error => console.log("solicitud fallida", error) )
}

getData()
