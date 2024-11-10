const express = require('express');
const app = express();
const PORT = 3001; // Porta diferente para a API de receitas

// Dados de receitas fit
const recipes = [
    // Receitas para Café da Manhã
    { id: "1", type: "Café da manhã", name: "Smoothie de Aveia e Banana", description: "Uma mistura de aveia, banana e leite de amêndoas.", calories: 200 },
    { id: "2", type: "Café da manhã", name: "Panquecas de Aveia", description: "Panquecas de aveia com mel e frutas vermelhas.", calories: 250 },
    { id: "3", type: "Café da manhã", name: "Omelete de Espinafre", description: "Omelete feita com espinafre, cogumelos e queijo cottage.", calories: 220 },

    // Receitas para Almoço
    { id: "4", type: "Almoço", name: "Salada de Grão de Bico", description: "Grão de bico, legumes frescos e temperos leves.", calories: 300 },
    { id: "5", type: "Almoço", name: "Quinoa com Legumes Assados", description: "Quinoa acompanhada de legumes assados como abóbora, cenoura e abobrinha.", calories: 350 },
    { id: "6", type: "Almoço", name: "Filé de Peixe Grelhado", description: "Filé de peixe grelhado com arroz integral e legumes.", calories: 400 },

    // Receitas para Lanche
    { id: "7", type: "Lanche", name: "Iogurte com Frutas e Granola", description: "Iogurte natural com frutas vermelhas e granola.", calories: 150 },
    { id: "8", type: "Lanche", name: "Wrap de Frango com Abacate", description: "Wrap de frango desfiado, abacate, alface e tomate.", calories: 250 },
    { id: "9", type: "Lanche", name: "Barrinhas de Cereal Caseiras", description: "Barrinhas de cereal com aveia, mel e amendoim.", calories: 200 },

    // Receitas para Jantar
    { id: "10", type: "Jantar", name: "Frango Grelhado com Brócolis", description: "Filé de frango grelhado com brócolis cozidos.", calories: 350 },
    { id: "11", type: "Jantar", name: "Salmão ao Forno com Aspargos", description: "Salmão assado no forno com molho de limão e aspargos.", calories: 400 },
    { id: "12", type: "Jantar", name: "Sopa de Abóbora", description: "Sopa cremosa de abóbora com gengibre e cebola.", calories: 180 },

    // Receitas para Pré-treino
    { id: "13", type: "Pré-treino", name: "Banana com Pasta de Amendoim", description: "Banana com uma colher de pasta de amendoim.", calories: 180 },
    { id: "14", type: "Pré-treino", name: "Aveia com Mel e Frutas", description: "Aveia cozida com mel e frutas picadas.", calories: 220 },
    { id: "15", type: "Pré-treino", name: "Sanduíche de Pão Integral com Atum", description: "Pão integral com atum, alface e tomate.", calories: 250 }
];


// Endpoint para obter receitas com base no tipo de refeição
app.get('/recipes', (req, res) => {
    const { type } = req.query;
    const filteredRecipes = recipes.filter(recipe => recipe.type === type);
    res.json({ recipes: filteredRecipes });
});

app.listen(PORT, () => {
    console.log(`Recipes API server running at http://localhost:${PORT}`);
});
