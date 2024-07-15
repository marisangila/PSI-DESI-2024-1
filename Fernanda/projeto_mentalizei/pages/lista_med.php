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
    <label id="user"><i class="bi bi-person-fill mx-1"></i><?php echo $user["usuario"];?></label>
</nav>
<div>
    <?php include '../layout/offcanvas.php';?>
</div>
<div class="container-fluid d-flex flex-column">
    <div class="row mx-auto" style="margin-top: 8rem">
        <div class="col-lg-5 col-md-12 col-sm-12">
            <div id="tab_continuo" class="mx-auto text-center">
                <span><label id="titulo_tabela">Medicamentos Contínuos</label></span>
                <table id="dataTable" class="table table-striped border">
                    <thead class="text-center">
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Mg</th>
                            <th>Qtd no Dia</th>
                            <th>Horário</th>
                            <th>Data de Início</th>
                            <th>Tipo Med.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                        include_once("../src/listar_med_continuo.php");
                        $count = 1;
                        if(!empty($medicamentos)){
                            foreach($medicamentos as $med_continuo){
                                echo'
                                    <tr>
                                        <td style="display: none;">'.$med_continuo["id_med_continuo"].'</td>
                                        <td>'.$count.'</td>
                                        <td>'.$med_continuo["descricao"].'</td>
                                        <td>'.$med_continuo["mg"].'</td>
                                        <td>'.$med_continuo["quantidade_dia"].'</td>
                                        <td>'.$med_continuo["horario"].'</td>
                                        <td>'.$med_continuo["dt_inicio"].'</td>
                                        <td>'.$med_continuo["tipo_med_descricao"].'</td>
                                        <td><a id="editar-continuo"class="text-dark" onclick="openModalContinuo('.$med_continuo['id_med_continuo'].')"><i class="bi bi-pencil-square"></i></a></td>
                                    </tr>
                                ';
                                $count++;
                            }
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-4 position-absolute z-n1 end-0 bottom-0">
            <img src="../img/medicine.png" height="auto" width="500">
        </div>
        <div class="col-lg-5 col-md-10 col-sm-12">
            <div id="tab_pontual" class="mx-auto text-center">
                <span><label id="titulo_tabela">Medicamentos Pontuais</label></span>
                <table id="dataTable2" class="table table-striped border">
                    <thead class="text-center">
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Tipo Med.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            include_once("../src/listar_med_pontual.php");
                            $count = 1;
                            if(!empty($medicamento)){
                                foreach($medicamento as $med){
                                    echo'
                                        <tr>
                                            <td style="display: none;">'.$med["id_med_pontual"].'</td>
                                            <td>'.$count.'</td>
                                            <td>'.$med["descricao"].'</td>
                                            <td>'.$med["tipo_med_descricao"].'</td>
                                            <td>
                                            <button id="btn-editar" type="button" class="btn" onclick="openModal('.$med['id_med_pontual'].')">Editar</button> 
                                            <a href="../src/deletar_pontual.php?id='.$med["id_med_pontual"].'"><button type="button" class="btn" id="btn-deletar">Deletar</button></a></td>
                                        </tr>
                                    ';
                                    $count++;
                                }
                            }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 my-4 d-flex justify-content-center">
            <div id="adiciona-med-pontual">
            <form method="POST" action="../src/cadastrar_pontual.php">
            <input class="form-control mx-auto my-2" id="adc_pontual" type="text" placeholder="descrição" required name="adc_pontual">
            <input class="form-control mx-auto my-2" id="adc_pontual" type="date" name="data">
            <input class="form-control mx-auto my-2" id="adc_pontual" type="time" name="hora">
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
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn align" id="btn-adc">Adicionar</button>
                </div>
            </form>
            </div>
        </div> 
        <?php $usuario = include '../layout/modal/modal.php'; ?>
        <?php $usuario = include '../layout/modal/modal_edita_pontual.php'; ?>
        <?php $usuario = include '../layout/modal/modal_edita_continuo.php'; ?>
        <?php $usuario = include '../layout/modal/modal_confirmar.php'; ?>
    </div>
    <div class="row">
        <div></div>
    </div>
</div>
<script src="../js/dropdown-rotate.js"></script>
<script src="../js/modal_pontual.js"></script>
<script src="../js/modal_editar.js"></script>
<script src="../js/modal_editar_continuo.js"></script>
</body>
</html>