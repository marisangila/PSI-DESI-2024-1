<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="../img/icon.svg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" type="text/css" href="../css/inicial.css">
    <link rel="stylesheet" type="text/css" href="../css/med.css">
    <link rel="stylesheet" type="text/css" href="../css/modal.css">
    <title>Mentalizei</title>
</head>
<body class="bg-white">
<nav class="navbar d-flex " id="nav">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand mx-auto">
        <img src="../img/logo.png" height="auto" width="50">
    </a>
    <?php $usuario = include '../src/dados_user.php'; ?>
    <label id="user"><?php echo $usuario["usuario"];?></label>
</nav>
<div>
    <?php include '../layout/offcanvas.php';?>
</div>
<div class="container-fluid "id="med_continuo_form">
    <div class="row">
        <div id="med_continuo_form" class="border">
            <form action="../src/cadastros/cadastrar_continuo.php" method="POST" class="">
                <div class="d-flex flex-column p-3">
                    <label class="text-center fs-5 my-2">Medicamentos Contínuos</label>
                    <label class="form-label my-2">Descrição(nome):<input class="form-control" type="text" name="descricao" id="descricao"></label>
                    <label class="form-label my-2">Miligramagem:<input class="form-control" type="text" name="mg" id="mg"></label>
                    <label class="form-label my-2">Quantidade no dia:<input class="form-control" type="text" name="quantidade_dia" id="quantidade_dia"></label>
                    <label class="form-label my-2">Horário:<input class="form-control" type="time" name="horario" id="horario"></label>
                    <label class="form-label my-2">Data de Início:<input class="form-control" type="date" name="date" id="date"></label>
                    <select class="form-select my-2" required name="tipo_med">
                        <option selected disabled>Escolha uma opção...</option>
                        <option value="1">Cápsula</option>
                        <option value="2">Cápsula Gelatinosa</option>
                        <option value="3">Comprimido</option>
                        <option value="4">Drágea</option>
                        <option value="5">Pó</option>
                        <option value="6">Granulado</option>
                        <option value="7">Líquido</option>
                        <option value="8">Solução</option>
                        <option value="9">Suspensão</option>
                        <option value="10">Emulsão</option>
                        <option value="11">Xarope</option>
                        <option value="12">Aerosol</option>
                </select>
                </div>
                <div class="d-flex justify-content-center my-3">
                    <button type="submit" class="btn align" id="btn-adc">Adicionar</button>
                </div>
            </form>
        </div>
        <div class="col-4 position-absolute z-n1 end-0 bottom-0">
            <img src="../img/medicine.png" height="auto" width="500">
        </div>
    </div>
        <div class="card border-0">
            <?php $usuario = include '../layout/modal/modal.php'; ?>
        </div>
    </div>
<script src="../js/dropdown-rotate.js"></script>
<script src="../js/modal_continuo.js"></script>
</body>
</html>