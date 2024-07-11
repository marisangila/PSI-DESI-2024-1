<?php
    include_once("database.php");

    $email = $_POST["email"];
    $usuario = $_POST["usuario"];
    $senha = MD5($_POST["senha"]);

    $nome = $_POST["name"];
    $dt_nasc = $_POST["nasc"];

    $sql = $pdo->prepare("INSERT INTO pessoas (nome, dt_nascimento) VALUES (?, ?)");
    $sql->execute([$nome, $dt_nasc]);

    $pessoaId = $pdo->lastInsertId();

    $sql = $pdo->prepare("INSERT INTO contas (email, usuario, senha, id_pessoa) VALUES (?, ?, ?, ?)");
    $sql->execute([$email, $usuario, $senha, $pessoaId]);

    unset($sql);
    unset($pdo);

    header("location:../index.php");
?>