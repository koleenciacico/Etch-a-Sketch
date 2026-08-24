const parentElement = document.body;

const parentContainer = document.getElementById('parent-container');

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.className = 'gridDiv';
    parentContainer.appendChild(gridDiv);

    gridDiv.addEventListener('mouseover', (event) => {
      event.target.classList.add('hovered');
    });

    gridDiv.style.width = `${960 / size}px`;
    gridDiv.style.height = `${960 / size}px`;
  }
}
createGrid(16);

const askGrid = document.getElementById('new-grid-btn');
askGrid.addEventListener('click', () => {
  let numGrid = prompt('Change the number of grid you desire');
  let resize = parseInt(numGrid, 10);

  if (resize > 100 || resize <= 0 || isNaN(resize)) {
    alert('You enter invalid input');
  } else {
    parentContainer.innerHTML = '';
    createGrid(resize);
  }
});
