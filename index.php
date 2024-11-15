<?php
<<<<<<< HEAD
// Inicia a sessão
session_start();

// Cria uma constante para garantir que o código foi acessado pelo index
define('CONTROLE', true);

// Verifica se o usuário está logado
$login_ok = $_SESSION['email'] ?? null;

// Define a página inicial com base no estado de login
if (empty($login_ok)) {
    $pagina = $_GET['pagina'] ?? 'login'; // Padrão é a página de login
} else {
    $pagina = $_GET['pagina'] ?? 'home';  // Padrão é a página inicial do site
}

// Impede acesso à página de login caso o usuário já esteja logado
if (!empty($login_ok) && $pagina === 'login') {
    $pagina = 'home';
}

// Lista de páginas permitidas
$paginas = [
=======
  //inicia a sessão
  session_start();

 //cria uma constante p/ quando o código passar pelo index.
 define('CONTROLE', true);

 //se o login for bem sucedido, o usuário será direcionado para o menu.
 //já que sempre passará pelo index ao direcionar o usuário a uma nova
 //página, cria a variável que verifica se o usuário está logado.
 $login_ok = $_SESSION['email'] ?? null;

 //verificação das páginas, conferindo se está logado.
 if (empty($login_ok)) {
    $pagina = 'login';
 } else {
    $pagina = $_GET['pagina'] ?? 'home';
 }
 if (!empty($login_ok) && $pagina == 'login') {
    $pagina = 'home';
}

 //paginas para as quais o usuário será direcionado.
 $paginas = [
>>>>>>> 8acda3cf471dcebb5429cd8b2a8540ea91f3c665
    'login' => 'php/login.php',
    'cadastro' => 'php/cadastro.php',
    'home' => 'php/home.php',
    'deslogar' => 'php/deslogar.php',
    'metas' => 'php/metas.php',
    'imc' => 'php/imc.php',
    'treinos' => 'php/treinos.php',
    'receitas' => 'php/receitas.php',
    'perfil' => 'php/perfil.php'
];

// Verifica se a página solicitada existe no array
if (!array_key_exists($pagina, $paginas)) {
    die('Erro: Página não encontrada.'); // Mensagem de erro amigável
}

// Requer o arquivo correspondente à página solicitada
require_once $paginas[$pagina];
?>
