<?php include '../src/get_emocoes.php'?>
<div class>
  <canvas id="chartEmocao"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
    var data_php = <?php echo $data_j?>;
    var titulos = ["Ansioso(a)", "Feliz", "Ok", "Estressado(a)",
    "Triste", "Irritado(a)"];

    const ctx = document.getElementById("chartEmocao");

    new Chart(ctx,{
        type: 'pie',
        data: {
            labels: titulos,
            datasets:[
                {data: data_php,
                    backgroundColor:[
                        '#75C46E',
                        '#3461D7',
                        '#F2D263',
                        '#F49A4A',
                        '#EB7378',
                        '#D5242C'
                    ],
                    borderWidth: 1
                }
            ]
        },
    })
</script>