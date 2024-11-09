<?php
    include("config.php");

    /*faz o conteúdo html aparecer na tela.*/
    $pagina_html = file_get_contents($treinos);
    echo $pagina_html;
?>