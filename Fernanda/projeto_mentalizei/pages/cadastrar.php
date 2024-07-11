<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="img/icon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/index.css">
    <title>Mentalizei</title>
</head>
<body>
<div id="all-content">
    <form action="../src/cadastrar.php" method="POST">
        <div id="box-div" class="z-0">
            <div id="logo" class="mb-4 d-flex justify-content-center align-items-center mx-auto">
                <img src="../img/logo.png" height="auto" width="50"><label class="mx-1">Mentalizei</label>
            </div>
            <div class="my-3">
                <input type="text" class="form-control" id="name" name="name" placeholder="nome" />
            </div>
            <div class="my-3">
                <input type="text" class="form-control" id="nasc" name="nasc" placeholder="ano-mês-dia(0000-00-00)"/>
            </div>
            <div class="my-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="e@mail.com"/>
            </div>
            <div class="my-3">
                <input type="text" class="form-control" id="usuario" name="usuario" placeholder="usuario"/>
            </div>
            <div class="my-3">
                <input type="password" class="form-control" id="senha" name="senha" placeholder="*******"/>
            </div>
            <div class="mb-3">
                <button type="submit" value="Cadastrar" class="btn btn-primary my-2" id="btn-cadastro">Cadastrar</button>
            </div>
        </div>
    </form>
    <div id="capsulas" class="z-n1">
        <img src="../img/capsulas.png" height="auto" width="600">
    </div>
</div>
</body>
</html>