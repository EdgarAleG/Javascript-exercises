const toggle = document.getElementById("toggle")
const btnToggle = document.getElementById("btn-toggle")
const body = document.getElementById("body")

btnToggle.onclick = () => {
    toggle.classList.toggle("active")
    body.classList.toggle("active")
}