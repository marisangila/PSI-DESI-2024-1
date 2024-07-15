<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="img/icon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <title>Mentalizei</title>
</head>
<body>
<div id="all-content">
    <form action="src/login.php" method="POST">
        <div id="box-div-login" class="z-0">
            <div id="logo" class="mb-4 d-flex justify-content-center align-items-center mx-auto">
                <img src="img/logo.png" height="auto" width="50"><label class="mx-1">Mentalizei</label>
            </div>
            <div class="my-3">
                <input type="text" class="form-control" id="user" name="theuser" placeholder="Usuario" required>
            </div>
            <div class="my-2">
                <input type="password" class="form-control" id="password" name="password" placeholder="Senha" required>
            </div>
            <div class="my-3">
                <button type="submit" class="btn btn-primary" value="ENTRAR" style="width:150px!important;">ENTRAR</button>
            </div>
            <a class="text-body-secondary text-decoration-none" href="pages/cadastrar.php">Cadastre-se</a>
        </div>
    </form>
    <div id="capsulas" class="z-n1">
        <img src="img/capsulas.png" height="auto" width="600">
    </div>
</div>
</body>
</html>