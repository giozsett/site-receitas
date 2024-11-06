<?php
 include("config.php");

 $dados = [];
 if (file_exists($arq_dados)){
   $dados_json = file_get_contents($arq_dados);
   $dados = json_decode($dados_json, true);
 }

 $id = gera_id($dados);
 function gera_id($dados)
 {
    $ids = array_column($dados, 'id');
    $id  = 0;
    if ( count($ids) > 0 ){
         $id  = max($ids);
    }
    $id++;
    return $id;
 }

 $dados_usuario = [];
 $dados_usuario["id"] = $id;
 $dados_usuario["nome"] = $_REQUEST["nome"];
 $dados_usuario["sobrenome"] = $_REQUEST["sobrenome"];
 $dados_usuario["email"] = $_REQUEST["email"];
 $dados_usuario["senha"] = $_REQUEST["senha"];

 array_push($dados, $dados_usuario);
 $dados_json = json_encode($dados);
 file_put_contents($arq_dados, $dados_json);

 header("Location: lista-usuarios.php"); /* CONFERIR */

?>