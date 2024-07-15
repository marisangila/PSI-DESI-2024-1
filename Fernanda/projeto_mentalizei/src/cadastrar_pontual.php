<?php
session_start();

$pdo = include_once("database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $descricao = $_POST["adc_pontual"]; 
    $id_tipo_med = $_POST["tipo_med"]; 
    $data = date("Y-m-d");
    $hora = date("H:i:s");
    $user_id = $_SESSION["user_id"]; 

    $data_manual = $_POST["data"];
    $hora_manual = $_POST["hora"];

    if ($pdo) { 
        $stmt = $pdo->prepare("INSERT INTO medicamentos_pontuais (descricao, id_tipo_med) VALUES (:descricao, :id_tipo_med)");
        $stmt->bindParam(":descricao", $descricao);
        $stmt->bindParam(":id_tipo_med", $id_tipo_med);
        $stmt->execute();

        $med_id = $pdo->lastInsertId();

        $stmt = $pdo->prepare("INSERT INTO contas_med_pontuais (id_conta, id_med_pontual, data_registro, horario) VALUES (:id_conta, :id_med_pontual, :data_registro, :horario)");
        $stmt->bindParam(":id_conta", $user_id);
        $stmt->bindParam(":id_med_pontual", $med_id);
        if($data_manual && $hora_manual == null){
            $stmt->bindParam(":data_registro", $data);
            $stmt->bindParam(":horario", $hora);
        }else{
            $stmt->bindParam(":data_registro", $data_manual);
            $stmt->bindParam(":horario", $hora_manual);
        }
        $stmt->execute();

        header("Location: ../pages/lista_med.php"); 
        exit;
    } else {
        echo "Erro: Não foi possível conectar ao banco de dados.";
    }
}