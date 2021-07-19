let colorName = document.getElementById('color'),
    background = document.getElementById('home');

function generate(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorName.innerText = `#${randomColor}`;
    background.style.backgroundColor = `${colorName.innerText}`
    colorName.style.color = `${colorName.innerText}`
}
