<?php
session_start();
if(!$_SESSION["loggedin"]){
    header("index.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial</title>
</head>
<body>
    <nav>
        <a href="register.php">Cadastrar</a>
        <a href="">Usuário</a>
        <a href="index.html">Sair</a>
    </nav>
    <table>
        <thead>
            <th>Código</th>
            <th>E-mail</th>
            <th>Administrador</th>
            <th>Ações</th>
        </thead>
        <tbody>
            <?php
            include_once("source/listar.php");
            if (!empty($usuarios)){
                foreach($usuarios as $usuario){
                    echo '<tr>
                            <td>'.$usuario["pk_usuario"].'</td>
                            <td>'.$usuario["email_usuario"].'</td>
                            <td>'.$usuario["adm_role"].'</td>
                            <td><a href="source/excluir.php?usuario='.$usuario["pk_usuario"].'">Excluir</a></td>
                            <td><a href="">Alterar</a></td>
                        </tr>';
                }
            }
            ?>
        </tbody>
    </table>
</body>
</html>