<?php
    include_once('../database/conexao.php');
    include_once('show-company-data.php');

    $nome_empresa = $_POST["nome_empresa"];
    $nome_de_usuario_empresa =$_POST["nome_de_usuario_empresa"];
    $cnpj_empresa = $_POST["cnpj_empresa"];
    $email_empresa = $_POST["email_empresa"];
    $senha_empresa = $_POST["senha_empresa"];
    $id_empresa = $_GET["empresa"];

    $sql = $conn->prepare("UPDATE empresa SET nome_empresa = ?, nome_de_usuario_empresa = ?, cnpj_empresa = ?, email_empresa = ?, senha_empresa = ? WHERE id_empresa = ?;");
    $sql -> execute([$nome_empresa, $nome_de_usuario_empresa, $cnpj_empresa, $email_empresa, md5($senha_empresa), $id_empresa]);

    unset($sql);
    unset($conn);

    echo '<p> Alterações salvas com sucesso! <p>';
   header("location: ../company-profile/company-profile.php");
?>