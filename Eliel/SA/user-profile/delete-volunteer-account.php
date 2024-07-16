<?php
    include_once("../database/conexao.php");
    include_once("show-user-data.php");

    $id_voluntario = $_GET["voluntario"];
    $sql = $conn->prepare("DELETE FROM voluntario WHERE id_voluntario=?");

    $sql->execute([$id_voluntario]);

    session_destroy();

    unset($sql);
    unset($conn);

    header("location:../landing-page/landing-page.php");
?>