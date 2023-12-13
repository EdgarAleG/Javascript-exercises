const menuToggle = document.getElementById("menuToggle")
const navigation = document.getElementById("navigation")


menuToggle.onclick = function() {
    navigation.classList.toggle('open')
}

const itemList = document.querySelectorAll(".item")
function activateLink() {
    itemList.forEach( (item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
}
itemList.forEach( (item) => {
    item.addEventListener('click', activateLink)
})