<?php
 include("config.php");

 defined('CONTROLE') or die('Erro no acesso');

 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    /*não permite que os campos login e senha sejam nulo.*/
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;
    $msg_erro = null;

    /*mensagem de erro caso os campos não sejam preenchidos antes do envio.*/
    if (empty($email)||empty($senha)) {
        $msg_erro = "Você precisa preencher os campos de email e senha!";
    }

    if (empty($msg_erro)) {
        /*acessa as credenciais de usuário no arquivo externo.*/
        //$credenciais = require_once __DIR__ . $dados_login;
        $credenciais = json_decode(file_get_contents(__DIR__."/../dados/usuarios.json"), true);

        foreach($credenciais as $usuario){
            if($usuario['email'] == $email && $usuario['senha'] == $senha){
                /*login efetuado com sucesso.*/
                $_SESSION['email'] = $email;

                // volta para a página inicial
                header('location: index.php?pagina=menu');
            }
        }
        $msg_erro = "Credenciais inválidas! Tente novamente.";
        }
}
?>