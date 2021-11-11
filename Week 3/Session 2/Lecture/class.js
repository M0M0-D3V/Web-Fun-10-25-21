console.log("hello")
// fireEmblemClasses embed via html
// global variables at the top
let divClasses = document.getElementById("classes")
let divFilters = document.getElementById("filters")

// DRY - Don't Repeat Yourself
function showNames() {
    for(let i = 0; fireEmblemClasses.length; i++) {
        // one way to insert HTML to JS
        let child = document.createElement("div")
        child.classList.add("class") 
        // <div class="class">class name here</div>
        child.innerText = fireEmblemClasses[i]["Class Name"]
        divClasses.append(child)
    }
}
// 
function refresh() {
    divClasses.innerHTML = ""
}

function filterClasses(event) {
    event.preventDefault()
    let name = document.getElementById("inputName").value
    // console.log(name)
    for(i = 0; i < fireEmblemClasses.length; i++) {
        let thisClass = fireEmblemClasses[i]["Class Name"].toLowerCase()
        if(thisClass.includes(name)) {
            // one way to insert HTML using JS
            divFilters.innerHTML += `
                <div class="filter">
                <h3>${thisClass}</h3>
                </div>
            `
        }
    }
}