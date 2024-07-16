<?php
    include_once("../database/conexao.php");
    include_once("../company-register/company-insert.php");
    session_start();
    $cep_posto_de_coleta = $_POST["cep_posto_de_coleta"];
    $estado_posto_de_coleta = $_POST["estado_posto_de_coleta"];
    $cidade_posto_de_coleta = $_POST["cidade_posto_de_coleta"];
    $bairro_posto_de_coleta = $_POST["bairro_posto_de_coleta"];
    $rua_posto_de_coleta = $_POST["rua_posto_de_coleta"];
    $numero_posto_de_coleta = $_POST["numero_posto_de_coleta"];
    $destinacao_posto_de_coleta = $_POST["destinacao_posto_de_coleta"];
    $fk_empresa = $_SESSION['id_empresa'];

    $sql = $conn -> prepare("INSERT INTO posto_de_coleta (cep_posto_de_coleta, estado_posto_de_coleta, cidade_posto_de_coleta, bairro_posto_de_coleta, rua_posto_de_coleta, numero_posto_de_coleta, destinacao_posto_de_coleta, fk_empresa) value (?, ?, ?, ?, ?, ?, ?, ?)");

    //verifica se a senha e a confirmação coincidem
    $sql -> execute([$cep_posto_de_coleta, $estado_posto_de_coleta, $cidade_posto_de_coleta, $bairro_posto_de_coleta, $rua_posto_de_coleta, $numero_posto_de_coleta, $destinacao_posto_de_coleta, $fk_empresa]);
        echo '<div class="paragraph"> Empresa cadastrada com sucesso! </div>';
        //colocar um timer
        header("location: ../company-register/create-collection-point.html");
        echo '<div class="paragraph"> As senhas não coincidem! </div>';

    unset($sql);
    unset($conn);
?>