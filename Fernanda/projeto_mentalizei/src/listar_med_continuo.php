<?php
    include_once("database.php");

    $user_id = $_SESSION["user_id"];

    $sql = $pdo -> prepare("SELECT c.id_med_continuo, c.descricao, 
    c.mg, c.quantidade_dia, 
    c.horario, c.dt_inicio, t.descricao AS tipo_med_descricao
    FROM medicamentos_continuos AS c 
    INNER JOIN tipo_medicamento AS t ON c.id_tipo_med = t.id_tipo_med 
    INNER JOIN contas_med_continuos AS a ON c.id_med_continuo = a.id_med_continuo
    WHERE a.id_conta = :user_id");

    $sql->bindParam(":user_id", $user_id);
    $sql->execute();

    if($sql->rowCount() >=1){
        $medicamentos = $sql -> fetchAll(PDO::FETCH_ASSOC);
    }else{
        echo '<div class="text-danger">
                Não há medicamentos cadastrados!
            </div>';
    }
?>