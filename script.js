let container = document.getElementById('container')
let gridSelection = document.querySelector('#grid_selection');
let inputSlider = document.querySelector('#grid_slider');
gridSelection.textContent = `${inputSlider.value} X ${inputSlider.value}`;

// let gridNumber = document.querySelector('#grid_selection').textContent
createGrid(1)

function createGrid(multiplier) {
  let area = multiplier ** 2;
  for (let i = 1; i <= area; i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid');
    container.style.gridTemplateColumns = `repeat(${multiplier}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${multiplier}, 1fr)`;
    container.insertAdjacentElement('beforeend', cell);
  }
  changeGridColor();
}



function changeGridColor() {
  let cells = document.querySelectorAll('.grid');
  cells.forEach(square => {
    square.addEventListener('mouseover', (e) => {
      let randomRGB1 = Math.floor(Math.random() * 255) + 1;
      let randomRGB2 = Math.floor(Math.random() * 255) + 1;
      let randomRGB3 = Math.floor(Math.random() * 255) + 1;
      e.target.style.backgroundColor = `rgb(48, 47, 47)`;
      console.log(e.target.style.backgroundColor);
    })
  })
}

function deleteCells() {
  let container = document.getElementById('container');
  container.innerHTML = ""
}

function changeGridSize() {
  let gridSlider = document.querySelector('#grid_slider');
  gridSlider.addEventListener('input', () => {
    gridSelection.textContent = `${gridSlider.value} X ${gridSlider.value}`;
    deleteCells();
    createGrid(gridSlider.valueAsNumber);
  });

}

changeGridSize()

function shakeAndClear() {

}

// e.target.style.backgroundColor = `rgb(${randomRGB1}, ${randomRGB2}, ${randomRGB3})`;