var database = require("../database/config")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, dataNasc, cpf ,senha, dinheiro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, dataNasc, cpf, senha, dinheiro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, dataNasc, cpf, senha, dinheiro) VALUES ('${nome}', '${email}','${dataNasc}','${cpf}','${senha}', '${dinheiro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function upDinheiroModel(email, dinheiroStatus) {
    var instrucao = `
        UPDATE usuario SET dinheiro = "${dinheiroStatus}" WHERE email = '${email}';
    `;
    return database.executar(instrucao)
}
function historico(registro, multi, jogo, idUsuario,) {
    var instrucao = `
        INSERT INTO historico VALUES (now(), '${registro}','${multi}', '${jogo}', '${idUsuario}');
    `;
    return database.executar(instrucao)
}
function listHist() {
    var instrucao = `
        SELECT horario, registro, multi, jogo, nome FROM historico, usuario where fkUsuario = idUsuario ORDER BY multi DESC;
    `;
    return database.executar(instrucao)
}

module.exports = {
    entrar,
    cadastrar,
    upDinheiroModel,
    historico,
    listHist
};