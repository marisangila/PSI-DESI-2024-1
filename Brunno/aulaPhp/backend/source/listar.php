<?php
    include_once("conexao.php");

    $sql = $conn->prepare("SELECT pk_usuario, email_usuario, adm_role FROM usuario;");

    $sql->execute();

    if ($sql->rowCount() >= 1){
        $usuarios = $sql->fetchAll();
    }else{
        echo "Não há usuários cadastrados";
    }
    unset($sql);
    unset($conn);
?>