function agregarLote() {
    const codigoLote = document.getElementById('codigoLote').value;
    const resultado = document.getElementById('resultado');

    if (codigoLote.trim() === "") {
        resultado.textContent = "Por favor, ingresa un código válido.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `El lote con código "${codigoLote}" ha sido agregado correctamente.`;
        resultado.style.color = "green";
        document.getElementById('codigoLote').value = "";  // Limpiar el campo de entrada
    }
}
