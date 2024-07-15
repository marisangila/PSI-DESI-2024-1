<?php
include_once("database.php");

$user_id = $_SESSION["user_id"];

$sql = $pdo->prepare("SELECT p.id_med_pontual, p.descricao, t.descricao AS tipo_med_descricao
FROM medicamentos_pontuais AS p
INNER JOIN tipo_medicamento AS t ON p.id_tipo_med = t.id_tipo_med
INNER JOIN contas_med_pontuais AS c ON p.id_med_pontual = c.id_med_pontual
WHERE c.id_conta = :user_id");

$sql->bindParam(":user_id", $user_id);
$sql->execute();

if ($sql->rowCount() >= 1) {
    $medicamento = $sql->fetchAll(PDO::FETCH_ASSOC);
} else {
    echo '<div class="text-danger">
            Não há medicamentos cadastrados por você!
        </div>';
}
?>