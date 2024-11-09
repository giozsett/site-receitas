<?php
  /*inicia a sessão*/
  session_start();

 /*cria uma constante p/ quando o código passar pelo index.*/
 define('CONTROLE', true);

 /*
 se o login for bem sucedido, o usuário será direcionado para o menu.
 já que sempre passará pelo index ao direcionar o usuário a uma nova
 página, cria a variável que verifica se o usuário está logado.
 */
 $login_ok = $_SESSION['email'] ?? null;

 /*verificação das páginas, conferindo se está logado.*/
 if (empty($login_ok)) {
    $pagina = 'login';
 } else {
    $pagina = $_GET['pagina'] ?? 'menu';
 }
 if (!empty($login_ok) && $pagina == 'login') {
    $pagina = 'menu';
}

 /*paginas para as quais o usuário será direcionado.*/
 $paginas = [
    'login' => 'php/login.php',
    'menu' => 'php/menu.php',
    'deslogar' => 'php/deslogar.php',
    'metas' => 'php/metas.php',
    'imc' => 'php/imc.php',
    'treinos' => 'php/treinos.php',
    'receitas' => 'php/receitas.php',
    'perfil' => 'php/perfil.php'
 ];

 if (!array_key_exists($pagina, $paginas)){
    die('Erro no acesso');
 }
 require_once $paginas[$pagina];
?>