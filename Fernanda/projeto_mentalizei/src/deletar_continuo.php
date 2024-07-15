<?php
include_once("database.php");

if(isset($_GET['id'])) {
    $id_med_continuo = (int) $_GET['id'];

    $sql1 = $pdo->prepare("DELETE FROM contas_med_continuos WHERE id_med_continuo=?");
    $sql1->bindParam(1, $id_med_continuo);
    $sql1->execute();
    
    $sql2 = $pdo->prepare("DELETE FROM medicamentos_continuos WHERE id_med_continuo=?");
    $sql2->bindParam(1, $id_med_continuo);
    $sql2->execute();
    
    header("Location: ../pages/lista_med.php");
    exit;
}