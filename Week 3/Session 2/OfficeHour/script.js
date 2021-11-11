// global variables
let minuteButtons = document.getElementsByClassName("min-btn")
// console.log(minuteButtons)
let programButtons = document.getElementsByClassName("program-btn")

// how to put on each button an event listener?
for(let i = 0; i < minuteButtons.length; i++) {
    console.log(minuteButtons[i])
    let currentButton = minuteButtons[i]
    // minuteButtons[i].addEventListener
    currentButton.addEventListener("click", function() {
        console.log('triggering message')
        message(this)
    })
}

// make function for alert!
function message(element) {
    // 
    alert(`cooking for ${element.innerText} minutes`)
    console.log(element)
}

// call function from html using onclick and quotes around
// message()

// food buttons - what do we want it to do?
function foodButton(element){
    let name = element.innerText.toLowerCase()
    console.log(name)
    // [x] onclick alert
    alert(`${name} is cooking!`)
    // [] change the image in the #window to the image of the food
    let div = document.getElementById("window")
    // div.style.background = ""
    div.classList.remove("off")
    div.style.backgroundImage = `('./img/${name}.jpg')`;

}