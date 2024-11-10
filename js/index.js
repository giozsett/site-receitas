// Função para buscar grupos musculares e preencher o seletor
async function fetchgruposMusculares() {
    try {
        const response = await fetch('http://localhost:3000/muscle-groups');
        const data = await response.json();
        const gruposMuscularesSelect = document.getElementById('muscleGroup');
        
        data.gruposMusculares.forEach(group => {
            const option = document.createElement('option');
            option.value = group.id;
            option.textContent = group.name;
            gruposMuscularesSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao buscar grupos musculares:', error);
    }
}

// Função para buscar treinos para um grupo muscular selecionado
async function fetchWorkouts(muscleGroupId) {
    try {
        const response = await fetch(`http://localhost:3000/workouts?muscleGroupId=${muscleGroupId}`);
        const data = await response.json();
        const workoutList = document.getElementById('workoutList');
        
        // Limpa a lista antes de adicionar novos treinos
        workoutList.innerHTML = '';

        if (data.exercises.length > 0) {
            data.exercises.forEach(workout => {
                const workoutItem = document.createElement('div');
                workoutItem.className = 'workout-item';
                workoutItem.innerHTML = `
                    <h4>${workout.name}</h4>
                    <p>${workout.description}</p>
                    <p><strong>Duração:</strong> ${workout.duration}</p>
                `;
                workoutList.appendChild(workoutItem);
            });
        } else {
            workoutList.innerHTML = '<p>Nenhum treino disponível para este grupo muscular.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar treinos:', error);
    }
}

// Carregar grupos musculares no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    fetchgruposMusculares();

    // Adiciona evento ao botão para buscar treinos
    const fetchWorkoutsButton = document.getElementById('fetchWorkoutsButton');
    fetchWorkoutsButton.addEventListener('click', () => {
        const gruposMusculareselect = document.getElementById('muscleGroup');
        const selectedMuscleGroup = gruposMusculareselect.value;

        // Só buscar treinos se algum grupo muscular foi selecionado
        if (selectedMuscleGroup) {
            fetchWorkouts(selectedMuscleGroup);
        } else {
            alert("Por favor, selecione um grupo muscular.");
        }
    });
});
