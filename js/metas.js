document.addEventListener("DOMContentLoaded", () => {
    // URL do arquivo JSON (ajuste conforme o caminho correto)
    const urlMetas = "../dados/usuarios_metas.json";

    // Email do usuário logado (simulado pela sessão no servidor, deve ser retornado no HTML ou via API)
    const emailUsuario = document.body.dataset.email; // Supondo que o email venha do PHP como atributo no body

    if (!emailUsuario) {
        console.error("Erro: Email do usuário não encontrado na sessão.");
        return;
    }

    // Função para buscar os dados do JSON
    fetch(urlMetas)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo JSON.");
            }
            return response.json();
        })
        .then(dados => {
            if (!dados[emailUsuario]) {
                console.warn("Nenhum dado encontrado para o usuário:", emailUsuario);
                return;
            }

            // Obtem o último registro do usuário
            const metasUsuario = dados[emailUsuario];
            const ultimaMeta = metasUsuario[metasUsuario.length - 1];

            // Preenche os campos de w1-result
            const w1Elements = document.querySelectorAll(".w1-result");
            w1Elements[0].textContent = ultimaMeta.peso || "N/A";
            w1Elements[1].textContent = ultimaMeta.braco || "N/A";
            w1Elements[2].textContent = ultimaMeta.cintura || "N/A";
            w1Elements[3].textContent = ultimaMeta.perna || "N/A";

            // Preenche os campos de w3-result
            const w3Elements = document.querySelectorAll(".w3-result");
            w3Elements[0].textContent = ultimaMeta.data || "N/A";
            w3Elements[1].textContent = ultimaMeta.peso || "N/A";
            w3Elements[2].textContent = ultimaMeta.braco || "N/A";
            w3Elements[3].textContent = ultimaMeta.cintura || "N/A";
            w3Elements[4].textContent = ultimaMeta.perna || "N/A";
        })
        .catch(error => {
            console.error("Erro ao processar os dados:", error);
        });
});



