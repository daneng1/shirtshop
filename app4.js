function changeColor() {
    let color = document.getElementById('colorInputText').value;
    document.body.style.backgroundColor = color;

}
let button = document.getElementById('colorButton');
button.addEventListener("click",changeColor);