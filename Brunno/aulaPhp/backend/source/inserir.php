<?php
    include_once("conexao.php");

    $email = $_POST["email"];
    $senha = MD5($_POST["senha"]);

    $sql = $conn->prepare("INSERT INTO usuario (email_usuario, senha_usuario) values (?,?)");

    $sql->execute([$email,$senha]);

    unset($sql);
    unset($conn);

    header("location:../register.php");
?>