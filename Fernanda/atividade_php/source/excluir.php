<?php

    include_once("conexao.php");

    $id = $_GET["id"];

    $sql = $con->prepare("DELETE FROM tbusuarios WHERE idUsuario = ?");
    $sql->execute([$id]);

    unset($sql);
    unset($con);

    header("location: ../pages/inicial.php");
    
?>