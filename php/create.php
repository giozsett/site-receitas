<?php
include("config.php");

$dados = [];
if (file_exists($arq_dados)) {
    $dados_json = file_get_contents($arq_dados);
    $dados = json_decode($dados_json, true);
}

$email_existente = false;
$email_inserido = $_REQUEST["email"];

// Verificar se o e-mail já foi cadastrado
foreach ($dados as $usuario) {
    if ($usuario['email'] === $email_inserido) {
        $email_existente = true;
        break;
    }
}

if ($email_existente) {
    // Responde com erro se o email já existe
    echo json_encode(["erro" => "Esse email já foi cadastrado."]);
    exit;
}

// Continua com o cadastro caso o email não exista
$id = gera_id($dados);
function gera_id($dados)
 {
    $ids = array_column($dados, 'id');
    $id  = 0;
    if ( count($ids) > 0 ){
         $id  = max($ids);
    }
    $id++;
    return $id;
 }

$dados_usuario = [
    "id" => $id,
    "nome" => $_REQUEST["nome"],
    "sobrenome" => $_REQUEST["sobrenome"],
    "email" => $email_inserido,
    "senha" => $_REQUEST["senha"]
];

array_push($dados, $dados_usuario);
$dados_json = json_encode($dados);
file_put_contents($arq_dados, $dados_json);

// Responde com sucesso
echo json_encode(["sucesso" => "Usuário cadastrado com sucesso."]);
?>
