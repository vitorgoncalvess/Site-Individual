create database midasGain;

use midasGain;

create table usuario (
	idUsuario int PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	dataNasc date,
	cpf CHAR(11),
	senha VARCHAR(45),
	dinheiro INT
) AUTO_INCREMENT = 1;

create table historico (
	horario char(8) PRIMARY KEY,
	registro VARCHAR(45),
	multi VARCHAR(45),
	jogo VARCHAR(45),
	fkUsuario int,
	FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

create table endereco (
	idEndereco int PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(8),
	bairro VARCHAR(45),
	rua VARCHAR(45),
	numero VARCHAR(10),
	fkUsuario int,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
) AUTO_INCREMENT = 100;