console.log("you are my favorite human")
// variables: let, var, const
var num = 100;  //int
var bool = true; //boolean true/false
var string = "hey there" //semicolon is optional 
var decimal = 10.0;
console.log(num)
console.log(string)
let anotherNum = 99; //let

// objects
var arr = [1, 2, 3, 4, 5]
// starts at index 0
arr.push(7)
console.log(arr)
let person = {
    'age': 42,
    'height': "2 m" 
}
console.log(person.age)
console.log(person['age'])

// how do variables work with html?
// will grab from HTML directly
let element = document.getElementById("title")
console.log("element title", element.innerText)

// element.innerText = "Super Microwave"
// querySelector will search using CSS selector before grabbing from HTML
let anotherEl = document.querySelector("#title img")

// class?
let progButtons = document.getElementsByClassName("program-btn")
console.log(progButtons)

// operators
let num1 = 20
let num2 = 40
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 == num2) // 20 vs 40=> false
console.log(num1 === num2) // triple =
console.log(num1 != num2) // true
console.log(true === 1) // false because not the same datatype

// make function for alert!
function message(element) {
    // 
    alert(`cooking for ${element.innerText} minutes`)
    console.log(element)
}

// call function from html using onclick and quotes around
// message()