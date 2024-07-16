<?php
    include_once('../database/conexao.php');
    include_once('show-user-data.php');

    $nome_voluntario = $_POST["nome_voluntario"];
    $nome_de_usuario_voluntario =$_POST["nome_de_usuario_voluntario"];
    $email_voluntario = $_POST["email_voluntario"];
    $senha_voluntario = $_POST["senha_voluntario"];
    $id_voluntario = $_GET["voluntario"];

    $sql = $conn->prepare("UPDATE voluntario SET nome_voluntario = ?, nome_de_usuario_voluntario = ?, email_voluntario = ?, senha_voluntario = ? WHERE id_voluntario = ?;");
    $sql -> execute([$nome_voluntario, $nome_de_usuario_voluntario, $email_voluntario, md5($senha_voluntario), $id_voluntario]);

    unset($sql);
    unset($conn);

    echo '<p> Alterações salvas com sucesso! <p>';
   header("location: ../user-profile/user-profile.php");
?>