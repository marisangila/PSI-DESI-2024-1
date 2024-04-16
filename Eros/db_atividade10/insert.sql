INSERT INTO tb_fornecedores(col_descricao,col_contato1,col_contato2)
VALUES
('Chocolates Wonka',47912345678,4788445622),
('Hortifruti Tio Zico',47944557585,4788996459),
('Do Fundão Laticínios',4744513678,47963497458),
('Rei do Gado LTDA',4752471964,4712947563),
('Granja da Vovózona',47948741374,4778941294),
('Fazenda do Tio Harry',4774136485,4797854365);

INSERT INTO tb_compras(fk_ID_fornecedor,fk_ID_ingrediente,col_quantidade,col_compra_valor,col_data)
VALUES
(1,1,150,314.79,'2024-01-01'),
(2,2,200,462.64,'2024-01-03'),
(3,3,050,657.55,'2024-01-07'),
(4,4,300,549.48,'2024-01-09'),
(6,5,250,344.32,'2024-01-11');

INSERT INTO tb_ingredientes(col_descricao,col_estoque)
VALUES
('Chocolate preto',040),
('Morango',190),
('Calabresa',200),
('Frango',150),
('Champignon',100);

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
('O poder do martelo usado para forjar o Um Anel.','P',012.99,3,2),
('A espada do lendário Talion, o Patrulheiro.','P',012.99,4,3);

INSERT INTO tb_pizzas(col_descricao,col_tamanho,col_valor,fk_ID_receita,fk_ID_categoria_pi)
VALUES
('Alguém que simplesmente ENTRA em Mordor.','F',093.99,1,2),
('Feito da carne dos inimigos de Morgoth.','M',047.99,2,1),
('Bom dia!','M',039.99,5,1);

INSERT INTO tb_fila(fk_ID_pastel,fk_ID_pizza,col_quantidade,col_data,col_entrega)
VALUES
(0,1,01,'2024-02-27 15:10'),
(0,2,02,'2024-02-26 16:15'),
(0,5,03,'2024-02-25 17:20'),
(3,0,04,'2024-02-24 18:25'),
(4,0,02,'2024-02-23 19:30');

INSERT INTO tb_pedidos(fk_ID_fila,col_data,col_entrega)
VALUES
(1,'2024-02-27 15:10',1),
(2,'2024-02-26 16:15',0),
(3,'2024-02-25 17:20',1),
(4,'2024-02-24 18:25',0),
(5,'2024-02-23 19:30',1);

INSERT INTO tb_entregadores(col_nome,col_data_nasc,col_salario,col_adicional,col_prazo,col_cpf,col_cnh,col_pis)
VALUES
('','0000-00-00',0000.00,00,'00:00',00000000000,000000000000,000000000000),
('','0000-00-00',0000.00,00,'00:00',00000000000,000000000000,000000000000),
('','0000-00-00',0000.00,00,'00:00',00000000000,000000000000,000000000000),
('','0000-00-00',0000.00,00,'00:00',00000000000,000000000000,000000000000),
('','0000-00-00',0000.00,00,'00:00',00000000000,000000000000,000000000000);

INSERT INTO tb_entregas(fk_ID_pedido,fk_ID_entregador,col_endereco,col_saida,col_entregue)
VALUES
(0,0,'','00:00','00:00',0),
(0,0,'','00:00','00:00',0),
(0,0,'','00:00','00:00',0),
(0,0,'','00:00','00:00',0),
(0,0,'','00:00','00:00',0);