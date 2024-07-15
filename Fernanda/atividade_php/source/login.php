<?php

    include_once("conexao.php");

    $email = $_POST["nmEmail"];
    $senha = MD5($_POST["nmSenha"]);

    $sql = $con -> prepare("SELECT idUsuario,colEmail,colSenha,colAdmin FROM tbusuarios WHERE colEmail = ?");
    $sql -> execute([$email]);

    if($sql->RowCount() == 1)
    {
        $usuario = $sql -> fetch();
        if ($usuario['colSenha'] == $senha)
        {
            session_start();
            $_SESSION["adm"] = $usuario['colAdmin'];
            $_SESSION["loggedin"] = true;
            header("location:../pages/inicial.php");
        } else
        {
            echo ("Usuário ou senha inválidos!");
            header("location:../index.php");
        }
    } else
    {
        echo ("Usuário ou senha inválidos!");
        header("location:../index.php");
    }
?>