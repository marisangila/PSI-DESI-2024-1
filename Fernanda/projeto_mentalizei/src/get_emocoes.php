<?php

include_once("database.php");

$user_id = $_SESSION["user_id"];

$stmt = $pdo->prepare("SELECT c.id_conta, c.id_emocao, e.descricao FROM contas_emocoes AS c 
INNER JOIN emocoes AS e ON c.id_emocao = e.id_emocao
WHERE c.id_conta = :user_id");

$stmt->bindParam(":user_id", $user_id);

$stmt->execute();

if($stmt->rowCount() >= 1){
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
}else{
    echo '<div class="text-danger">
    Nenhuma emoção encontrada!
        </div>';
}

$qtdEmocao = array(
    'Ansioso(a)' => 0,
    'Feliz' => 0,
    'Ok' => 0,
    'Estressado(a)' => 0,
    'Triste' => 0,
    'Irritado(a)' => 0
);

if(!empty($data)){
    foreach($data as $row){
        $descricao = $row['descricao'];
        if(array_key_exists($descricao, $qtdEmocao)){
            $qtdEmocao[$descricao]++;
        }
    }
}

$data_j = json_encode(array_values($qtdEmocao));
    