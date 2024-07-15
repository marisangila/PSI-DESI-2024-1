<!DOCTYPE html>
<html lang="en">

<?php include 'layout/head.php';?>

<head><title>Login</title></head>

<body class="container-fluid p-5">

    <form action="source/login.php" method="POST">
        <div class="card col-4">
            <div class="card-body m-2">
                <h4 class="card-title">Verify in database.</h4>
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
                    <input type="submit" value="Entrar" class="btn btn-outline-success">
                    <a class="ms-3 btn btn-outline-warning" href="pages/cadastrar.php">Cadastre-se</a>
                </div>
            </div>
        </div>
    </form>

</body>

</html>
