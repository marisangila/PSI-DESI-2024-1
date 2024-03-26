CREATE DATABASE eros_exercicio01;

CREATE TABLE tb_series(
  pk_serie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  col_titulo VARCHAR(55) NOT NULL,
  col_subtitulo VARCHAR(55),
  col_descricao VARCHAR(55),
  col_clas_indicativa INT NOT NULL,
  col_ano_lancamento YEAR
);

CREATE TABLE tb_jogadores(
  pk_jogador INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  col_sobrenome VARCHAR(55) NOT NULL,
  col_nome VARCHAR(55) NOT NULL,
  col_email VARCHAR(55) NOT NULL,
  col_idade INT,
  col_rua VARCHAR(55),
  col_bairro VARCHAR(55),
  col_cep VARCHAR(55)
);

CREATE TABLE tb_produtos(
  pk_produto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  col_nome VARCHAR(55),
  col_descricao VARCHAR(255),
  col_data_fabricacao DATE,
  col_data_validade DATE,
  col_lote VARCHAR(55),
  col_quantidade INT,
  col_data_cadastro DATETIME
);

CREATE TABLE tb_funcionarios(
  pk_funcionario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  col_nome  VARCHAR(55) NOT NULL,
  col_sobrenome  VARCHAR(55) NOT NULL,
  col_data_nasc DATE,
  col_idade INT,
  col_cpf  VARCHAR(11) NOT NULL,
  col_cep  VARCHAR(8),
  col_celular  VARCHAR(45),
  col_email  VARCHAR(55) NOT NULL,
  col_nacionalidade VARCHAR(55),
  col_naturalidade VARCHAR(55),
  col_rg VARCHAR(55),
  col_salario DECIMAL (8,2)
);
