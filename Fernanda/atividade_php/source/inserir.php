<?php

    include_once("conexao.php");

    $email = $_POST["nmEmail"];
    $senha = MD5($_POST["nmSenha"]);

    $sql = $con->prepare("INSERT INTO tbusuarios (colEmail,colSenha) VALUES (?,?)");
    $sql->execute([$email,$senha]);

    unset($sql);
    unset($con);

    header("location:../index.php");
?>
