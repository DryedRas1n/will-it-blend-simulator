let selected = null;
const playArea = document.getElementById('playArea');
const elements = document.getElementById('elements');

const discovered = new Set(['Water', 'Fire', 'Earth', 'Air']); // Start with basics
const combinations = {}; // Loaded from elements.json

// Load combinations
fetch('elements.json')
  .then(res => res.json())
  .then(data => Object.assign(combinations, data));

// Render known elements
function renderElements() {
  elements.innerHTML = '';
  discovered.forEach(el => {
    const btn = document.createElement('button');
    btn.textContent = el;
    btn.draggable = true;
    btn.addEventListener('dragstart', e => {
      selected = el;
    });
    elements.appendChild(btn);
  });
}

renderElements();

// Drop on canvas
playArea.addEventListener('dragover', e => e.preventDefault());

playArea.addEventListener('drop', e => {
  const x = e.offsetX;
  const y = e.offsetY;
  const div = document.createElement('div');
  div.textContent = selected;
  div.className = 'item';
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.setAttribute('data-name', selected);
  div.addEventListener('click', tryMerge);
  playArea.appendChild(div);
});
