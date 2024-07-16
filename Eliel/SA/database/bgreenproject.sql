-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/07/2024 às 02:24
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bgreenproject`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `id_empresa` int(11) NOT NULL,
  `nome_empresa` varchar(45) NOT NULL,
  `nome_de_usuario_empresa` varchar(45) NOT NULL,
  `cnpj_empresa` varchar(18) NOT NULL,
  `email_empresa` varchar(45) NOT NULL,
  `senha_empresa` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `empresa`
--

INSERT INTO `empresa` (`id_empresa`, `nome_empresa`, `nome_de_usuario_empresa`, `cnpj_empresa`, `email_empresa`, `senha_empresa`) VALUES
(24, 'Bosch', 'bosch.brasil', '12.361.235/7213-57', 'bosch@br.bosch.com', 'd9b1d7db4cd6e70935368a1efb10e377');

-- --------------------------------------------------------

--
-- Estrutura para tabela `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(11) NOT NULL,
  `nome_evento` varchar(45) NOT NULL,
  `cep_evento` varchar(8) DEFAULT NULL,
  `pais_evento` varchar(45) DEFAULT NULL,
  `estado_evento` varchar(45) DEFAULT NULL,
  `cidade_evento` varchar(45) NOT NULL,
  `bairro_evento` varchar(45) NOT NULL,
  `rua_evento` varchar(45) NOT NULL,
  `numero_evento` varchar(5) NOT NULL,
  `fk_organizador` varchar(45) NOT NULL,
  `data_evento` date NOT NULL,
  `hora_evento` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `participacao`
--

CREATE TABLE `participacao` (
  `id_participacao` int(11) NOT NULL,
  `fk_evento` int(11) NOT NULL,
  `fk_voluntario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `posto_de_coleta`
--

CREATE TABLE `posto_de_coleta` (
  `id_posto_de_coleta` int(11) NOT NULL,
  `cep_posto_de_coleta` varchar(8) NOT NULL,
  `pais_posto_de_coleta` varchar(45) NOT NULL,
  `estado_posto_de_coleta` varchar(45) NOT NULL,
  `cidade_posto_de_coleta` varchar(45) NOT NULL,
  `bairro_posto_de_coleta` varchar(45) NOT NULL,
  `rua_posto_de_coleta` varchar(45) NOT NULL,
  `numero_posto_de_coleta` varchar(5) NOT NULL,
  `destinacao_posto_de_coleta` varchar(300) NOT NULL,
  `fk_empresa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `voluntario`
--

CREATE TABLE `voluntario` (
  `id_voluntario` int(11) NOT NULL,
  `nome_voluntario` varchar(45) NOT NULL,
  `nome_de_usuario_voluntario` varchar(45) NOT NULL,
  `email_voluntario` varchar(45) NOT NULL,
  `senha_voluntario` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Índices de tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- Índices de tabela `participacao`
--
ALTER TABLE `participacao`
  ADD PRIMARY KEY (`id_participacao`);

--
-- Índices de tabela `posto_de_coleta`
--
ALTER TABLE `posto_de_coleta`
  ADD PRIMARY KEY (`id_posto_de_coleta`);

--
-- Índices de tabela `voluntario`
--
ALTER TABLE `voluntario`
  ADD PRIMARY KEY (`id_voluntario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `participacao`
--
ALTER TABLE `participacao`
  MODIFY `id_participacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `posto_de_coleta`
--
ALTER TABLE `posto_de_coleta`
  MODIFY `id_posto_de_coleta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `voluntario`
--
ALTER TABLE `voluntario`
  MODIFY `id_voluntario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
