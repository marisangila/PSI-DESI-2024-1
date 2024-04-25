SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `DB_Senhor_dos_Pasteis` DEFAULT CHARACTER SET utf8 ;
USE `DB_Senhor_dos_Pasteis` ;

DROP TABLE IF EXISTS `tb_fornecedores`;
CREATE TABLE `tb_fornecedores` (
  `ID_fornecedor` int NOT NULL AUTO_INCREMENT,
  `col_contato1` varchar(45) NOT NULL,
  `col_contato2` varchar(45) NOT NULL,
  `col_descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_fornecedor`),
  UNIQUE KEY `ID_fornecedor_UNIQUE` (`ID_fornecedor`),
  UNIQUE KEY `col_contato1_UNIQUE` (`col_contato1`),
  UNIQUE KEY `col_contato2_UNIQUE` (`col_contato2`)
);

DROP TABLE IF EXISTS `tb_ingredientes`;
CREATE TABLE `tb_ingredientes` (
  `ID_ingrediente` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  `col_estoque` int NOT NULL,
  PRIMARY KEY (`ID_ingrediente`),
  UNIQUE KEY `ID_ingrediente_UNIQUE` (`ID_ingrediente`),
  UNIQUE KEY `col_descricao_UNIQUE` (`col_descricao`)
);

DROP TABLE IF EXISTS `tb_compras`;
CREATE TABLE `tb_compras` (
  `ID_compra` int NOT NULL AUTO_INCREMENT,
  `col_compra_valor` decimal(6,2) NOT NULL,
  `col_quantidade` int NOT NULL,
  `col_data` date NOT NULL,
  `fk_ID_fornecedor` int NOT NULL,
  `fk_ID_ingrediente` int NOT NULL,
  PRIMARY KEY (`ID_compra`),
  UNIQUE KEY `ID_compra_UNIQUE` (`ID_compra`),
  KEY `fk_ID_fornecedor_idx` (`fk_ID_fornecedor`),
  KEY `fk_ID_ingrediente_idx` (`fk_ID_ingrediente`),
  CONSTRAINT `fk_ID_fornecedor` FOREIGN KEY (`fk_ID_fornecedor`) REFERENCES `tb_fornecedores` (`ID_fornecedor`),
  CONSTRAINT `fk_ID_ingrediente` FOREIGN KEY (`fk_ID_ingrediente`) REFERENCES `tb_ingredientes` (`ID_ingrediente`)
); 

DROP TABLE IF EXISTS `tb_receitas`;
CREATE TABLE `tb_receitas` (
  `ID_receita` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_receita`),
  UNIQUE KEY `ID_receita_UNIQUE` (`ID_receita`),
  UNIQUE KEY `col_descricao_UNIQUE` (`col_descricao`)
); 

DROP TABLE IF EXISTS `tb_cardapios`;
CREATE TABLE `tb_cardapios` (
  `ID_cardapio` int NOT NULL AUTO_INCREMENT,
  `fk_ID_receita` int NOT NULL,
  `fk_ID_ingrediente` int NOT NULL,
  PRIMARY KEY (`ID_cardapio`,`fk_ID_receita`,`fk_ID_ingrediente`),
  KEY `fk_tb_cardapios_tb_receitas1_idx` (`fk_ID_receita`),
  KEY `fk_tb_cardapios_tb_ingredientes1_idx` (`fk_ID_ingrediente`),
  CONSTRAINT `fk_tb_cardapios_tb_ingredientes1` FOREIGN KEY (`fk_ID_ingrediente`) REFERENCES `tb_ingredientes` (`ID_ingrediente`),
  CONSTRAINT `fk_tb_cardapios_tb_receitas1` FOREIGN KEY (`fk_ID_receita`) REFERENCES `tb_receitas` (`ID_receita`)
) 

DROP TABLE IF EXISTS `tb_categorias_pasteis`;
CREATE TABLE `tb_categorias_pasteis` (
  `ID_categoria_pa` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_categoria_pa`),
  UNIQUE KEY `co_descricao_UNIQUE` (`col_descricao`)
);

DROP TABLE IF EXISTS `tb_categorias_pizzas`;
CREATE TABLE `tb_categorias_pizzas` (
  `ID_categoria_pi` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_categoria_pi`),
  UNIQUE KEY `ID_categoria_p_UNIQUE` (`ID_categoria_pi`)
);

DROP TABLE IF EXISTS `tb_pasteis`;
CREATE TABLE `tb_pasteis` (
  `ID_pastel` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  `col_tamanho` tinyint(1) NOT NULL,
  `col_valor` decimal(4,2) NOT NULL,
  `fk_ID_receita` int NOT NULL,
  `fk_ID_categoria_pa` int NOT NULL,
  PRIMARY KEY (`ID_pastel`),
  UNIQUE KEY `ID_pasteis_UNIQUE` (`ID_pastel`),
  KEY `fk_tb_pasteis_tb_receitas1_idx` (`fk_ID_receita`),
  KEY `fk_tb_pasteis_tb_categorias_pasteis1_idx` (`fk_ID_categoria_pa`),
  CONSTRAINT `fk_tb_pasteis_tb_categorias_pasteis1` FOREIGN KEY (`fk_ID_categoria_pa`) REFERENCES `tb_categorias_pasteis` (`ID_categoria_pa`),
  CONSTRAINT `fk_tb_pasteis_tb_receitas1` FOREIGN KEY (`fk_ID_receita`) REFERENCES `tb_receitas` (`ID_receita`)
); 

DROP TABLE IF EXISTS `tb_pizzas`;
CREATE TABLE `tb_pizzas` (
  `ID_pizza` int NOT NULL AUTO_INCREMENT,
  `col_descricao` varchar(50) NOT NULL,
  `col_tamanho` char(1) NOT NULL,
  `col_valor` decimal(4,2) NOT NULL,
  `fk_ID_receita` int NOT NULL,
  `fk_ID_categoria_pi` int NOT NULL,
  PRIMARY KEY (`ID_pizza`),
  UNIQUE KEY `ID_pasteis_UNIQUE` (`ID_pizza`),
  KEY `fk_tb_pizzas_tb_receitas1_idx` (`fk_ID_receita`),
  KEY `fk_tb_pizzas_tb_categorias_pizzas1_idx` (`fk_ID_categoria_pi`),
  CONSTRAINT `fk_tb_pizzas_tb_categorias_pizzas1` FOREIGN KEY (`fk_ID_categoria_pi`) REFERENCES `tb_categorias_pizzas` (`ID_categoria_pi`),
  CONSTRAINT `fk_tb_pizzas_tb_receitas1` FOREIGN KEY (`fk_ID_receita`) REFERENCES `tb_receitas` (`ID_receita`)
);

DROP TABLE IF EXISTS `tb_pedidos`;
CREATE TABLE `tb_pedidos` (
  `ID_pedido` int NOT NULL AUTO_INCREMENT,
  `col_data` datetime NOT NULL,
  `col_entrega` tinyint NOT NULL,
  `fk_ID_fila` int NOT NULL,
  `fk_ID_cliente` int NOT NULL,
  PRIMARY KEY (`ID_pedido`),
  UNIQUE KEY `ID_fila_UNIQUE` (`ID_pedido`),
  KEY `fk_ID_fila_idx` (`fk_ID_fila`),
  KEY `fk_ID_cliente_idx` (`fk_ID_cliente`),
  CONSTRAINT `fk_ID_cliente` FOREIGN KEY (`fk_ID_cliente`) REFERENCES `tb_clientes` (`ID_cliente`),
  CONSTRAINT `fk_ID_fila` FOREIGN KEY (`fk_ID_fila`) REFERENCES `tb_fila` (`ID_fila`)
);

DROP TABLE IF EXISTS `tb_fila`;
CREATE TABLE `tb_fila` (
  `ID_fila` int NOT NULL AUTO_INCREMENT,
  `col_quantidade` int NOT NULL,
  `col_entrega` tinyint NOT NULL,
  `fk_ID_pastel` int DEFAULT NULL,
  `fk_ID_pizza` int DEFAULT NULL,
  PRIMARY KEY (`ID_fila`),
  UNIQUE KEY `ID_pedido_UNIQUE` (`ID_fila`),
  KEY `fk_tb_pedidos_tb_pasteis1_idx` (`fk_ID_pastel`),
  KEY `fk_tb_pedidos_tb_pizzas1_idx` (`fk_ID_pizza`),
  CONSTRAINT `fk_ID_pastel` FOREIGN KEY (`fk_ID_pastel`) REFERENCES `tb_pasteis` (`ID_pastel`),
  CONSTRAINT `fk_ID_pizza` FOREIGN KEY (`fk_ID_pizza`) REFERENCES `tb_pizzas` (`ID_pizza`)
);

DROP TABLE IF EXISTS `tb_entregadores`;
CREATE TABLE `tb_entregadores` (
  `ID_entregador` int NOT NULL AUTO_INCREMENT,
  `col_nome` varchar(100) NOT NULL,
  `col_data_nasc` date NOT NULL,
  `col_salario` decimal(6,2) NOT NULL,
  `col_adicional` int NOT NULL,
  `col_prazo` time NOT NULL,
  `col_cpf` bigint NOT NULL,
  `col_cnh` bigint NOT NULL,
  `col_clt` bigint NOT NULL,
  PRIMARY KEY (`ID_entregador`),
  UNIQUE KEY `ID_entregador_UNIQUE` (`ID_entregador`),
  UNIQUE KEY `col_pis_UNIQUE` (`col_clt`),
  UNIQUE KEY `col_cnh_UNIQUE` (`col_cnh`),
  UNIQUE KEY `col_cpf_UNIQUE` (`col_cpf`)
);

DROP TABLE IF EXISTS `tb_clientes`;
CREATE TABLE `tb_clientes` (
  `ID_cliente` int NOT NULL,
  `col_nome` varchar(45) NOT NULL,
  `col_cpf` varchar(45) DEFAULT NULL,
  `col_telefofo1` int NOT NULL,
  `col_telefofo2` int DEFAULT NULL,
  PRIMARY KEY (`ID_cliente`),
  UNIQUE KEY `ID_cliente_UNIQUE` (`ID_cliente`),
  UNIQUE KEY `col_telefofo1_UNIQUE` (`col_telefofo1`),
  UNIQUE KEY `col_cpf_UNIQUE` (`col_cpf`),
  UNIQUE KEY `col_telefofo2_UNIQUE` (`col_telefofo2`)
);

DROP TABLE IF EXISTS `tb_entregas`;
CREATE TABLE `tb_entregas` (
  `ID_entrega` int NOT NULL AUTO_INCREMENT,
  `col_endereco` varchar(45) NOT NULL,
  `col_saida` time NOT NULL,
  `col_entregue` time NOT NULL,
  `fk_ID_pedido` int NOT NULL,
  `fk_ID_entregador` int NOT NULL,
  `fk_ID_cliente` int NOT NULL,
  PRIMARY KEY (`ID_entrega`),
  UNIQUE KEY `ID_entrega_UNIQUE` (`ID_entrega`),
  KEY `fk_tb_entregas_tb_pedidos_idx` (`fk_ID_pedido`),
  KEY `fk_tb_entregas_tb_entregadores1_idx` (`fk_ID_entregador`),
  KEY `fk_ID_cliente_idx` (`fk_ID_cliente`),
  CONSTRAINT `fk_tb_entregas_tb_clientes` FOREIGN KEY (`fk_ID_cliente`) REFERENCES `tb_clientes` (`ID_cliente`),
  CONSTRAINT `fk_tb_entregas_tb_entregadores1` FOREIGN KEY (`fk_ID_entregador`) REFERENCES `tb_entregadores` (`ID_entregador`),
  CONSTRAINT `fk_tb_entregas_tb_pedidos` FOREIGN KEY (`fk_ID_pedido`) REFERENCES `tb_fila` (`ID_fila`)
);

ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
