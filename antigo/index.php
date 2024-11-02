<?php
 /*inicia a sessão*/
 session_start();
 
 /*variável de controle*/
 define('CONTROLE', true);

 $login_ok = $_SESSION['email'] ?? null;

 if (empty($login_ok)) 
 {
    $pagina = 'login';
 } else 
 {
    $pagina = $_GET['pagina'] ?? 'home';
 }
 if (!empty($login_ok) && $pagina == 'login') {
    $pagina = 'menu';
}

$paginas = [
    'login' => 'php/login.php',
    'home' => 'php/home.php',
    'deslogar' => 'php/deslogar.php'
 ];

 if (!array_key_exists($pagina, $paginas)){
    die('Erro no acesso');
 }
 require_once $paginas[$pagina];
?>