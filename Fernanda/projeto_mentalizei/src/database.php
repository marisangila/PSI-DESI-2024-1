<?php
    date_default_timezone_set('America/Sao_Paulo');
    
    $dsn = 'mysql:host=localhost;dbname=sa_mentalizei';
    $username = 'root';
    $password = '';
    
    try {
        $pdo = new PDO($dsn, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    } catch (PDOException $e) {
        echo 'Connection failed: '. $e->getMessage();
        exit();
    }
    ?>