
let colorName = document.getElementById('color'),
    background = document.getElementById('home'),
    colors = ['red', 'green', 'brown', 'gray', 'black', 'purple', 'pink', 'orange', 'blue' ]

simpleColor = ()=>{
    var randColor = colors[Math.floor(Math.random()*colors.length)]
    // console.log(randColor)
    colorName.innerText = randColor;
    background.style.backgroundColor = randColor;
    colorName.style.color = randColor;
}