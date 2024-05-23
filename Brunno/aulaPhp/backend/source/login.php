<?php
    include_once("conexao.php");

    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql = $conn->prepare("SELECT pk_usuario, email_usuario, senha_usuario, adm_role FROM usuario WHERE email_usuario = ?");

    $sql->execute([$email]);

    if($sql->rowCount() == 1){
        $usuario = $sql->fetch();
        if ($usuario['senha_usuario'] == MD5($senha)){
            session_start();
            $_SESSION["adm_role"] = $usuario['adm_role'];
            $_SESSION['loggedin'] = true;
            header("location:../pagina_inicial.php");
        }else{
            echo("E-mail ou senha inválidos!");
        }
    }else{
        echo("E-mail ou senha inválidos!");
    }

    unset($sql);
    unset($conn);
?>