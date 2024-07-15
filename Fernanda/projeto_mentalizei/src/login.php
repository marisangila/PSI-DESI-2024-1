<?php
include_once("database.php");

$usuario = $_POST["theuser"];
$senha = MD5($_POST["password"]);

$sql = $pdo->prepare("SELECT id_conta, email, usuario, senha FROM contas WHERE usuario =?");
$sql -> execute([$usuario]);

if ($sql->rowCount() == 1) {
    $usuario = $sql->fetch();
    if ($usuario['senha'] == $senha) {
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $usuario['usuario'];
        $_SESSION['user_id'] = $usuario['id_conta'];

        header("Location:../pages/inicial.php");
        exit;
    } else {
        echo("Senha incorreta!");
    }
} else {
    echo("Usuário não encontrado!");
}
?>