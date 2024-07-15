<?php
session_start();

$pdo = include_once("database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $descricao = $_POST["descricao"];
    $mg = $_POST["mg"];
    $horario = $_POST["horario"];
    $quantidade = $_POST["quantidade_dia"];
    $inicio = $_POST["date"];
    $tipo_med = $_POST["tipo_med"];
    $user_id = $_SESSION['user_id']; 

    if($pdo){
        $sql = $pdo->prepare("INSERT INTO medicamentos_continuos (descricao, mg, quantidade_dia, horario, dt_inicio, id_tipo_med) VALUES (:descricao,:mg,:quantidade_dia,:horario,:dt_inicio,:id_tipo_med)");
        $sql->bindParam(":descricao", $descricao);
        $sql->bindParam(":mg", $mg);
        $sql->bindParam(":quantidade_dia", $quantidade);
        $sql->bindParam(":horario", $horario);
        $sql->bindParam(":dt_inicio", $inicio);
        $sql->bindParam(":id_tipo_med", $tipo_med);
        $sql->execute();

        $med_id = $pdo->lastInsertId(); 

        $sql = $pdo->prepare("INSERT INTO contas_med_continuos (id_conta, id_med_continuo) VALUES (:id_conta,:id_med_continuo)");
        $sql->bindParam(":id_conta", $user_id);
        $sql->bindParam(":id_med_continuo", $med_id);
        $sql->execute();

        header("Location: ../pages/cadastrar_med.php"); 
        exit;
    } else {
        echo("Não foi possível se conectar com o banco!");
    }
}
?>