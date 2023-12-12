const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach( (item) => {
    item.onclick= () => {
        if(item.id == "clear") {
            display.innerText = ""

        } else if(item.id == "backspace") {
            let str = display.innerText.toString()
            display.innerHTML = str.slice(0, str.length-1)

        } else if(display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText)

        } else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null"
            setTimeout( ()=> (display.innerText = ""), 2000)

        } else {
            display.innerText += item.id;

        }
    }
})

const btnThemeToggle = document.querySelector("#theme-toggler")
const btnIcon = document.querySelector(".toggler-icon")
const calculator = document.querySelector("#calculator")
const bgBody = document.querySelector(".bg--dark")
//const toggleIcon = document.querySelector(".togller-icon")
let isDark = true

btnThemeToggle.onclick = () => {
    calculator.classList.toggle("dark")
    btnThemeToggle.classList.toggle("active")
    bgBody.classList.toggle("bg--dark")
    if(isDark){
        btnIcon.innerHTML = `<i class='bx bxs-sun' ></i>`
    } else {
        btnIcon.innerHTML = `<i class='bx bxs-moon' ></i>`
    }
    isDark = !isDark
}
