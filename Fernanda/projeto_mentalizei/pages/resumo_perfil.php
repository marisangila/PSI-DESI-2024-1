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
    <label id="user"><i class="bi bi-person-fill mx-1"></i><?php echo $user["usuario"];?></label>
</nav>
<div>
    <?php include '../layout/offcanvas.php';?>
</div>
<div class="container-fluid d-flex flex-column">
    <div class="row">
        <div class="col-12">
            <div id="card-tempo-tratamento" class="d-flex flex-column mx-5 mt-5 text-center">
                <label class="p-1">Tempo de tratamento</label>
                <label>0Meses0Dias</label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="d-flex justify-content-center">
            <div id="tab_sintomas" class="col-md-6 col-xs-12 mx-1">
                <table class="table table-striped border">
                    <thead class="text-center">
                        <tr>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        include_once("../src/listar_resumo.php");
                        if(!empty($sintomas)){
                            foreach($sintomas as $sintoma){
                                echo '<tr>
                                        <td>'.$sintoma['descricao'].'</td>
                                        <td class="text-center">'.$sintoma['data_registro'].'</td>
                                        <td class="text-center">'.$sintoma['hora'].'</td>
                                    </tr>
                                ';
                            }
                        }else{
                            echo '<div class="text-danger">
                            Não há sintomas cadastrados!
                            </div>';
                        }
                        ?>
                    </tbody>
                </table> 
            </div>
            <div id="tab_frequencias" class="col-md-6 col-xs-12">
            <table class="table table-striped border">
            <thead class="text-center">
                <tr>
                    <th>Descrição</th>
                    <th>Frequência Mensal</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if(!empty($sintomas)){
                foreach ($sintomas as $sintoma) {
                    $descricao = strtolower($sintoma['descricao']);
                    if (!isset($frequencias[$descricao])) {
                        $frequencias[$descricao] = 1;
                    } else {
                        $frequencias[$descricao]++;
                    }
                }
                foreach ($frequencias as $descricao => $frequencia) {
                    echo '<tr>
                            <td>' . $descricao . '</td>
                            <td class="text-center">' . $frequencia . '</td>
                        </tr>
                    ';
                }
            }else{
                echo '<div class="text-danger">
                Não há nada cadastrado por você!
            </div>';
            }
                ?>
            </tbody>
    </table>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-xs-12 mx-auto my-4" id="grafico_emocoes">
            <?php include '../layout/grafico.php'?>
        </div>
    </div>
</div>
<div id="capsulas" class="z-n1">
    <img src="../img/capsulas.png" height="auto" width="600">
</div>