<?php
include_once("database.php");

if (isset($_GET['id'])) {
    $id_med_pontual = $_GET['id'];

    $stmt = $pdo->prepare("SELECT descricao, id_tipo_med FROM medicamentos_pontuais WHERE id_med_pontual = ?");
    $stmt->bindParam(1, $id_med_pontual, PDO::PARAM_INT);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);
} else {
    echo json_encode(array("error" => "No ID provided"));
}