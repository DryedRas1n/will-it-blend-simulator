let selected = null;
const playArea = document.getElementById('playArea');
const elements = document.getElementById('elements');

const discovered = new Set(['Water', 'Fire', 'Earth', 'Air']); // Start with basics
const combinations = {}; // Loaded from elements.json
let mergeBuffer = [];

// Load combinations from elements.json
fetch('elements.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(combinations, data);
    renderElements();
  })
  .catch(err => console.error('Error loading combinations:', err));

// Render known elements
function renderElements() {
  elements.innerHTML = ''; // Clear the elements container
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

// Drag and Drop
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

// Merging Logic
function tryMerge(e) {
  const el = e.target;
  mergeBuffer.push(el);
  el.classList.add('selected');

  if (mergeBuffer.length === 2) {
    const name1 = mergeBuffer[0].dataset.name;
    const name2 = mergeBuffer[1].dataset.name;
    const key = name1 + '+' + name2;
    const reverseKey = name2 + '+' + name1;

    let result = combinations[key] || combinations[reverseKey];

    if (result && !discovered.has(result)) {
      discovered.add(result);
      alert(`New element discovered: ${result}`);
      renderElements();
    }

    mergeBuffer.forEach(item => item.classList.remove('selected'));
    mergeBuffer = [];
  }
}
