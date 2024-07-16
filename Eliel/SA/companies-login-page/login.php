<?php
    include_once("../database/conexao.php");

    $login = $_POST["login"];
    $senha = $_POST["senha"];

    $sql = $conn -> prepare("SELECT id_empresa, nome_empresa, nome_de_usuario_empresa, cnpj_empresa, email_empresa, senha_empresa FROM empresa WHERE nome_de_usuario_empresa = ?"); //or select where email_empresa

    $sql -> execute([$login]);

    if($sql-> rowCount() == 1){
        $empresa = $sql -> fetch();
        if ($empresa['senha_empresa'] == MD5($senha)){
            session_start();
            $_SESSION['loggedin'] = true;
            $_SESSION['id_empresa'] = $empresa['id_empresa'] ;
            $_SESSION['nome'] = $empresa['nome_empresa'] ;
            header("location: ../landing-page/landing-page.php");
        
        }else{
            echo"Login ou senha inválidos";
        }
    }
    
    else{
        echo("Login ou senha inválidos");
    }

    unset($sql);
    unset($conn);
?>