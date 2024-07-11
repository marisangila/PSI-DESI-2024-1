<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="../img/icon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" type="text/css" href="../css/meu_perfil.css">
    <link rel="stylesheet" type="text/css" href="../css/modal.css">
    <title>Mentalizei</title>
    <?php $user = include '../src/dados_user.php';?>
</head>
<body class="bg-white">
<nav class="navbar d-flex " id="nav">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand mx-auto">
        <img src="../img/logo.png" height="auto" width="50" class="border-0">
    </a>
    <label id="user"><i class="bi bi-person-fill mx-1"></i><?php echo $user["usuario"];?></label>
</nav>
<div>
    <?php include '../layout/offcanvas.php';?>
</div>
<div>
    <div class="container-fluid d-flex" id="container-perfil">
        <div class="row">
            <div class="col-6 d-flex flex-column border" id="card-perfil">
                <div class="border" id="foto-perfil"></div>
                <div id="dados-perfil">
                    <div class="d-flex flex-column">
                        <label class="form-label">Nome: <label class="mx-1" id="nome"><?php echo $user["nome"];?></label></label>
                        <label class="form-label">E-mail:<label class="mx-1" id="email"><?php echo $user["email"];?></label></label>
                        <label class="form-label">Data de Nascimento:<label class="mx-1" id="dt_nascimento"><?php echo $user["dt_nascimento"];?></label></label> 
                    </div>
                </div>
                <div id="buttons-perfil">
                    <button class="btn" id="btn-editar">Editar</button>
                    <button class="btn" id="btn-salvar">Salvar</button>
                </div>
                <div class="my-2">
                    <a class="text-black" type="button" href="../pages/resumo_perfil.php">Resumo Pessoal</a> 
                </div>
            </div>
        </div>
    </div>
</div>
<div id="capsulas" class="z-n1">
    <img src="../img/capsulas.png" height="auto" width="600">
</div>