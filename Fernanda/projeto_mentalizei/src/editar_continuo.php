<?php
try {
    $pdo = include_once("database.php");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id'])) {
        $id_med_continuo = $_POST["id"];
        $descricao = $_POST["descricao"];
        $mg = $_POST["mg"];
        $quantidade = $_POST["quantidade_dia"];
        $horario = $_POST["horario"];
        $dt_inicio = $_POST["dt_inicio"];
        $tipo_med = $_POST["tipo_med"];

        $sql = $pdo->prepare("UPDATE medicamentos_continuos SET descricao = :descricao, mg = :mg, 
        quantidade_dia = :quantidade_dia, horario = :horario, dt_inicio = :dt_inicio, 
        id_tipo_med = :id_tipo_med WHERE id_med_continuo = :id_med_continuo");

        $sql->bindParam(":descricao", $descricao, PDO::PARAM_STR);
        $sql->bindParam(":mg", $mg, PDO::PARAM_INT);
        $sql->bindParam(":quantidade_dia", $quantidade, PDO::PARAM_INT);
        $sql->bindParam(":horario", $horario, PDO::PARAM_STR);
        $sql->bindParam(":dt_inicio", $dt_inicio, PDO::PARAM_STR);
        $sql->bindParam(":id_tipo_med", $tipo_med, PDO::PARAM_INT);
        $sql->bindParam(":id_med_continuo", $id_med_continuo, PDO::PARAM_INT);

        if ($sql->execute()) {
            header("location:../pages/lista_med.php");
        } else {
            echo json_encode(['message' => 'Erro ao atualizar os dados.']);
        }
    } else {
        echo json_encode(['message' => 'Formulário inválido ou campos ausentes!']);
    }
} catch (PDOException $e) {
    echo json_encode(['message' => 'Erro: '. $e->getMessage()]);
}