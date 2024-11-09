<?php
include("config.php");

defined('CONTROLE') or die('Erro no acesso');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    session_start();
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;
    $msg_erro = null;

    if (empty($email) || empty($senha)) {
        echo json_encode(["erro" => "Você precisa preencher os campos de email e senha!"]);
        exit;
    }

    $credenciais = json_decode(file_get_contents(__DIR__ . "/../dados/usuarios.json"), true);
    $login_sucesso = false;

    foreach ($credenciais as $usuario) {
        if ($usuario['email'] == $email && $usuario['senha'] == $senha) {
            $_SESSION['email'] = $email;
            echo json_encode(["sucesso" => true]); // Indica sucesso no login
            $login_sucesso = true;
            exit;
        }
    }

    if (!$login_sucesso) {
        echo json_encode(["erro" => "Credenciais inválidas! Tente novamente."]);
    }
}
?>
