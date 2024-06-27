// Lista de compras - adicione os itens aqui
const listaDeCompras = [
    "Arroz",
    "Feijão",
    "Açúcar",
    "Café",
    // adicione mais itens conforme necessário
];

document.addEventListener("DOMContentLoaded", function() {
    const listaComprasDiv = document.getElementById('lista-compras');
    
    listaDeCompras.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        const itemName = document.createElement('h2');
        itemName.textContent = item;
        itemDiv.appendChild(itemName);
        
        const img = document.createElement('img');
        img.alt = item;
        img.src = ''; // Placeholder for image
        itemDiv.appendChild(img);
        
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.accept = 'image/*';
        inputFile.capture = 'camera';  // Adicionado para permitir acesso à câmera
        inputFile.addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
        itemDiv.appendChild(inputFile);
        
        listaComprasDiv.appendChild(itemDiv);
    });
});