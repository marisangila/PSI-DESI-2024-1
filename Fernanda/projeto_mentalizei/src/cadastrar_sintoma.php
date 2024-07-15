<?php

session_start();

$pdo = include_once("database.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $descricao = $_POST["sintoma_fisico"];
    $user_id = $_SESSION["user_id"];
    $data_manual = $_POST["data"];
    $hora_manual = $_POST["hora"];

    if($pdo){
        $stmt = $pdo -> prepare("INSERT INTO sintomas (descricao) VALUES (:descricao)");
        $stmt -> bindParam(":descricao", $descricao);
        $stmt -> execute();

        $id_sintoma = $pdo->lastInsertId();

        $stmt = $pdo -> prepare("INSERT INTO contas_sintomas (id_sintoma, data_registro, hora, id_conta) VALUES (:id_sintoma,:data_registro,:hora,:id_conta)");
        $stmt -> bindParam(":id_sintoma", $id_sintoma);
        
        if(!$data_manual){
            $data_manual = date('Y-m-d');
        }
        if(!$hora_manual){
            $hora_manual = date('H:i:s');
        }
        $stmt->bindParam(":data_registro", $data_manual);
        $stmt->bindParam(":hora", $hora_manual);
        $stmt -> bindParam(":id_conta", $user_id);
        $stmt->execute();
        $pdo = null;
        header("Location: ../pages/inicial.php"); 
        exit;

    } else {
        echo "Erro: Não foi possível conectar ao banco de dados.";
    }
}