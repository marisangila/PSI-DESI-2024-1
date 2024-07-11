<?php
include_once("database.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id'])) {
    $id_med_pontual = $_POST['id'];
    $descricao = $_POST["descricao"];
    $id_tipo_med = $_POST["tipo_med"];

    $sql = $pdo->prepare("UPDATE medicamentos_pontuais SET descricao = :descricao, 
    id_tipo_med = :id_tipo_med 
    WHERE id_med_pontual = :id_med_pontual");
    $sql->bindParam(":descricao", $descricao);
    $sql->bindParam(":id_tipo_med", $id_tipo_med, PDO::PARAM_INT);
    $sql->bindParam(":id_med_pontual", $id_med_pontual, PDO::PARAM_INT);

    if ($sql->execute()) {
        echo "Dados alterados com sucesso!";
    } else {
        echo "Erro ao atualizar os dados.";
    }
} else {
    echo "Formulário inválido ou campos ausentes!";
}