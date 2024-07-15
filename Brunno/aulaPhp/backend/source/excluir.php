<?php
    include_once("conexao.php");

    $pk_usuario = $_GET["usuario"];
    $sql = $conn->prepare("DELETE FROM usuario WHERE pk_usuario=?");

    $sql->execute([$pk_usuario]);

    unset($sql);
    unset($conn);

    header("location:../pagina_inicial.php");
?>