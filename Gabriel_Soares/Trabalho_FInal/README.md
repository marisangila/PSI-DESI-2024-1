# IT InventorY
![Mês do Lançamento](https://img.shields.io/badge/release%20date-july-red) ![Versão](https://img.shields.io/badge/version-0.4.0%2013.07.2024-green) ![Versão Python](https://img.shields.io/badge/Python%20version-3.12.4-blue)

Um sistema de controle de armazenamento para o setor de ISC (T.I.) da Robert Bosch Joinville.

# :hammer: Funcionalidades do Projeto

- Cadastrar equipamentos;
- Visualizar equipamentos cadastrados;
- Editar equipamentos cadastrados;
- Excluir equipamentos cadastrados.

# :floppy_disk: Instalação do Programa

- Instale o Python correspondente no seu computador;
- Por meio do GitHub ou Git, realize a clonagem deste repositório;
- Utilize o arquivo "comandos_criação_banco.txt" no query do MySQL Workbench 8.0 para construir o banco de dados utilizado pelo projeto;
- Utilize o arquivo "comandos_para_popular_bd.txt" no query do MySQL Workbench 8.0 para inserir dados de exemplo no banco de dados;
- Abra o Visual Studio Code e inicie um novo terminal;
- No terminal realize a criação de uma ambiente virtual (venv), com o comando: "py -m venv venv";
- Realize a ativação do ambiente virtual com o comando: "venv/Scripts/activate";
- Realize a instalação das bibliotecas e frameworks necessários com o comando: "pip install -r requirements.txt";
- Realize a criação de migração para o banco (conexão), com o comando: "py manage.py makemigrations";
- Realize a efetivação da migração com o comando: "py manage.py migrate";
- Ainda no Visual Studio, vá direto à pasta "..\it_inventory" do projeto e abra o arquivo "settings.py";
- No arquivo "settings.py", vá até o bloco de comandos nomeado "DATABASES", e modifique as informações 'USER' e 'PASSWORD' conforme seu usuário e senha do MySQL Workbench;
- Inicie o servidor local com o comando: "py manage.py runserver";
- Abra o programa segurando a tecla Ctrl e clicando no endereço ao lado da mensagem "Starting development server at ";

# :globe_with_meridians: Telas do Programa

- Tela de Login -> A tela apresenta dois campos de preenchimento e um botão de confirmação. Após inserção dos dados de login, o acesso é realizado.
Obs: o login e a senha serão previamente criados diretamente no banco de dados do programa, e serão entregues ao responsável.

- Tela Principal (All devices) -> É composta por um menu na lateral esquerda que comporta as opções de registrar equipamento (Device Register), visualizar todos os equipamentos registrados (All devices) e Log Out para voltar à tela de login. Esta tela também conta com uma tabela central contendo informações como: usuário (User), nome do equipamento (Device Name), número de série (Serial Number), data de entrega (Delivery Date), ticket de ordem do equipamento (Order Ticket), estado atual do equipamento (Device Status) e status da ordem (Order Status). Esta tela também conta com uma barra de pesquisa localizada acima da tabela que possibilita a pesquisa de equipamentos pelo nome do usuario responsavel.

  Obs: ao lado de cada linha de equipamento registrado na tabela há dois ícones que possibilitam edição das informações de cada registro e exclusão respectivamente nesta ordem. O botão de exclusão conta com o artifício de modal, abrindo uma caixa solicitando a confirmação para a exclusão do equipamento.

- Tela de Registro (Device Register) -> É composta por um bloco central contendo sete campos de preenchimento e um botão de confirmação. Os campos de preenchimento são referente às informações do equipamento, sendo elas: EDV (Identificação única de colaborador Bosch), Ticket IT (ticket de ordem do equipamento), Ticket User (código único de ticket para o usuário), Device Serial Number (número de série do equipamento), Retrieval Date (data de recolhimento do equipamento), Delivery Date (data de entrega do equipamento), e Order Status (estado atual da ordem).

  Obs: o EDV é preciso ser selecionado, visto que o sistema utiliza uma base de dados com os EDVs dos usuários já cadastrados, assim como o número de série e o estado da ordem.

- Tela de Edição (Device Editing) -> É idêntica à tela de registro, contando com os mesmos campos e botão.
  AVISO: Esta tela proporciona a edição de TODAS as informações no registro. Tenha cautela para não remover informações importantes e, ou, inserir informações equivocadas.

# :gear: Changelog: 

ITY 0.4.0 (13-07-2024):
- Finalização do sistema.

ITY 0.3.5 (12-07-2024):
- Correção de erros;
- Melhoria no sistema.

ITY 0.3.4 (11-07-2024):
- Correção de erros.

ITY 0.3.3 (10-07-2024):
- Atualização e melhoria do banco de dados.

ITY 0.3.2 (09-07-2024):
- Criação dos botões de exclusão e edição.

ITY 0.3.1 (02-07-2024):
- Refinado Front-End do projeto.

ITY 0.3.0 (01-07-2024):
- Repaginação no design e melhorias no código.

ITY 0.2.0 (28-06-2024):
- Reformulação e limpeza do código.

ITY 0.1.3 (27-06-2024):
- Término do sistema de autenticação;
- Melhorias no design;

ITY 0.1.2 (26-06-2024):
- Criação dos métodos de autenticação de login;
- Criada tela de login.

ITY 0.1.1 (24-06-2024):
- Criado o banco de dados.

ITY 0.1.0 (20-06-2024):
- Funcionalidade aplicada nos botões das telas.

ITY 0.0.4 (18-06-2024):
- Adicionada tela principal;
- Início da implementação do design.

ITY 0.0.3 (13-06-2024):
- Melhorias no Design;
- Início da construção do projeto.

ITY 0.0.2 (10-06-2024):
- Início do design.

ITY 0.0.1 (06-06-2024):
- Esboçado o esqueleto do projeto;
- Definição de telas e regras do negócio.

# :man: Contribuidores:

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/92534443?v=4" width=115><br><sub>Brunno Pedro de Oliveira</sub>](https://github.com/BlackPearlBP) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/143548075?v=4" width=115><br><sub>Gabriel Campos Fregatti Reis</sub>](https://github.com/Freegrattis) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/92793218?v=4" width=115><br><sub>Gabriel Lucas Soares</sub>](https://github.com/FlashySniper) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/143547667?v=4" width=115><br><sub>Levi Pinott</sub>](https://github.com/kagayemo) |
| :-----: | :-----: | :-----: | :-----: |

