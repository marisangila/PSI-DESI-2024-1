<?php
    include_once('../database/conexao.php');
    session_start();
    $id_voluntario = ($_SESSION['id_voluntario']);

    $sql = $conn -> prepare("SELECT id_voluntario, nome_voluntario, nome_de_usuario_voluntario, email_voluntario, senha_voluntario FROM voluntario WHERE id_voluntario = ?"); //or select where email_empresa

    $sql -> execute([$id_voluntario]);

    $voluntario = $sql -> fetch();
    
    unset($sql);
?>