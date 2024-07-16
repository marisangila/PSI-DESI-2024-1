<?php
    include_once("../database/conexao.php");
    include_once("show-company-data.php");

    $id_empresa = $_GET["empresa"];
    $sql = $conn->prepare("DELETE FROM empresa WHERE id_empresa=?");

    $sql->execute([$id_empresa]);

    session_destroy();

    unset($sql);
    unset($conn);

    header("location:../landing-page/landing-page.php");
?>