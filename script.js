let moon = document.getElementById("moon")
let train = document.getElementById("train")
let text = document.getElementById("text")
let man = document.getElementById("man")
let desertmoon = document.getElementById("desert-moon")


window.addEventListener("scroll",()=>{
    let value = window.scrollY
    moon.style.top = value *.9 +"px"
    text.style.top = 80+value* -0.2+"%"
    train.style.left = value*1.5+"px"
    desertmoon.style.top = value*3+"px";
    man.style.left=value*.6+"px"
})