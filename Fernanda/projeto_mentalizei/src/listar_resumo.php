<?php
include_once("database.php");

$user_id = $_SESSION["user_id"];

$sql = $pdo ->prepare("SELECT cs.data_registro, cs.hora, s.descricao 
FROM contas_sintomas AS cs 
INNER JOIN sintomas AS s ON cs.id_sintoma = s.id_sintoma 
WHERE cs.id_conta = :user_id");

$sql -> bindValue(":user_id", $user_id);
$sql -> execute();

if($sql -> rowCount() >= 1){
    $sintomas = $sql -> fetchAll(PDO::FETCH_ASSOC);
}

$qtdSintoma = array();

if(!empty($sintomas)){
foreach($sintomas as $row){
    $descricao = strtolower($row['descricao']);
    if(array_key_exists($descricao, $qtdSintoma)){
        $qtdSintoma[$descricao]++;
    } else {
        $qtdSintoma[$descricao] = 1;
    }
}
}

$data_j = json_encode($qtdSintoma);