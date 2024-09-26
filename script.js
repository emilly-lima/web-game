const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let selectedCell = null;
let hoveredCell = null;

function draw() {
 // Desenha o tabuleiro de Sudoku
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 for (let i = 0; i < 9; i++) {
     ctx.beginPath();
     ctx.moveTo(i * 33, 0);
     ctx.lineTo(i * 33, 300);
     ctx.stroke();
     ctx.moveTo(0, i * 33);
     ctx.lineTo(300, i * 33);
     ctx.stroke();
     ctx.closePath();
 }
}

function drawHover() {
    if (hoveredCell) {
        const { row, col } = hoveredCell;
        ctx.fillStyle = 'rgba(0, 0, 255, 0.3)'; // Cor de fundo com transparência
        ctx.fillRect(col * 33, row * 33, 33, 33);
    }
}

function getCellCoordinates(x, y) {
    return {
        row: Math.floor(y / 33),
        col: Math.floor(x / 33)
    };
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    selectedCell = getCellCoordinates(x, y);
});

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    hoveredCell = getCellCoordinates(x, y);
    draw();
    drawHover();
});

document.addEventListener('keydown', (event) => {
    if (selectedCell && event.key >= '1' && event.key <= '9') {
        const { row, col } = selectedCell;
        ctx.font = '20px Arial';
        ctx.clearRect(col * 33 + 1, row * 33 + 1, 31, 31); // Limpa a célula antes de desenhar o número
        ctx.fillText(event.key, col * 33 + 10, row * 33 + 23);
        selectedCell = null; // Reseta a célula selecionada após a inserção do número
    }
});


draw();

