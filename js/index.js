function ajustar_altura() {
    var iframe = document.getElementById('mainFrame');
    try {
        iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    } catch (error) {
        console.error('Erro ao ajustar altura do iframe:', error);
    }
}

// Atualiza a altura periodicamente
setInterval(ajustar_altura, 500);

window.addEventListener('resize', ajustar_altura);
