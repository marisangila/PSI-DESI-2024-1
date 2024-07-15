<?php

    date_default_timezone_set('America/Sao_Paulo');
    
    try
    {
        $con = new PDO("mysql:dbname=aulamaria;host=localhost;charset=utf8","root","");
    }
    catch(PDOException $erro)
    {
        echo("ERRO NA CONEXÃO: <br>".$erro->getMessage());
    }

?>