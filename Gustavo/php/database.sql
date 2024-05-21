CREATE TABLE usuario(
    pk_usuario int PRIMARY KEY AUTO_INCREMENT,
    email_usuario varchar(100) NOT NULL,
    senha_usuario varchar(500) NOT NULL,
    eh_adm_usuario bit(1) DEFAULT 0
);