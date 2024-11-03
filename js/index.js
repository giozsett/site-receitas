function ajustar_altura() {
    let iframe = document.getElementById('mainFrame');
    try {
        iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    } catch (error) {
        console.error('Erro ao ajustar altura do iframe:', error);
    }
}

function ajustar_altura2() {
    let iframe = document.getElementById('perfilFrame');
    try {
        iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    } catch (error) {
        console.error('Erro ao ajustar altura do iframe:', error);
    }
}

// Atualiza a altura periodicamente
setInterval(ajustar_altura, 500);
setInterval(ajustar_altura2, 500);

window.addEventListener('resize', ajustar_altura);
window.addEventListener('resize', ajustar_altura2);
