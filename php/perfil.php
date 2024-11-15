<?php
    include("config.php");

    //faz o conteúdo html aparecer na tela.
    $conteudo_perfil = file_get_contents(__DIR__ . '/../html/perfil.html');
    echo $conteudo_perfil;
?>