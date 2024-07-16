<?php
    include_once("../database/conexao.php");

    $login = $_POST["login"];
    $senha = $_POST["senha"];

    $sql = $conn -> prepare("SELECT id_voluntario, nome_voluntario, nome_de_usuario_voluntario, email_voluntario, senha_voluntario FROM voluntario WHERE nome_de_usuario_voluntario = ?"); //or select where email_empresa

    $sql -> execute([$login]);

    if($sql-> rowCount() == 1){
        $voluntario = $sql -> fetch();
        if ($voluntario['senha_voluntario'] == MD5($senha)){
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['id_voluntario'] = $voluntario['id_voluntario'] ;
            $_SESSION['nome'] = $voluntario['nome_voluntario'] ;
            header("location: ../landing-page/landing-page.php");
        } else{
            echo("Login ou senha inválidos");
        }
    } else{
        echo("Login ou senha inválidos");
    }

    unset($sql);
    unset($conn);
?>