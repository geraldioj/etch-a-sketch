const DEFAULT_WIDTH = 240
const DEFAULT_HEIGHT = 240
let gridheight,
    gridwidth


function createGrid(gridSize=40){
    const main= document.querySelector('#main')
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
        main.appendChild(row)
    }
    
    for (let i=0; i<gridSize;i++){
        for (let j=0;j <gridSize;j++){
            const selBox=document.getElementById('box' + i +'n'+ j)
            selBox.style.height =selBox.style.width= gridheight.toString() +'px'
            selBox.addEventListener('mousemove',  changeColor)
        } 
    }
}

function changeColor(e){
    e.target.style.backgroundColor='rgb(12,12,12)' 
}

document.body.onload = createGrid();


