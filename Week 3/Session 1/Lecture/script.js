console.log('hello my favorite human')
let classNumber = document.getElementById("classNumber")
// give the entire span html tag
let num = 0

// console.log(classNumber)
// join button to add 1 to classNumber
function addClass() {
    num++   // ++ is syntax to add 1
    classNumber.innerText = num

    // innerText is the text inside the span html
}

function addLike(name) {
    console.log(name)
    let number = document.getElementById(name)
    number.innerText++
}
function showJason(element) {
    element.src="./images/jason.png"
}
function showKakashi(element) {
    element.src="./images/sensei.jpg"
}
function showAaron(element) {
    element.src="./image/aaron.png"
}
function showDevon(element) {
    element.src="./images/devon.png"
}
function showMonica(element) {
    element.src="./images/monica.png"
}