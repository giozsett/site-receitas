<?php
 include("config.php");
 defined('CONTROLE') or die('Erro no acesso');

 if ($_SERVER['REQUEST_METHOD'] == 'POST') 
 {
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;
    $msg_erro = null;

    $pagina_html = $login;
    echo $pagina_html;

 if (empty($nome)||empty('sobrenome')||empty($email)||empty($senha)) 
 {
    $msg_erro = "Você precisa preencher todos os campos!";
 }

 if (empty($msg_erro)) {
    $credenciais = json_decode(file_get_contents(__DIR__."/../dados/usuarios.json"), true);

    foreach($credenciais as $usuario){
        if($usuario['email'] == $email && $usuario['senha'] == $senha){
            $_SESSION['email'] = $email;

            header('location: index.php?pagina=home');
        }
    }
    $msg_erro = "Credenciais inválidas! Tente novamente.";
    }
}
?>