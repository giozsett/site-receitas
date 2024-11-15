document.addEventListener("DOMContentLoaded", function () {
    fetch("usuarios_metas.json")
        .then(response => response.json())
        .then(data => {
            // Assumindo que você tem uma estrutura para exibir os dados anteriores
            // Exemplo: Último mês (wrapper1)
            document.querySelectorAll(".w1-result")[0].textContent = data.peso || "N/A";
            document.querySelectorAll(".w1-result")[1].textContent = data.braco || "N/A";
            document.querySelectorAll(".w1-result")[2].textContent = data.cintura || "N/A";
            document.querySelectorAll(".w1-result")[3].textContent = data.perna || "N/A";

            // Exemplo: Dados anteriores (wrapper3)
            document.querySelectorAll(".w3-result")[0].textContent = data.data || "N/A";
            document.querySelectorAll(".w3-result")[1].textContent = data.peso || "N/A";
            document.querySelectorAll(".w3-result")[2].textContent = data.braco || "N/A";
            document.querySelectorAll(".w3-result")[3].textContent = data.cintura || "N/A";
            document.querySelectorAll(".w3-result")[4].textContent = data.perna || "N/A";
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});


