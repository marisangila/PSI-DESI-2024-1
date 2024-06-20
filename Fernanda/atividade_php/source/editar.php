<?php

    include_once("conexao.php");

    $id = $_GET["id"];
    $email = $_GET["e"];

    $sql = $con->prepare("UPDATE tbusuarios SET colEmail = ?, WHERE idUsuario = ?");
    $sql->execute([$email,$id]);

    unset($sql);
    unset($con);

    header("location: ../pages/inicial.php");

?>