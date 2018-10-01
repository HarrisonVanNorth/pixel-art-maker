const container = document.querySelector('.container')
const colorSelector = document.querySelector('.colorSelector')
const removeGrid = document.querySelector('.removeGrid')
const changeGrid = document.querySelector('.changeGrid')
var yourSelectedColor;

function canvisGrid(){
  for(let x = 0; x < (40); x++){
    let row = document.createElement('div');
    row.classList.add('row')
    row.style.height = "2.5%"
    row.style.width = "100%"
    row.style.display = "flex"
    for(let i = 0; i < (20);i++){
      let col = document.createElement('div');
      col.classList.add('px','border');
      col.style.margin = "0"
      col.style.height = "100%"
      col.style.width = "100%"
      row.appendChild(col)
    }
    container.appendChild(row)
  }
}
function colorPalet(){
  let color = ['red','orange','yellow','green', 'blue', 'purple', 'pink', 'black', 'white']
  for(let c = 0; c < color.length; c++){
    let colorWheel = document.createElement('button')
    colorWheel.classList.add('colorWheel')
    colorWheel.style.display = "flex"
    colorWheel.style.borderRadius = "50%"
    colorWheel.style.margin = "5% auto"
    colorWheel.style.width = "5%"
    colorWheel.style.height = "30%"
    colorWheel.style.backgroundColor = color[c]
    colorSelector.appendChild(colorWheel)
  }
}

canvisGrid()
colorPalet()

const pixel = document.querySelector('.px')
const pixelAll = document.querySelectorAll('.px')
const colorWheel = document.querySelectorAll('.colorWheel')

function selectColor(e){
  if(e.target.classList.contains('colorWheel')){
    yourSelectedColor = e.target.style.backgroundColor
  }
  for(let i = 0; i < colorWheel.length; i++){
    if(e.target.classList.contains('hilight')){
      colorWheel[i].classList.remove('hilight')
    }
     e.target.classList.add('hilight')
  }
}
function painter(e){
  if(e.target.classList.contains('px')){
    e.target.style.backgroundColor = yourSelectedColor
  }
}
function gridRemover(e){
  for( let i = 0; i < pixelAll.length; i++){
    pixelAll[i].classList.toggle('border')
  }
}
function promptGridChange(e){
  let prompt = prompt("Please enter your rows and colums", "rows,colums");
  if (prompt != null || ""){
  }
}

colorSelector.addEventListener('click', selectColor)
container.addEventListener('mouseover', painter)
removeGrid.addEventListener('click', gridRemover)
changeGrid.addEventListener('click', promptGridChange)
