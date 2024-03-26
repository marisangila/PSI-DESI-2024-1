# Tutorial de estilos CSS

No presente arquivo estará presente um manual de aplicação dos estilos criados em CSS, bem como os resultados da utilização dos mesmos.
Essa folha de estilos conta com duas versões de estilização: itens para modo claro e itens para modo escuro.

>[!NOTE]
>Os resultados da aplicação dos estilos estarão em um documento PDF separado, em conjunto com os demais elementos.
>Redmensione as divs conforme a sua necessidade!

## Plano de fundo (Background)

Pode ser utilizado diretamente no body ou em uma div.

Para o modo claro:

    .page-background-light{
    background-color: hsl(0, 0%, 85%);
    }

Para o modo escuro:

    .page-background-dark{
    background-color: hsl(238, 55%, 9%);
    }

## Cabeçalho (Header)

Para o cabeçalho, temos a classe-mãe, que diz respeito aos apectos em comum para os modos escuro e modo claro e também temos os estilos específicos para cada um desses modos.

Classe-mãe:

    .div-header{
    display: flex;
    height: 8vh;
    width: 100vw;
    }

Para o modo claro:

    .light-background-header{
    background-color: rgb(255, 253, 245);
    }

Para o modo escuro:
    
    .dark-background-header{
    background-color: hsl(237, 39%, 19%);
    }

Para a customização, utilize a classe-mãe em conjunto com a classe do estilo que preferir (light mode ou dark mode), este padrão irá se repetir para os demais elementos. Aqui vai um exemplo:

    <div class="div-header dark-background-header">
    </div>

    ou

    <div class="div-header light-background-header">
    </div>

## Divs (cards)

Classe-mãe:

    .div-cards{
    height: 75vh;
    width: 40vw;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

Para o modo claro:

    .lightmode{
    background-color: white;
    }

Para o modo escuro:

    .darkmode{
    background-color: hsl(237, 39%, 19%);
    }

## Input de texto (text input)

Esta folha de estilo possui apenas um estilo para input, o mesmo serve para ambos os modos, claro ou escuro.
O mesmo também muda de estilo quando o cursor passa sob input e ao ser preenchido.

    .input-text{
    border-radius: 7px;
    outline: none;
    border: none;
    width: 24vw;
    height: 4vh;
    background-color: hsl(0, 0%, 95%);
    padding-left: 1vh;
    box-shadow: 2px 2px hsl(0, 0%, 70%);
    }

## Botões (buttons)

Para os botões temos versões grandes e pequenas, com e sem cor de fundo

### Botão grande

    .big-btn{
    width: 30vw;
    height: 5vh;
    font-size: large;
    }

### Botão pequeno

    .small-btn{
    width: 10vw;
    height: 5vh;
    font-size: medium;
    }

### Botão com cor de fundo

Estilo para o botão de confirmar:

    .confirm{
    background-color: hsl(91, 63%, 40%);
    }

Estilo para o botão de cancelar:

    .cancel{
    background-color: hsl(0, 63%, 40%);
    }

### Botão sem cor de fundo

Estilo para botão sem cor de fundo para backgrounds claros:
    
    .no-background{
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
    color: black;
    }
    
Estilo para botão sem cor de fundo para backgrounds escuros:

    .no-background-darkmode{
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    color: white;
    }

## Barra de range (rangebar)

    .range-bar{
    appearance: none;
    border: none;
    width: 10vw;
    }

    .range-bar::-webkit-slider-runnable-track{
    appearance: none;
    height: 2vh;
    background: rgb(67,138,32);
    background: linear-gradient(90deg, rgba(67,138,32,1) 21%, rgba(0,255,8,1) 76%);
    }

    .range-bar::-webkit-slider-thumb{
    appearance: none;
    background-color: rgb(0, 99, 41);
    width: 1vw;
    height: 2vh;
    border: 1px solid black;
    }

## Checkbox

    .custom-checkbox input {
    display: none;
    }

    .custom-checkbox input+label:before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: rgb(185, 185, 185);
    border: none;
    display: inline-block;
    vertical-align: -8px;
    margin-left: 15px;
    margin-top: 10px;
    margin-right: 8px;
    margin-bottom: 3px;
    padding: 1px;
    }

    .custom-checkbox input:checked+label:before {
    background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none'     stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    background-color: hsl(91, 63%, 35%);
    background-position: center;
    border: none;
    padding: 1px;
    }

## Menu select

    .select-menu{
    outline: none;
    width: 10vw;
    height: 2vh;
    border: none;
    border-radius: 5px;
    padding-left: 2px;
    }    

## Parágrafos

Classe-mãe:

    .paragraph{
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    }  
    

## Label

Classe mãe:

    .label{
    font-family: Arial, Helvetica, sans-serif;
    font-size:15px;
    font-weight: 600;
    }

## Link

Classe-mãe:

    .link{
    font-size: 14px;
    }

## Modificador universal para as cores de texto

Para o modo claro:

    .dark-font{
    color: black;
    }

Para o modo escuro:

    .light-font{
    color: white;
    }
