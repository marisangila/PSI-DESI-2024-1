SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO tb_fornecedores(col_descricao,col_contato1,col_contato2)
VALUES
('Chocolates Wonka',47912345678,4788445622),
('Hortifruti Tio Zico',47944557585,4788996459),
('Do Fundão Laticínios',4744513678,47963497458),
('Rei do Gado LTDA',4752471964,4712947563),
('Granja da Vovózona',47948741374,4778941294),
('Fazenda do Tio Harry',4774136485,4797854365);

INSERT INTO tb_ingredientes(col_descricao,col_estoque)
VALUES
('Chocolate preto',040),
('Morango',190),
('Calabresa',200),
('Frango',150),
('Champignon',100);

INSERT INTO tb_compras(fk_ID_fornecedor,fk_ID_ingrediente,col_quantidade,col_compra_valor,col_data)
VALUES
(1,1,150,314.79,'2024-01-01'),
(2,2,200,462.64,'2024-01-03'),
(3,3,050,657.55,'2024-01-07'),
(4,4,300,549.48,'2024-01-09'),
(6,5,250,344.32,'2024-01-11');


INSERT INTO tb_receitas(col_descricao)
VALUES
('Simplesmente Mordor'),
('Onze Aneis'),
('Martelo de Celembrimbor'),
('Espada de Talion'),
('Favorita do Gandalf');

INSERT INTO tb_cardapios(fk_ID_receita,fk_ID_ingrediente)
VALUES
(1,1),
(2,3),
(3,4),
(4,2),
(5,5);

INSERT INTO tb_categorias_pasteis(col_descricao)
VALUES
('Frito'),
('Assado'),
('Vegano');

INSERT INTO tb_categorias_pizzas(col_descricao)
VALUES
('Salgada'),
('Doce');

INSERT INTO tb_pasteis(col_descricao,col_tamanho,col_valor,fk_ID_receita,fk_ID_categoria_pa)
VALUES
('O poder do martelo usado para forjar o Um Anel.',2,012.99,3,2),
('A espada do lendário Talion, o Patrulheiro.',2,012.99,4,3);

INSERT INTO tb_pizzas(col_descricao,col_tamanho,col_valor,fk_ID_receita,fk_ID_categoria_pi)
VALUES
('Alguém que simplesmente ENTRA em Mordor.',5,093.99,1,2),
('Feito da carne dos inimigos de Morgoth.',3,047.99,2,1),
('Bom dia!','M',039.99,5,1);

INSERT INTO tb_fila(fk_ID_pastel,fk_ID_pizza,col_quantidade,col_entrega)
VALUES
(0,1,01,1),
(0,2,02,0),
(0,5,03,1),
(3,0,04,0),
(4,0,02,1);

INSERT INTO tb_pedidos(fk_ID_cliente,fk_ID_fila,col_data,col_entrega)
VALUES
(5,1,'2024-02-27 15:30',1),
(4,2,'2024-02-26 16:55',0),
(3,3,'2024-02-25 17:45',1),
(2,4,'2024-02-24 18:55',0),
(1,5,'2024-02-23 20:00',1);

INSERT INTO tb_entregadores(col_nome,col_data_nasc,col_salario,col_adicional,col_prazo,col_cpf,col_cnh,col_clt)
VALUES
('Robervaldo','1987-04-13',2000.00,00,'30:00',11223344556,101010101010,919191919191),
('Ewandálton','1988-06-15',2000.00,00,'30:00',14725836974,212121212121,929292929292),
('Lumisbertho','1983-09-12',2000.00,00,'30:00',13467985201,323232323232,939393939393),
('Dovaquim de Souza','1320-04-07',2000.00,00,'30:00',79846513210,454545454545,949494949494),
('Mário Silva','2001-02-19',2000.00,00,'30:00',99112233778,787878787878,959595959595);

INSERT INTO tb_entregas(fk_ID_pedido,fk_ID_entregador,col_endereco,col_saida,col_entregue)
VALUES
(1,5,'Rua das Águas, 116','15:51','16:02'),
(2,4,'Rua dos Rios, 514','17:13','17:24'),
(3,3,'Rua dos Riachos, 618','18:04','18:15'),
(4,2,'Rua das Nascentes, 715','19:12','19:23'),
(5,1,'Rua das Chachoeiras, 819','20:07','20:18');

SET FOREIGN_KEY_CHECKS = 1;


DELIMITER $
CREATE TRIGGER trg_prazo AFTER INSERT
ON tb_pedidos
FOR EACH ROW
BEGIN
	SET @novopedido = LAST_INSERT_ID();
    SET @entregador = (SELECT fk_ID_entregador FROM tb_entregas WHERE fk_ID_pedido = @novopedido);
    SET @saida = (SELECT col_saida FROM tb_entregas WHERE fk_ID_entregador = @entregador);
	SET @novoprazo = CAST(@saida AS TIME) + '00:30';
END$
DELIMITER ;