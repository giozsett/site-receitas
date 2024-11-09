<?php
    include("config.php");

    /*faz o conteúdo html aparecer na tela.*/
    $pagina_html = file_get_contents($receitas);
    echo $pagina_html;
?>