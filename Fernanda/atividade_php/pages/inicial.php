<!DOCTYPE html>
<html lang="en">

<?php include '../layout/head.php'; ?>

<head><title>Inicial</title></head>

<body>

    <div class="card col-4">
        <div class="card-body m-2">
            <h4 class="card-title">Overview of database.</h4>
            <p class="card-text">test your connection with MariaDB</p>
            <div class="mb-3">
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Administrador</th>
                                <th colspan="2" scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="table-info">
                            <?php include "../source/listar.php"; echo $GLOBALS["shout"] ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</body>

</html>