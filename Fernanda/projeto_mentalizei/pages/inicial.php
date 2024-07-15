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
    <link rel="stylesheet" type="text/css" href="../css/modal.css">
    <title>Mentalizei</title>
</head>
<body class="bg-white">
<nav class="navbar d-flex " id="nav">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand mx-auto">
        <img src="../img/logo.png" height="auto" width="50" class="border-0" >
    </a>
    <?php $usuario = include '../src/dados_user.php'; ?>
    <label id="user"><i class="bi bi-person-fill mx-1"></i><?php echo $usuario["usuario"];?></label>
</nav>
<div>
    <?php include '../layout/offcanvas.php';?>
</div>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <label id="user_bem">Bem vindo(a) de volta, <?php echo $usuario["usuario"];?>!</label>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-xs-12">
            <form action="../src/cadastrar_emocao.php" method="POST">
                <div id="card-emocoes" class="card mx-auto">
                    <div><label id="card-emocao-titulo" class="form-label my-3">Como você está hoje?</label></div>
                    <div class="d-flex flex-column">
                        <div class="d-flex">
                            <input type="radio" name="radio-emocao" value="1" id="radio1" required>
                            <input type="radio" name="radio-emocao" value="2" id="radio2" required>
                            <input type="radio" name="radio-emocao" value="3" id="radio3" required>
                            <input type="radio" name="radio-emocao" value="4" id="radio4" required>
                            <input type="radio" name="radio-emocao" value="5" id="radio5" required>
                            <input type="radio" name="radio-emocao" value="6" id="radio6" required>
                        </div>
                    </div>
                    <img src="../img/total.png" style="width:400px;" class="mb-4">
                    <div class="row">
                        <table class="table" >
                            <tr>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-1"></i>Ansioso(a)</label></td>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-2"></i>Feliz</label></td>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-3"></i>Ok</label></td>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-4"></i>Estressado(a)</label></td>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-5"></i>Triste</label></td>
                                <td><label id="bi"><i class="bi bi-circle-fill me-1" id="bi-6"></i>Irritado(a)</label></td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <button class="btn my-3" id="btn-adc">Adicionar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-6 col-xs-12">
            <form method="POST" action="../src/cadastrar_sintoma.php">
                <div id="sintomas-container" class="border mx-auto bg-white my-1 ms-5">
                    <div><label id="card-emocao-titulo" class="form-label my-2">Sente algo diferente?</label></div>
                    <div class="d-flex flex-column">
                        <input type="text" class="form-control my-1" id="sintoma-fisico" name="sintoma_fisico">
                        <input type="date" class="form-control my-1" name="data">
                        <input type="time" class="form-control my-1" name="hora">
                    </div>
                    <div class="d-flex justify-content-center my-3">
                        <button class="btn" id="btn-adc">Adicionar</button>
                    </div>
                </div>
            </form> 
        </div>
    </div>
    <div class="class-md-6 col-xs-12 position-absolute z-n1 end-0 bottom-0 mt-5" id="doctor-image">
        <img src="../img/doctor_illustration.png" height="auto" width="500">
    </div>
    <div class="card border-0">
        <?php $usuario = include '../layout/modal/modal_diario.php'; ?>
    </div>
</div>
<script src="../js/dropdown-rotate.js"></script>
<script src="../js/modal_diario.js"></script>
</body>
</html>