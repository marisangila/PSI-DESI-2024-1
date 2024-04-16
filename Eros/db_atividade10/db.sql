SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `DB_Senhor_dos_Pasteis` DEFAULT CHARACTER SET utf8 ;
USE `DB_Senhor_dos_Pasteis` ;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_fornecedores` (
  `ID_fornecedor` INT NOT NULL AUTO_INCREMENT,
  `col_contato1` VARCHAR(45) NOT NULL,
  `col_contato2` VARCHAR(45) NOT NULL,
  `col_descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_fornecedor`),
  UNIQUE INDEX `ID_fornecedor_UNIQUE` (`ID_fornecedor` ASC) VISIBLE,
  UNIQUE INDEX `col_contato1_UNIQUE` (`col_contato1` ASC) VISIBLE,
  UNIQUE INDEX `col_contato2_UNIQUE` (`col_contato2` ASC) VISIBLE)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_compras` (
  `ID_compra` INT NOT NULL AUTO_INCREMENT,
  `col_compra_valor` DECIMAL(6,2) NOT NULL,
  `col_quantidade` INT NOT NULL,
  `col_data` DATE NOT NULL,
  PRIMARY KEY (`ID_compra`),
  UNIQUE INDEX `ID_compra_UNIQUE` (`ID_compra` ASC) VISIBLE)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_ingredientes` (
  `ID_ingrediente` INT NOT NULL AUTO_INCREMENT,
  `col_descricao` VARCHAR(50) NOT NULL,
  `col_estoque` INT NOT NULL,
  PRIMARY KEY (`ID_ingrediente`),
  UNIQUE INDEX `ID_ingrediente_UNIQUE` (`ID_ingrediente` ASC) VISIBLE,
  UNIQUE INDEX `col_descricao_UNIQUE` (`col_descricao` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_receitas` (
  `ID_receita` INT NOT NULL AUTO_INCREMENT,
  `col_descricao` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID_receita`),
  UNIQUE INDEX `ID_receita_UNIQUE` (`ID_receita` ASC) VISIBLE,
  UNIQUE INDEX `col_descricao_UNIQUE` (`col_descricao` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_cardapios` (
  `ID_cardapio` INT NOT NULL,
  `tb_receitas_ID_receita` INT NOT NULL,
  `tb_ingredientes_ID_ingrediente` INT NOT NULL,
  PRIMARY KEY (`ID_cardapio`, `tb_receitas_ID_receita`, `tb_ingredientes_ID_ingrediente`),
  INDEX `fk_tb_cardapios_tb_receitas1_idx` (`tb_receitas_ID_receita` ASC) VISIBLE,
  INDEX `fk_tb_cardapios_tb_ingredientes1_idx` (`tb_ingredientes_ID_ingrediente` ASC) VISIBLE,
  CONSTRAINT `fk_tb_cardapios_tb_receitas1`
    FOREIGN KEY (`tb_receitas_ID_receita`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_receitas` (`ID_receita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_cardapios_tb_ingredientes1`
    FOREIGN KEY (`tb_ingredientes_ID_ingrediente`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_ingredientes` (`ID_ingrediente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_categorias_pasteis` (
  `ID_categoria_pa` INT NOT NULL,
  `col_descricao` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID_categoria_pa`),
  UNIQUE INDEX `co_descricao_UNIQUE` (`col_descricao` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_categorias_pizzas` (
  `ID_categoria_pi` INT NOT NULL AUTO_INCREMENT,
  `col_descricao` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID_categoria_pi`),
  UNIQUE INDEX `ID_categoria_p_UNIQUE` (`ID_categoria_pi` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_pasteis` (
  `ID_pastel` INT NOT NULL AUTO_INCREMENT,
  `col_descricao` VARCHAR(50) NOT NULL,
  `col_tamanho` TINYINT(1) NOT NULL,
  `col_valor` DECIMAL(4,2) NOT NULL,
  `tb_receitas_ID_receita` INT NOT NULL,
  `tb_categorias_pasteis_ID_categoria_pa` INT NOT NULL,
  PRIMARY KEY (`ID_pastel`),
  UNIQUE INDEX `ID_pasteis_UNIQUE` (`ID_pastel` ASC) VISIBLE,
  INDEX `fk_tb_pasteis_tb_receitas1_idx` (`tb_receitas_ID_receita` ASC) VISIBLE,
  INDEX `fk_tb_pasteis_tb_categorias_pasteis1_idx` (`tb_categorias_pasteis_ID_categoria_pa` ASC) VISIBLE,
  CONSTRAINT `fk_tb_pasteis_tb_receitas1`
    FOREIGN KEY (`tb_receitas_ID_receita`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_receitas` (`ID_receita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_pasteis_tb_categorias_pasteis1`
    FOREIGN KEY (`tb_categorias_pasteis_ID_categoria_pa`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_categorias_pasteis` (`ID_categoria_pa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_pizzas` (
  `ID_pizza` INT NOT NULL AUTO_INCREMENT,
  `col_descricao` VARCHAR(50) NOT NULL,
  `col_tamanho` CHAR NOT NULL,
  `col_valor` DECIMAL(4,2) NOT NULL,
  `tb_receitas_ID_receita` INT NOT NULL,
  `tb_categorias_pizzas_ID_categoria_pi` INT NOT NULL,
  PRIMARY KEY (`ID_pizza`),
  UNIQUE INDEX `ID_pasteis_UNIQUE` (`ID_pizza` ASC) VISIBLE,
  INDEX `fk_tb_pizzas_tb_receitas1_idx` (`tb_receitas_ID_receita` ASC) VISIBLE,
  INDEX `fk_tb_pizzas_tb_categorias_pizzas1_idx` (`tb_categorias_pizzas_ID_categoria_pi` ASC) VISIBLE,
  CONSTRAINT `fk_tb_pizzas_tb_receitas1`
    FOREIGN KEY (`tb_receitas_ID_receita`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_receitas` (`ID_receita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_pizzas_tb_categorias_pizzas1`
    FOREIGN KEY (`tb_categorias_pizzas_ID_categoria_pi`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_categorias_pizzas` (`ID_categoria_pi`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_pedidos` (
  `ID_pedido` INT NOT NULL AUTO_INCREMENT,
  `col_quantidade` INT NOT NULL,
  `col_data` DATETIME NOT NULL,
  `col_entrega` TINYINT NOT NULL,
  `tb_pasteis_ID_pastel` INT NOT NULL,
  `tb_pizzas_ID_pizza` INT NOT NULL,
  PRIMARY KEY (`ID_pedido`, `tb_pasteis_ID_pastel`, `tb_pizzas_ID_pizza`),
  UNIQUE INDEX `ID_pedido_UNIQUE` (`ID_pedido` ASC) VISIBLE,
  INDEX `fk_tb_pedidos_tb_pasteis1_idx` (`tb_pasteis_ID_pastel` ASC) VISIBLE,
  INDEX `fk_tb_pedidos_tb_pizzas1_idx` (`tb_pizzas_ID_pizza` ASC) VISIBLE,
  CONSTRAINT `fk_tb_pedidos_tb_pasteis1`
    FOREIGN KEY (`tb_pasteis_ID_pastel`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_pasteis` (`ID_pastel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_pedidos_tb_pizzas1`
    FOREIGN KEY (`tb_pizzas_ID_pizza`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_pizzas` (`ID_pizza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_entregadores` (
  `ID_entregador` INT NOT NULL AUTO_INCREMENT,
  `col_nome` VARCHAR(100) NOT NULL,
  `col_data_nasc` DATE NOT NULL,
  `col_salario` DECIMAL(6,2) NOT NULL,
  `col_adicional` INT NOT NULL,
  `col_prazo` TIME NOT NULL,
  `col_cpf` INT NOT NULL,
  `col_cnh` INT NOT NULL,
  `col_pis` INT NOT NULL,
  PRIMARY KEY (`ID_entregador`),
  UNIQUE INDEX `ID_entregador_UNIQUE` (`ID_entregador` ASC) VISIBLE,
  UNIQUE INDEX `col_pis_UNIQUE` (`col_pis` ASC) VISIBLE,
  UNIQUE INDEX `col_cnh_UNIQUE` (`col_cnh` ASC) VISIBLE,
  UNIQUE INDEX `col_cpf_UNIQUE` (`col_cpf` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `DB_Senhor_dos_Pasteis`.`tb_entregas` (
  `ID_entrega` INT NOT NULL AUTO_INCREMENT,
  `col_endereco` VARCHAR(45) NULL,
  `col_saida` DATETIME NULL,
  `col_entregue` DATETIME NULL,
  `tb_pedidos_ID_pedido` INT NOT NULL,
  `tb_entregadores_ID_entregador` INT NOT NULL,
  PRIMARY KEY (`ID_entrega`, `tb_pedidos_ID_pedido`, `tb_entregadores_ID_entregador`),
  UNIQUE INDEX `ID_entrega_UNIQUE` (`ID_entrega` ASC) VISIBLE,
  INDEX `fk_tb_entregas_tb_pedidos_idx` (`tb_pedidos_ID_pedido` ASC) VISIBLE,
  INDEX `fk_tb_entregas_tb_entregadores1_idx` (`tb_entregadores_ID_entregador` ASC) VISIBLE,
  CONSTRAINT `fk_tb_entregas_tb_pedidos`
    FOREIGN KEY (`tb_pedidos_ID_pedido`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_pedidos` (`ID_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_entregas_tb_entregadores1`
    FOREIGN KEY (`tb_entregadores_ID_entregador`)
    REFERENCES `DB_Senhor_dos_Pasteis`.`tb_entregadores` (`ID_entregador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
