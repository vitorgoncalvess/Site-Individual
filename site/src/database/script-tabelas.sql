create database midasGain;

use midasGain;

create table usuario (
	idUsuario int PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	dataNasc date,
	cpf CHAR(11),
	senha VARCHAR(45),
	dinheiro VARCHAR(40)
) AUTO_INCREMENT = 1;

create table historico (
	horario char(8) PRIMARY KEY,
	registro VARCHAR(45),
	fkUsuario int,
	FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);