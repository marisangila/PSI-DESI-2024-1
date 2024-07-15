<!DOCTYPE html>
<html lang="en">

<?php include '../source/valida_login.php'; ?>
<?php include '../layout/head.php';?>

<head><title>Cadastrar</title></head>

<body class="container-fluid p-5">

    <form action="../source/inserir.php" method="POST">
        <div class="card col-4">
            <div class="card-body m-2">
                <h4 class="card-title">Insert to database.</h4>
                <p class="card-text">test your connection with MariaDB</p>
                <div class="mb-3">
                    <label for="" class="form-label">e-mail</label>
                    <input type="email" class="form-control" id="idEmail" name="nmEmail" placeholder="e@mail.com" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">senha</label>
                    <input type="password" class="form-control" id="idSenha" name="nmSenha" placeholder="*****" />
                </div>
                <div class="mb-3">
                    <input type="submit" value="Cadastrar" class="btn btn-outline-success">
                    <a class="ms-3 btn btn-outline-warning" href="./index.php">Faça login</a>
                </div>
            </div>
        </div>
    </form>

</body>

</html>