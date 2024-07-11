<?php
    include_once("database.php");

    $sql = $pdo -> prepare("SELECT id_tipo_med, descricao FROM tipo_medicamento");

    $sql -> execute();

    $sql->execute();

    if ($sql->rowCount() >= 1) {
        $tipos = $sql->fetchAll();
    }
    unset($sql);
    unset($pdo);
?>