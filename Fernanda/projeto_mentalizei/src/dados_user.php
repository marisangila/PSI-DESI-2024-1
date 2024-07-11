<?php
    include_once("database.php");

    session_start(); 

    if (isset($_SESSION['username'])) {
        $username = $_SESSION['username'];
        $sql = $pdo->prepare("SELECT p.nome, p.dt_nascimento, c.email, c.usuario FROM pessoas p INNER JOIN contas c ON p.id_pessoa = c.id_pessoa WHERE c.usuario = ?");
        $sql->execute([$username]);
        $user = $sql->fetch();
        return $user;
    } else {
        return array('nome' => 'unknown_user', 'email' => '', 'dt_nascimento' => '');
    }