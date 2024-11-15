<?php
include("config.php");
defined('CONTROLE') or die('Erro no acesso');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$conteudo_pagina_metas = file_get_contents(__DIR__ . '/../html/metas.html');
echo $conteudo_pagina_metas;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Caminho para o arquivo de metas
    $arquivoMetas = __DIR__ . '/../dados/usuarios_metas.json';

    // Dados do formulário
    $dataAtual = $_POST['data_atual'] ?? '';
    $pesoAtual = $_POST['peso_atual'] ?? '';
    $bracoAtual = $_POST['braco_atual'] ?? '';
    $cinturaAtual = $_POST['cintura_atual'] ?? '';
    $pernaAtual = $_POST['perna_atual'] ?? '';

    // Ler conteúdo existente no arquivo
    $dadosMetas = [];
    if (file_exists($arquivoMetas)) {
        $conteudoAtual = file_get_contents($arquivoMetas);
        $dadosMetas = json_decode($conteudoAtual, true) ?? [];
    }

    $novaMeta = [
        'data' => $dataAtual,
        'peso' => $pesoAtual ?: null,
        'braco' => $bracoAtual ?: null,
        'cintura' => $cinturaAtual ?: null,
        'perna' => $pernaAtual ?: null,
    ];
    
    // Verifica se o ID já existe no JSON
    if (!isset($dadosMetas[$usuarioId])) {
        $dadosMetas[$usuarioId] = [];
    }
    
    // Adiciona as novas metas no array do usuário
    $dadosMetas[$usuarioId][] = $novaMeta;

    if (isset($_SESSION['usuario_id'])) {
        $usuarioId = $_SESSION['usuario_id'];
    } else {
        echo "Erro: Usuário não está logado.";
        exit();
    }

    $usuarioId = $_SESSION['usuario_id'];
    

    // Salvar os dados atualizados no JSON
    if (file_put_contents($arquivoMetas, json_encode($dadosMetas, JSON_PRETTY_PRINT)) !== false) {
        // Redirecionar para evitar reenvio do formulário
        header("Location: metas.php");
        exit();
    } else {
        echo "Erro ao salvar os dados.";
    }
}
?>


