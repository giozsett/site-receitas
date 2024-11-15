document.addEventListener('DOMContentLoaded', function() {
    // Função para buscar os dados do JSON do servidor
    async function fetchMetasData() {
        try {
            const response = await fetch('/path/to/usuario_metas.json');
            if (!response.ok) throw new Error('Erro ao carregar dados de metas.');
            
            const metas = await response.json();
            //const userId = /* Código para obter o ID do usuário logado, ex: 1 */
            
            // Dados atuais do usuário
            const dadosAtuais = metas[userId];
            if (dadosAtuais) {
                // Preenche os campos com os dados anteriores
                document.querySelectorAll('.w3-result')[0].innerText = dadosAtuais.data;
                document.querySelectorAll('.w3-result')[1].innerText = dadosAtuais.peso + ' kg';
                document.querySelectorAll('.w3-result')[2].innerText = dadosAtuais.braco + ' cm';
                document.querySelectorAll('.w3-result')[3].innerText = dadosAtuais.cintura + ' cm';
                document.querySelectorAll('.w3-result')[4].innerText = dadosAtuais.perna + ' cm';

                // Calcula as diferenças, por exemplo: peso, braço, cintura e perna
                const pesoAnterior = dadosAtuais.peso ?? 0;
                const bracoAnterior = dadosAtuais.braco ?? 0;
                const cinturaAnterior = dadosAtuais.cintura ?? 0;
                const pernaAnterior = dadosAtuais.perna ?? 0;

                // Preenche as diferenças nos campos correspondentes
                document.querySelectorAll('.w1-result')[0].innerText = `${pesoAnterior} kg`;
                document.querySelectorAll('.w1-result')[1].innerText = `${bracoAnterior} cm`;
                document.querySelectorAll('.w1-result')[2].innerText = `${cinturaAnterior} cm`;
                document.querySelectorAll('.w1-result')[3].innerText = `${pernaAnterior} cm`;
            }
        } catch (error) {
            console.error(error);
            alert("Não foi possível carregar os dados de metas.");
        }
    }

    // Chama a função ao carregar a página
    fetchMetasData();
});
