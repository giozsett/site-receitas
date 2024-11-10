const express = require('express');
const app = express();
const PORT = 3000;

// Dados de grupos musculares e exercícios
const muscleGroups = [
    { id: "1", name: "Bíceps" },
    { id: "2", name: "Tríceps" },
    { id: "3", name: "Ombro" },
    { id: "4", name: "Abdômen" },
    { id: "5", name: "Glúteo" }
];

const workouts = [
    { id: "1", muscleGroupId: "1", name: "Rosca Direta", description: "Exercício para bíceps", duration: "30 min" },
    { id: "2", muscleGroupId: "1", name: "Rosca Martelo", description: "Exercício para bíceps", duration: "25 min" },
    { id: "3", muscleGroupId: "1", name: "Rosca Concentrada", description: "Exercício para bíceps", duration: "20 min" },
    
    { id: "4", muscleGroupId: "2", name: "Tríceps Corda", description: "Exercício para tríceps", duration: "20 min" },
    { id: "5", muscleGroupId: "2", name: "Tríceps Testa", description: "Exercício para tríceps", duration: "25 min" },
    { id: "6", muscleGroupId: "2", name: "Tríceps Supino Fechado", description: "Exercício para tríceps", duration: "30 min" },
    
    { id: "7", muscleGroupId: "3", name: "Elevação Lateral", description: "Exercício para ombro", duration: "25 min" },
    { id: "8", muscleGroupId: "3", name: "Desenvolvimento com Halteres", description: "Exercício para ombro", duration: "30 min" },
    { id: "9", muscleGroupId: "3", name: "Desenvolvimento Militar", description: "Exercício para ombro", duration: "20 min" },
    
    { id: "10", muscleGroupId: "4", name: "Abdominal Supra", description: "Exercício para abdômen", duration: "15 min" },
    { id: "11", muscleGroupId: "4", name: "Abdominal Infra", description: "Exercício para abdômen", duration: "20 min" },
    { id: "12", muscleGroupId: "4", name: "Prancha", description: "Exercício para abdômen", duration: "10 min" },
    
    { id: "13", muscleGroupId: "5", name: "Agachamento Livre", description: "Exercício para glúteo", duration: "30 min" },
    { id: "14", muscleGroupId: "5", name: "Avanço com Halteres", description: "Exercício para glúteo", duration: "25 min" },
    { id: "15", muscleGroupId: "5", name: "Cadeira Abdutora", description: "Exercício para glúteo", duration: "20 min" },
    
    // Outros exercícios para mais variedade
    { id: "16", muscleGroupId: "1", name: "Crossover para Bíceps", description: "Exercício para bíceps", duration: "15 min" },
    { id: "17", muscleGroupId: "3", name: "Crucifixo Invertido", description: "Exercício para ombro posterior", duration: "25 min" },
    { id: "18", muscleGroupId: "2", name: "Mergulho no Banco", description: "Exercício para tríceps", duration: "20 min" },
    { id: "19", muscleGroupId: "4", name: "Abdominal Oblíquo", description: "Exercício para abdômen", duration: "15 min" },
    { id: "20", muscleGroupId: "5", name: "Elevação Pélvica", description: "Exercício para glúteo", duration: "20 min" }
];
