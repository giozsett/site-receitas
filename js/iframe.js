function ajustar_altura() {
    let iframe = document.getElementById('mainFrame');
    try {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
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

window.addEventListener('resize', ajustar_altura);
window.addEventListener('resize', ajustar_altura2);