<?php
    include_once("../database/conexao.php");

    $nome_voluntario = $_POST["nome_voluntario"];
    $nome_de_usuario_voluntario = $_POST["nome_de_usuario_voluntario"];
    $email_voluntario = $_POST["email_voluntario"];
    $senha_voluntario = MD5($_POST["senha_voluntario"]);
    $senha_confirmacao_voluntario = MD5($_POST["senha_confirmacao_voluntario"]);

    $sql = $conn -> prepare("INSERT INTO voluntario (nome_voluntario, nome_de_usuario_voluntario, email_voluntario, senha_voluntario) value (?, ?, ?, ?)");

    //verifica se a senha e a confirmação coincidem
    if($senha_voluntario === $senha_confirmacao_voluntario){
        $sql -> execute([$nome_voluntario, $nome_de_usuario_voluntario, $email_voluntario, $senha_voluntario]);
        echo '<div class="paragraph"> Voluntário cadastrado com sucesso! </div>';
        //colocar um timer
        header("location: ../login-page/login-page.html");
    } else {
        echo '<div class="paragraph"> As senhas não coincidem! </div>';
        //estilizar errinho >.<
        //colocar um timer
        header("location: ../register-page/register-page.php");
    }

    unset($sql);
    unset($conn);
?>