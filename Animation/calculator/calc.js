let buttons = document.querySelector(".buttons")
let btn = document.querySelectorAll("span")
let value = document.querySelector("#value")
let togglebg = document.querySelector(".togglebg");
let body = document.querySelector("body")

console.log(btn)
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function () {
        
        if (this.innerHTML === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML === "clear") {
                value.innerHTML = ""
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}
togglebg.onclick = function () {
    body.classList.toggle("dark")
}