<?php
// Caminho para o arquivo HTML do formulário de cadastro
$pagina_cadastro = file_get_contents(__DIR__ . '/../html/cadastro.html');

// Exibe o conteúdo do HTML
echo $pagina_cadastro;

// Processamento do cadastro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $sobrenome = $_POST['sobrenome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = $_POST['senha'] ?? '';

    // Verifica se todos os campos estão preenchidos
    if (empty($nome) || empty($sobrenome) || empty($email) || empty($senha)) {
        echo "<div style='color:red;'>Por favor, preencha todos os campos.</div>";
        exit;
    }

    // Carrega o arquivo de dados JSON
    $arq_dados = __DIR__ . '/../data/usuarios.json';
    $dados = file_exists($arq_dados) ? json_decode(file_get_contents($arq_dados), true) : [];

    // Verifica se o email já está cadastrado
    foreach ($dados as $usuario) {
        if ($usuario['email'] === $email) {
            echo "<div style='color:red;'>Esse email já foi cadastrado.</div>";
            exit;
        }
    }

    // Gera um novo ID para o usuário
    $id = !empty($dados) ? max(array_column($dados, 'id')) + 1 : 1;

    // Adiciona o novo usuário
    $dados[] = [
        'id' => $id,
        'nome' => $nome,
        'sobrenome' => $sobrenome,
        'email' => $email,
        'senha' => $senha
    ];

    // Salva os dados atualizados no JSON
    file_put_contents($arq_dados, json_encode($dados));

    echo "<div style='color:green;'>Cadastro realizado com sucesso!</div>";
}
?>