const changeButton = document.getElementById('change')
changeButton.addEventListener('click', function(){
    changeButton.innerText = 'Hello Everyone in button'
})


function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const redButton = document.getElementById("make-red");
redButton.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
// console.log(redButton);

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})

document.getElementById('blue').addEventListener('click',function (){
    document.body.style.backgroundColor = 'blue'
})

document.getElementById('gray').addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'gray'
})

document.getElementById('cyan').addEventListener('mousemove', function(){
    document.body.style.backgroundColor = 'cyan'
})

document.getElementById('orange').addEventListener('mouseout', function(){
    document.body.style.backgroundColor = 'orange'
})

document.getElementById('purple').addEventListener('wheel', function(){
    document.body.style.backgroundColor = 'purple'
})