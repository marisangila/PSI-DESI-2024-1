<?php
include_once("database.php");

if(isset($_GET['id'])) {
    $id_med_pontual = $_GET['id'];
    
    $sql = $pdo -> prepare("DELETE FROM contas_med_pontuais WHERE id_med_pontual=?");
    if(!$sql){
        die("Erro!");
    }
    $sql -> bindParam(1, $id_med_pontual);
    $sql -> execute();

    $sql = $pdo -> prepare("DELETE FROM medicamentos_pontuais WHERE id_med_pontual=?");
    if(!$sql){
        die("Erro!");
    }
    $sql -> bindParam(1, $id_med_pontual);
    $sql -> execute();

    header("Location: ../pages/lista_med.php"); 
    exit;
}
?>