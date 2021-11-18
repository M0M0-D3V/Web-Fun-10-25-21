let url = `https://dog.ceo/api/breed`
let infoHere = document.getElementById("info-here")
// let infoHere = document.querySelector("#info-here")
let h3 = document.getElementById("h3")

// make function getInfo
async function getInfo() {
    // how can we include the breed from select to the url?
    let breed = document.getElementById("breed").value
    let number = document.getElementById("num-doges").value
    console.log(number)
    if (breed == "russell") {
        breed = "terrier/russell"
    }
    let response = await fetch(`${url}/${breed}/images`)
    let info = await response.json()
    for(let i = 0; i < parseInt(number); i++) {
        // this printed the src string for each img
        let imgLoc = info['message'][i]
        // console.log(imgLoc)
        // // add each image to the infoHere
        // infoHere.innerHTML += `<img src="${imgLoc}" alt="doge">`

        // other way of creating images
        let newImg = document.createElement("img")
        newImg.src = imgLoc
        infoHere.insertBefore(newImg, h3)
        infoHere.append(newImg)
        // append() => push()
        // remove() => pop()
        // [1, 2, 3, 4, 5 ] <- push will add to the back while pop will remove it from the back
    }

    // info['message'][0]
    // message: Array[]
}




// resources
// Begin test case [ 1 ] : Existing childElement (all works correctly)
// let sp2 = document.getElementById("childElement")
// parentDiv.insertBefore(newNode, sp2)
// End test case [ 1 ]