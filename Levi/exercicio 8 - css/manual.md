#   Biblioteca - PINK/CSS 🎀

 Aqui você encontrará um tutorial breve explicando algumas classes do tema Pink/CSS. Siga-o corretamente para melhor experiência e desenvolvimento do seu website.
 
 **Importante❕❕** 
 
* É recomendável o uso em Chrome/Opera. 
 
* A fonte utilizada **NÃO POSSUI** acentuação, portanto, pode ser necessária sua troca ou criação do website em inglês.

 ## Primeiros passos - Body 💌

Após o download do arquivo CSS,  você encontrará algumas classes. Inicialmente, trabalharemos com a definição do body e suas opções de background.

Para a definição do fundo escuro, use a seguinte classe:
* body_dark

      <body class = "body_dark">

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/body_dark.PNG)

 Para a definição do fundo claro, use a seguinte classe:
* body_light

        <body class = "body_light">
![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/body_light.PNG)

## Header ✨
 
Ao definir seu body, surge a necessidade do cabeçalho. Primeiramente, é necessário que você defina a estrutura padrão do cabeçalho.

* **Estrutura do cabeçalho**

  * size_header
  
          <div class = "size_header">
  
  Após isso, defina a estrutura padrão da lista de elementos dentro do cabeçalho:
  
  * list_orientation
  
        <ul class = "list_orientation">

* **Opções de Cores**


  Na div da configuração da estrutura do cabeçalho, adicione a classe informada abaixo para definir um **cabeçalho claro.**
  * header_light
  
        <div class = "size_header header_light">

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/header_light.PNG)

  Caso definido o **cabeçalho claro,** utilize o tema abaixo para mudar as cores das opções do menu:
  
  * option_light
  
        <li class = "option_light">Option</li>
  
  Para o  **cabeçalho escuro,** defina a seguinte classe dentro da mesma div da configuração da estrutura do cabeçalho:
  * header_dark
    
        <div class = "size header header_dark">
  
  Caso definido o **cabeçalho escuro**, utilize o tema abaixo para mudar as cores das opções do menu:
  
  * option_dark
  
        <li class = "option_dark">Option</li>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/header_dark.PNG)

## Div's 💌
Uma opção para, por exemplo, a criação de formulários de uma página. Inicialmente, você poderá definir a configuração de sua estrutura com a classe abaixo:
* config_div
  
      <div class = "config_div">

Após definir sua estrutura, você pode selecionar as cores desejadas. Para um fundo claro, utilize a seguinte classe na mesma div de configuração:
* background_light_div

      <div class = "config_div background_light_div">
![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/div_light.PNG)

Ou, para um fundo escuro:
* background_dark_div

      <div class = "config_div background_dark_div">
![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/div_dark.PNG)
## Buttons ✨

Aqui, você irá encontrar as principais configurações para os botões de seu website. Iniciaremos com as configurações de tamanho dos botões.

Para um botão grande, utilize a seguinte classe:
* big_btn

      <input type = "button" class = "big_btn">

  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/big_confirm.PNG)

Agora, para um botão pequeno, utilize a classe:
* tiny_btn

      <input type = "button" class = "tiny_btn">

  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/tiny_cancel.PNG)

* **Botões de confirmação**

  Para os botões de confirmação **com cores**, utilize a seguinte classe ao lado da classe de configuração do botão no input:
  * btn_confirm
  
        <input type = "button" class = "big_btn btn_confirm">
    
  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/big_confirm.PNG)

  Ou, para os botões de confirmação **sem cores**, utilize a classe abaixo:
  * wocolor_btn_confirm
  
        <input type = "button" class = "tiny_btn wocolor_btn_confirm">

  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/tiny_confirm.PNG)
* **Botões de cancelamento**

  Para os botões de cancelamento **com cores**, utilize a seguinte classe ao lado da classe de configuração do botão no input:
  * btn_cancel
  
        <input type = "button" class = "big_btn btn_cancel">

  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/big_cancel.PNG)

  Ou, para os botões de cancelamento **sem cores**, utilize a classe abaixo:
  * wocolor_btn_cancel
  
        <input type = "button" class = "tiny_btn wocolor_btn_cancel">
    
  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/tiny_cancel.PNG)
## Input 💌

Aqui, você poderá definir o padrão dos seus inputs de dados, tais como e-mail, senha, nome e afins. Utilize a classe abaixo para sua definição:
* input_text

      <input type = "text" class = "input_text" placeholder = "name">
      <input type = "text" class = "input_text" placeholder = "email">
      <input type = "password" class = "input_text" placeholder = "password">

  ![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/input_dados.PNG)

## Range bar ✨

Você também pode definir um padrão para sua range bar, basta utilizar a seguinte classe:
* range_bar

      <input type = "range" class = "range_bar">

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/range.PNG)
## Checkbox 💌

Para a checkbox, você deve utilizar a seguinte classe:
* container_checkbox

      <label class="container_checkbox">Checkbox
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
      </label>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/checkbox.PNG)

## Links ✨
Para os links, você pode utilizar duas opções. O link com fonte escura:
* link_dark

      <a class = "link_dark" href="##">link</a>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/link_dark.PNG)

Ou, um link com a fonte clara:
* link_light

          <a class = "link_light" href="##">link</a>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/link_light.PNG)
  
## Labels e parágrafos 💌
Para as labels e parágrafos, você pode utilizar três opções de cores. Sendo as com cores escura:
* dark_red_font

      <label class = "dark_red_font">your text here</label>
      <p class = "dark_red_font">your text here</p>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/dark_red_font.PNG)
  
* dark_brown_font

      <label class = "dark_brown_font">your text here</label>
      <p class = "dark_brown_font">your text here</p>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/dark_brown_font.PNG)
  
E com cor clara:
* light_font

      <label class = "light_font">your text here</label>
      <p class = "light_font">your text here</p>

![image](https://github.com/kagayemo/imgs/blob/302a283022986267886f3f4b26b896429585b8d0/github_projeto_imagens/light_font.PNG)
