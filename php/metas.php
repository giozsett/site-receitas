<?php
    include("config.php");

    //faz o conteúdo html aparecer na tela.
    $conteudo_metas = file_get_contents(__DIR__ . '/../html/metas.html');
    echo $conteudo_metas;
?>