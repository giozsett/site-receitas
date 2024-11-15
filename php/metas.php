<?php
//session_start();
include("config.php");

$conteudo_metas = file_get_contents(__DIR__ . '/../html/metas.html');

// Verifica se o usuário está logado
$email_usuario = $_SESSION['email'] ?? null;
if ($email_usuario) {
    // Carrega o arquivo usuario_metas.json
    $arq_metas = __DIR__ . '/../dados/usuario_metas.json';
    $metas = file_exists($arq_metas) ? json_decode(file_get_contents($arq_metas), true) : [];
    
    // Encontra as metas do usuário
    $metas_usuario = [];
    foreach ($metas as $meta) {
        if ($meta['email'] === $email_usuario) {
            $metas_usuario = $meta;
            break;
        }
    }
    
    // Passa os dados de metas do usuário para o JavaScript
    echo "<script>var metasAnteriores = " . json_encode($metas_usuario) . ";</script>";
}

echo $conteudo_metas;


if ($_SERVER['REQUEST_METHOD'] === 'POST' && $email_usuario) {
    $nova_meta = [
        'email' => $email_usuario,
        'data' => $_POST['data_atual'] ?? '',
        'peso' => $_POST['peso_atual'] ?? '',
        'braco' => $_POST['braco_atual'] ?? '',
        'cintura' => $_POST['cintura_atual'] ?? '',
        'perna' => $_POST['perna_atual'] ?? ''
    ];

    // Carrega o arquivo usuario_metas.json
    $arq_metas = __DIR__ . '/../dados/usuario_metas.json';
    $metas = file_exists($arq_metas) ? json_decode(file_get_contents($arq_metas), true) : [];

    // Atualiza ou adiciona a meta do usuário
    $atualizado = false;
    foreach ($metas as &$meta) {
        if ($meta['email'] === $email_usuario) {
            $meta = $nova_meta;
            $atualizado = true;
            break;
        }
    }
    if (!$atualizado) {
        $metas[] = $nova_meta;
    }

    // Salva as metas atualizadas
    file_put_contents($arq_metas, json_encode($metas));
    echo "<div style='color:green;'>Metas atualizadas com sucesso!</div>";
}

?>
