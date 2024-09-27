// Función para cambiar el contenido de la parte derecha
function loadContent(section) {
    const contentArea = document.getElementById('contentArea');
    switch(section) {
        case 'perfil':
            contentArea.innerHTML = '<h3>Modificar Perfil</h3><p>Aquí puedes modificar tu perfil.</p>';
            break;
        case 'chatX':
            contentArea.innerHTML = '<h3>Chat Donante X</h3><p>Conversación con el Donante X.</p>';
            break;
        case 'chatY':
            contentArea.innerHTML = '<h3>Chat Donante Y</h3><p>Conversación con el Donante Y.</p>';
            break;
        case 'solicitar':
            contentArea.innerHTML = '<h3>Solicitar donante</h3><p>Aquí puedes filtrar y buscar donantes.</p>';
            break;
        case 'estadisticas':
            contentArea.innerHTML = '<h3>Estadísticas</h3><p>Estadísticas de cada tipo de sangre.</p>';
            break;
        case 'agregar_lote':
            contentArea.innerHTML = '<h3>Almacenamiento</h3><p>Agregar lote de sangre.</p>';
            break;
        case 'eliminar_lote':
            contentArea.innerHTML = '<h3>Almacenamiento</h3><p>Eliminar lote de sangre.</p>';
            break;
        default:
            contentArea.innerHTML = '<p>Bienvenido a la página de donantes.</p>';
            break;
    }
}

// Función para mostrar/ocultar el submenú
function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

function toggleSubmenu2() {
    const submenu = document.getElementById('submenu2');
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}