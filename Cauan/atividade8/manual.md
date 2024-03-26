# Manual da biblioteca CSS


## Paleta de cores da biblioteca e predefinições

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    :root {
        --white: #fff;
        --black: #000;
        --gray: #b6b6b6;
        --medium: #414040;
        --dark: #2a2a2a;
        --dark-blue: #032440;
        --winter: #004F6E;
        --ocean: #007E88;
        --water: #00AC89;
        --garden: #86D77A;
        --sun: #e9e50c;
        --none: transparent;
    }


## Buttons

### .btn-confirm-light: 

Botão de confirmação para tema claro.

    .btn-confirm-light{
        padding: 5px;
        border: none;
        color: var(--white);
        background-color: var(--ocean);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
      .btn-confirm-dark:hover, .btn-confirm-light:hover{
        background-color: var(--garden);
        border: none;
        transition: 0.5s;
    }

  
--------------------------------------------------------------------------------------------------------------

### .btn-ghost-confirm-light: 

Botão de confirmação transparente para tema claro.

    .btn-ghost-confirm-light{
        padding: 5px;
        border: 3px solid var(--ocean);
        color: var(--ocean);
        background-color: var(--none);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-ghost-confirm-light:hover{
        border: 3px solid var(--sun);
        color: var(--sun);
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .btn-cancel-light: 

Botão de cancelamento para tema claro.

    .btn-cancel-light{
        padding: 5px;
        border: none;
        color: var(--gray);
        background-color: var(--dark-blue);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-cancel-light:hover{
        color: var(--white);
        border: none;
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .btn-ghost-cancel-light:

Botão de cancelamento transparente para tema claro.

    .btn-ghost-cancel-light{
        padding: 5px;
        border: 3px solid var(--dark-blue);
        color: var(--dark-blue);
        background-color: var(--none);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-ghost-cancel-light:hover{
        background-color: var(--dark-blue);
        color: var(--white);
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .btn-confirm-dark: 

Botão de confirmação para tema escuro.

    .btn-confirm-dark{
        padding: 5px;
        border: none;
        color: var(--white);
        background-color: var(--ocean);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-confirm-dark:hover, .btn-confirm-light:hover{
        background-color: var(--garden);
        border: none;
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .btn-ghost-confirm-dark: 

Botão de confirmação transparente para tema escuro.

     .btn-ghost-confirm-dark{
        padding: 5px;
        border: 3px solid var(--ocean);
        color: var(--ocean);
        background-color: var(--none);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    } 
    .btn-ghost-confirm-dark:hover{
        border: 3px solid var(--garden);
        color: var(--garden);
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .btn-cancel-dark: 

Botão de cancelamento para tema escuro.

    .btn-cancel-dark{
        padding: 5px;
        border: none;
        color: var(--gray);
        background-color: var(--dark-blue);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-cancel-dark:hover{
        color: var(--white);
        background-color: var(--medium);
        border: none;
        transition: 0.5s;
    }


--------------------------------------------------------------------------------------------------------------

### .btn-ghost-cancel-dark: 

Botão de cancelamento transparente para tema escuro.

    .btn-ghost-cancel-dark{
        padding: 5px;
        border: 3px solid var(--white);
        color: var(--white);
        background-color: var(--none);
        border-radius: 20px;
        text-align: center;
        margin: 9px;
        cursor: pointer;
    }
    .btn-ghost-cancel-dark:hover{
        color: var(--gray);
        border: 3px solid var(--gray);
        transition: 0.5s;
    }

--------------------------------------------------------------------------------------------------------------

### .nav-dark-btn: 

Botão de Navbar com tema escuro.

    .nav-dark-btn{
        border: none;
        font-size: 18px;
        color: var(--gray);
        background-color: var(--none);
        padding: 10px;
    }
    .nav-dark-btn:hover{
        border-bottom: 2px solid var(--ocean);
        color: var(--white);
        transition: 0.3s;
    }

--------------------------------------------------------------------------------------------------------------

### .nav-light-btn: 

Botão de navegação para tema claro.

    .nav-light-btn{
        border: none;
        font-size: 18px;
        color: var(--dark-blue);
        background-color: var(--none);
        padding: 10px;
    }
    .nav-light-btn:hover{
        border-bottom: 2px solid var(--sun);
        color: var(--sun);
        transition: 0.3s;
    }

--------------------------------------------------------------------------------------------------------------

### .simple-btn-dark:

Botão simples de titulo de div para tema escuro.

    .simple-btn-dark{
        border: none;
        background-color: var(--none);
        font-size: 24px;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
    }
    .simple-btn-dark:hover{
        color: var(--gray);
        cursor: pointer;
    }
    
--------------------------------------------------------------------------------------------------------------

### .simple-btn-light:

Botão simples de titulo de div para tema claro.

    .simple-btn-light{
        border: none;
        background-color: var(--none);
        font-size: 24px;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        color: var(--gray);
    }
    .simple-btn-light:hover{
        color: var(--white);
        cursor: pointer;
    }
    
--------------------------------------------------------------------------------------------------------------

## Button Sizes

### .all-space-btn: 

Padrão de botão oupará 95% da largura da div.

    .all-space-btn{
        width: 95%;
        padding: 10px;
    }

--------------------------------------------------------------------------------------------------------------

### .big-btn: 

Padrão de botão grande.

    .big-btn{
        font-size: 18px;
        padding: 10px 20px;
    }

--------------------------------------------------------------------------------------------------------------

### .small-btn: 

Padrão de botão pequeno.

    .small-btn{
        padding: 10px;
        font-size: 10px;
    }

--------------------------------------------------------------------------------------------------------------

## Inputs

### .check-b: 

Classe padrão de todas as check-boxes.

--------------------------------------------------------------------------------------------------------------

### .check-light:

Check-box para tema claro.

    .check-light{
        border: 2px solid var(--dark-blue);
    }
    .check-light:checked{
        background-color: var(--dark-blue);
        border: 2px solid var(--dark-blue);
    }

--------------------------------------------------------------------------------------------------------------

### .check-dark:

Check-box para tema escuro.

    .check-dark{
        border: 2px solid var(--garden);
    }
    .check-dark:checked{
        background-color: var(--garden);
        border: 2px solid var(--garden);
    }
    
--------------------------------------------------------------------------------------------------------------


### .input-txt:

Classe para caixa de entrada de texto.

    .input-txt{
        padding: 5px 20px;
        border-radius: 8px;
        border: 1px solid var(--gray);
        color: var(--garden);
        font-size: 16px;
        outline: none;
    }
    
--------------------------------------------------------------------------------------------------------------

### .search-box:

Classe para caixa de pesquisa.

    .search-box{
        width: 95%;
        font-size: 16px;
        padding: 5px 20px;
        border-radius: 25px;
        margin: 10px;
        border: 2px solid var(--medium);
        background-color: var(--dark);
        color: var(--gray);
        text-align: center;
        outline: none;
    }
    .search-box:hover{
        background-color: #323232;
        border: 2px solid var(--ocean);
        color: var(--white);
        box-shadow: inset 1px 1px 3px #323232;
        transition: 1s;
    }
    .search-box:focus{
        background-color: #323232;
        border: 2px solid var(--ocean);
        color: var(--white);
        box-shadow: inset 1px 1px 3px #323232;
    }
    
--------------------------------------------------------------------------------------------------------------


### .select-light:

Classe para 'select' em temas claros.

    .select-light{
        outline: none;
        border: none;
        border-radius: 15px;
        font-size: 15px;
        color: var(--winter);
        font-weight: bold;
        padding: 5px 10px;
    }
    .select-dark:hover, .select-light:hover{
        border: 2px solid var(--water);
    }
    
--------------------------------------------------------------------------------------------------------------


### .select-dark:

Classe para 'select' em temas escuros.

    .select-dark{
        outline: none;
        border: none;
        border-radius: 15px;
        font-size: 15px;
        background-color: var(--dark);
        color: var(--ocean);
        font-weight: bold;
        padding: 5px 10px;
    }
    .select-dark:hover, .select-light:hover{
        border: 2px solid var(--water);
    }
    
--------------------------------------------------------------------------------------------------------------

### .range-light:

Classe para inputs de tipo 'range' em temas escuros (O 'range' é claro).

    .range-light{
        -webkit-appearance: none;
        appearance: none;
        height: 0.5em;
        border-radius: 5px;
        background-color: var(--gray);
        outline: none;
    }
    .range-light::-webkit-slider-thumb, .range-dark::-webkit-slider-thumb{
        appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: var(--ocean);
    }
    
--------------------------------------------------------------------------------------------------------------

### .range-dark:

Classe para inputs de tipo 'range' em temas claros (O 'range' é escuro).

    .range-dark{
        -webkit-appearance: none;
        appearance: none;
        height: 0.5em;
        border-radius: 5px;
        background-color: var(--dark);
        outline: none;
    }
    .range-light::-webkit-slider-thumb, .range-dark::-webkit-slider-thumb{
        appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: var(--ocean);
    }
    
--------------------------------------------------------------------------------------------------------------

### .email:

Classe para inputs do tipo 'email'.

    .email{
        border-radius: 8px;
        background-color: var(--white);
        color: var(--water);
        outline: none;
        padding: 5px;
        border: 1px solid var(--gray);
        font-size: 15px;
    }
    .email:hover{
        border: 2px solid var(--water);
        transition: 0.2s;
    }

--------------------------------------------------------------------------------------------------------------

### .password:

Classe para inputs do tipo 'password'.

    .password{
        border-radius: 8px;
        background-color: var(--white);
        color: var(--winter);
        outline: none;
        padding: 5px;
        border: 1px solid var(--gray);
        font-size: 15px;
    }
    .password:hover{
        border: 2px solid var(--winter);
        transition: 0.2s;
    }

--------------------------------------------------------------------------------------------------------------

## Label

### .light-label:

Classe para 'labels' de tema escuro ( O 'label' é claro).

      .light-label{
          font-family: 'Times New Roman', Times, serif;
          color: var(--water);
      }

--------------------------------------------------------------------------------------------------------------

### .dark-label:

Classe para 'labels' de tema claro ( O 'label' é escuro).

    .dark-label{
        font-family: 'Times New Roman', Times, serif;
        color: var(--winter);
    }

--------------------------------------------------------------------------------------------------------------

## Parágrafos

### .light-p:

Classe para parágrafos de tema escuro (parágrafo claro).

      .light-p{
          color: var(--water);
          margin: 15px;
      }

--------------------------------------------------------------------------------------------------------------

### .dark-p:

Classe para parágrafos de tema claro (parágrafo escuro).

    .dark-p{
        color: var(--winter);
        margin: 15px;
    }
    
--------------------------------------------------------------------------------------------------------------

## Links

### .link:

Classe comum para todos os links.

    .link{
        text-decoration: none;
        color: var(--gray);
    }
    .link:hover{
        cursor: pointer;
        color: var(--sun);
    }

--------------------------------------------------------------------------------------------------------------

## Divs

### .card:

Classe de estilo para divs de conteúdo.

    .card{
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 3em;
        padding: 20px;
        border-radius: 20px;
    }

--------------------------------------------------------------------------------------------------------------

### .inline:

Classe para divs com conteúdo inline.

    .inline{
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 15px;
    }

--------------------------------------------------------------------------------------------------------------

## Shadow

### .shadow-light:

Classe padrão para das sombras do tema escuro.

      .shadow-light{
          box-shadow: 0 1px 10px var(--gray);
      }

--------------------------------------------------------------------------------------------------------------

### .shadow-dark:

Classe padrão para das sombras do tema claro.

    .shadow-dark{
        box-shadow: 0 1px 10px var(--dark);
    }

--------------------------------------------------------------------------------------------------------------

## Background

### .bg-dark:

Classe que define o tema escuro (preferencialmente sendo usada na div pai).

    .bg-dark{
        background-color: var(--dark);
        padding: 10px;
        color: var(--white);
    }

--------------------------------------------------------------------------------------------------------------

### .bg-light:

Classe que define o tema claro (preferencialmente sendo usada na div pai).

    .bg-light{
        background-color: var(--white);
        padding: 10px;
        color: var(--dark);
    }

--------------------------------------------------------------------------------------------------------------

## Nav

### .nav:

Classe comum para nav:

      .nav{
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px;
      }

--------------------------------------------------------------------------------------------------------------

### .nav-dark:

Classe que define um tema escuro para a nav:

     .nav-dark{
          background-color: var(--black);
          color: var(--gray);
      }

--------------------------------------------------------------------------------------------------------------

### .nav-light:

Classe que define um tema claro para a nav:
    
      .nav-light{
          background-color: var(--white);
          color: var(--dark-blue);
      }

--------------------------------------------------------------------------------------------------------------




