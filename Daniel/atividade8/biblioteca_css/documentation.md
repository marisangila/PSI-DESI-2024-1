# Biblioteca de Cores
Biblioteca de Cores é uma poderosa, extensão frontend para css. Possibilitando a construção de layouts de sites em minutos.

## COMEÇANDO
Instale o código css disponibilizado na aba de arquivos deste git hub. Mova seu arquivo ao seu projeto e, após isso, você já poderá utilizar as classes personalizadas e pré prontas.

## BODY
Para que você possa estilizar o background da suas páginas, estão disponíveis três classes de body, snedo elas:

* body-pattern <br>

      <body class="body-light" >
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/ef8195cc-b4db-4f95-bb04-63032b389174)

* body-dark <br>

      <body class="body-dark">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/1a2d8e3e-2a9d-4065-bab1-7833220ebebe)

* body-alternative <br>
    
       <body class="body-alternative">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/12ef5f52-c3a6-422f-bb11-69d036c37adf)
    
## HEADER
Sempre que você for adicionar uma seção de header no seu projeto, você pode usar a classe header, para o tema escura usar header-dark.

* header

      <header class="header">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/2d0fc087-a53a-4c9b-8c53-1514a3d8261c)

* header-dark

      <header class="header-dark">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/b6a3be6e-cc78-47ce-bc79-fbbdf21028fa)

## BUTTON
Para estilizar seus botões, você pode usar a classe but, que define que seu elemento é um botão, porém este estará sem cor e com um tamanho padrão, outras classes são necessárias para maiores estilizações

* bit-but, medium-but, small-but

      <input type="button" value="YOUR TEXT" class="but big-but">
      <input type="button" value="YOUR TEXT" class="but medium-but">
      <input type="button" value="YOUR TEXT" class="but small-but">
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/ac0dc5ce-3459-4d57-b8e5-3c01bc27291c)
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/ec73ebf2-b71a-4957-854e-7bc987397578)
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/e1b343be-c5ff-44f0-89ac-11f70189516e)

* but-cancel e but-submit

      <input type="button" value="SUBMIT" class="but medium-but but-submit">
      <input type="button" value="CANCEL" class="but medium-but but-cancel">
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/44cf6fb2-0007-4941-92f6-141a73012fc3)

## CHECKBOX
   A biblioteca permite que você escolha três tamanhos de checkbox. Sendo elas:

* check-big, check-medium e check-small
  
      <input type="checkbox" class="checkbox check-big pointer">
      <input type="checkbox" class="checkbox check-medium pointer">
      <input type="checkbox" class="checkbox check-small pointer">
     ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/5ca35d73-fc15-4b8c-8479-37d28e278451)

* check-dark e chack-light
  
        <input type="checkbox" class="checkbox check-light check-small pointer">
        <input type="checkbox" class="checkbox check-dark check-small pointer">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/b00bacbe-7df2-4c8e-a061-27e1eddd343c)
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/c8ae703b-c303-4f66-8412-00de1241054c)

## INPUT
O input possui classes para 3 tipos diferentes de propositos, sendo eles nome de usuário, senha, e email, além do input tipo range.

* ipt-username, ipt-password e ipt-email

      <input type="text" class="input ipt-username" placeholder="Insert your name here">
      <input type="text" class="input ipt-email" placeholder="Insert your email here">
      <input type="password" class="input ipt-password" placeholder="Insert your password here">
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/f0034aa4-0a05-48f2-bbc6-95b2efcb0efd)

* input-range

      <input type="range" class="input input-range" placeholder="Insert your name here">
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/6225a43d-9d4e-4ef7-a2ae-d6d997eefdd9)

Para que você possa atribuir estilizações de tema, use as seguintes classes:
* ipt-light e ipt-dark

        <input type="text" class="input ipt-username ipt-light" placeholder="Insert your name here">
        <input type="text" class="input ipt-username ipt-dark" placeholder="Insert your name here">
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/7db34664-e62c-447b-8529-e7c44e2668b9)
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/264fb263-c837-4819-9e29-36ad6f5305c6)
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/78dc664b-3172-4026-af7f-2add80ca717f)
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/2578e280-0ee7-445b-add4-539fee0924af)

## Label 
Os labels, além de outras estilizações, possuem quatro níveis de tamanho, além de ser possível adicionar cor em cada um deles, usando as classes "font-nomeDaCor":

* label-small, label-medium, label-big e label-extra-big

      <label for="" class="font-dark label-small" >LABEL</label>
      <label for="" class="font-light label" >LABEL</label>
      <label for="" class="font-dark-opacity label-big">LABEL</label>
      <label for="" class="font-purple label label-extra-big" >LABEL</label>
      <label for="" class="font-pink-dark label-small" >LABEL</label>
      <label for="" class="font-pink-red label" >LABEL</label>
      <label for="" class="font-orange label-big" >LABEL</label>
      <label for="" class="font-orange-yellow label-extra-big" >LABEL</label>
      <label for="" class="font-yellow label-small">LABEL</label>
    ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/8bae3041-34ef-4505-a644-c49acb6bf174)

  As cores apresentadas foram as seguintes:

  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/9fb5a6d2-a9fb-4b4c-a394-8ae119bc06c6)

## Parágrafo
Os parágrafos da biblioteca permitem que você escolha entre três tamanhos diferentes, sendo ele:

* .paragraph-small, .paragraph e .paragraph-big

              <p class="paragraph-small font-light">Paragraph</p>
              <p class="paragraph font-light">Paragraph</p>
              <p class="paragraph-big font-light">Paragraph</p>

  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/1b5103ce-8b2f-445e-95d3-a77e4d5735cf)
  ![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/b80d7351-702b-4437-8da4-91c255ae4300)

## Link

* link
Deve ser usado para todo link do projeto.

      <a href="" class="link font-light">
      <a href="" class="link font-dark">
      
![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/01f89cbf-ae2e-47dc-a16c-f2049bf0f546)
![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/f91f9025-3e82-4af3-861e-fd39e168bae5)

## Card
Basicamente representam divs, usadas para englobar diversos elementos, no exemplo abaixo, foi usado como um formulário.

* card-dark e card-light

      <form class="card-dark">
      <form class="card-light">
![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/db3cdf2b-d2a7-47e0-bff5-0dd80ca96442)
![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/99f3bec5-5ed9-4cf1-9b2a-ffa41849aacf)

## Select
Assim como todos os outros elementos, este possuí uma versão escura e outra clara.

       <select class="select-dark select-big">
       <select class="select-light select-big">

![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/16077455-b002-4531-8308-4bbb20e21771)
![image](https://github.com/marisangila/PSI-DESI-2024-1/assets/130805695/9ac5aeb0-3d6b-4926-8de6-b2367b51f4ee)


