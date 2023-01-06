const DEFAULT_WIDTH = 400
const DEFAULT_HEIGHT = 400
const size= document.getElementById('sizeSliders')
const rainbowCheck=document.getElementById('rainbow')

let gridheight,
    gridwidth


function createGrid(gridSize){
    const spbox= document.querySelector('#space-box')
    const row =document.createElement('d')
    gridheight= DEFAULT_HEIGHT/gridSize
    gridwidth= DEFAULT_WIDTH/gridSize

    for (let i=0 ; i < gridSize; i++){
        const row= document.createElement('div')
        row.classList.add('row')
        for (let j=0;j <gridSize;j++){            
            const box= document.createElement('div')
            box.classList.add('box')
            box.setAttribute('id', 'box'+j +'n'+ i)
            row.appendChild(box)
        }
        spbox.appendChild(row)
    }
    
    for (let i=0; i<gridSize;i++){
        for (let j=0;j <gridSize;j++){
            const selBox=document.getElementById('box' + i +'n'+ j)
            selBox.style.height =selBox.style.width= gridheight.toString() +'px'
            selBox.addEventListener('mouseover',  changeColor)
        } 
    }
}

function changeColor(e){
    if (rainbowCheck.checked==true){
        num1= Math.random()*255
        num2=Math.random()*255
        num3=Math.random()*255
        e.target.style.backgroundColor= 'rgb('+ num1 +','+num2+','+num3 +')'
    }
    else {
        e.target.style.backgroundColor= '#303030'
    }    // console.log(e)
}

size.addEventListener("input", function(){
    document.querySelectorAll('.box').forEach(el=>el.remove())
    createGrid(size.value)
    console.log(size.value) 
    document.querySelector('#gridVal').innerHTML=size.value
})

document.getElementById('clear').addEventListener('click', function(){
    document.querySelectorAll('.box').forEach(el=>el.remove())
    createGrid(size.value)
})

document.body.onload = createGrid(size.value);


