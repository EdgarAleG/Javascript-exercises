let btnToggle = document.getElementById("btn-toggle")
let container = document.getElementById("container")

btnToggle.onclick = function() {
    container.classList.toggle('active')
}