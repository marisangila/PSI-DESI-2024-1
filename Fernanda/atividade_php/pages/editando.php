<!DOCTYPE html>
<html lang="en">

<?php include '../layout/head.php'; ?>

<head><title>Editando</title></head>

<body>

    <?php

    $id = $_GET["id"];

    include_once ("conexao.php");

    $sql = $con->prepare("SELECT idUsuario,colEmail,colAdmin FROM tbusuarios WHERE idUsuario = ?");
    $sql->execute([$id]);

    if ($sql->rowCount() >= 1) {
        $usuarios = $sql->fetchAll();
        listTable($usuarios);
    } else {
        echo "<div class='ps-3 p-1 m-3 text-black bg-danger-subtle border border-danger rounded-2'>Unexistent user.</div>";
    }

    ?>

    <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
            placeholder="<?php  ?>" />
    </div>



</body>

</html>