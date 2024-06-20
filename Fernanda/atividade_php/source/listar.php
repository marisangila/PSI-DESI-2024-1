<?php
$shout = "";

include_once ("conexao.php");

$sql = $con->prepare("SELECT idUsuario,colEmail,colAdmin FROM tbusuarios");

$sql->execute();

if ($sql->rowCount() >= 1) {
    $usuarios = $sql->fetchAll();
    listTable($usuarios);
} else {
    echo "<div class='ps-3 p-1 m-3 text-black bg-danger-subtle border border-danger rounded-2'>No users registered!</div>";
}


function listTable($usuarios)
{
    foreach ($usuarios as $usuario) {
        $GLOBALS["shout"] .=
            "<tr class='bg-primary-subtle'>"
            . "<td>" . $usuario["idUsuario"] . "</td>"
            . "<td>" . $usuario["colEmail"] . "</td>"
            . "<td>" . $usuario["colAdmin"] . "</td>"
            . "<td>"
            . "<a href='../source/editando.php?id=" . $usuario["idUsuario"] . "e=".$usuario["colEmail"] . "class='btn btn-warning'>Editar</a>"
            . "</td>"
            . "<td>"
            . "<a href='../source/excluir.php?id=" . $usuario["idUsuario"] . "' class='btn btn-danger'>Excluir</a>"
            . "</td>"
            . "</tr>";
    }
}

?>