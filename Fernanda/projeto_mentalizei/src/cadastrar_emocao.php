<?php
session_start();

$pdo = include_once("database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_emocao = $_POST["radio-emocao"];

    if ($id_emocao > 0 && $id_emocao <= 6) { 
        $data_registro = date("Y-m-d H:i:s");
        $user_id = $_SESSION['user_id'];

        $stmt = $pdo->prepare("INSERT INTO contas_emocoes (id_conta, id_emocao, data_registro) VALUES (:id_conta, :id_emocao, :data_registro)");
        $stmt->bindParam(":id_conta", $user_id);
        $stmt->bindParam(":id_emocao", $id_emocao);
        $stmt->bindParam(":data_registro", $data_registro);
        $stmt->execute();

        unset($pdo);

        header("Location: ../pages/inicial.php");
        exit;
    } else {
        echo "Erro: Emoção inválida";
    }
}
?>