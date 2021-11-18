// goal is to use the button click to switch image class
function changeThis() {
    let imgs = document.getElementsByClassName("show")
    console.log(imgs)
    for(let i = 0; i < imgs.length; i++) {
        if(imgs[i].classList.contains("show")) {
            imgs[i].classList.replace("show", "no-show")
        }
        if(imgs[i].classList.contains("see-through")) {
            imgs[i].classList.remove("see-through")
        }
    }
}