// Función para cambiar el contenido de la parte derecha
function loadContent(section) {
    const contentArea = document.getElementById('contentArea');
    switch(section) {
        case 'perfil':
            contentArea.innerHTML = '<h3>Modificar Perfil</h3><p>Aquí puedes modificar tu perfil.</p>';
            break;
        case 'chatA':
            contentArea.innerHTML = '<h3>Chat Banco A</h3><p>Conversación con el Banco A.</p>';
            break;
        case 'chatB':
            contentArea.innerHTML = '<h3>Chat Banco B</h3><p>Conversación con el Banco B.</p>';
            break;
        case 'sitios':
            contentArea.innerHTML = '<h3>Sitios de Donación</h3><p>Lista de sitios donde puedes donar.</p>';
            break;
        case 'historial':
            contentArea.innerHTML = '<h3>Historial de Donaciones</h3><p>Aquí puedes ver tu historial de donaciones.</p>';
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