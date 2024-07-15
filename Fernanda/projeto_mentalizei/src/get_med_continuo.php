<?php
include_once("database.php");

if (isset($_GET['id'])) {
    $id_med_continuo = $_GET['id'];
    $stmt = $pdo->prepare("SELECT descricao, mg, id_tipo_med, quantidade_dia, horario, dt_inicio FROM medicamentos_continuos WHERE id_med_continuo =?");
    $stmt->bindParam(1, $id_med_continuo, PDO::PARAM_INT);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);
} else {
    echo json_encode(array("error" => "No ID provided"));
}
