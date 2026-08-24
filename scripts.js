const parentContainer = document.getElementById('parent-container');

for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.className = 'gridDiv';
  parentContainer.appendChild(gridDiv);
}
