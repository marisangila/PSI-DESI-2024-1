<?php
    include_once('../database/conexao.php');
    session_start();
    $id_empresa = ($_SESSION['id_empresa']);

    $sql = $conn -> prepare("SELECT id_empresa, nome_empresa, nome_de_usuario_empresa, cnpj_empresa, email_empresa, senha_empresa FROM empresa WHERE id_empresa = ?"); //or select where email_empresa

    $sql -> execute([$id_empresa]);

    $empresa = $sql -> fetch();
    
    unset($sql);
?>