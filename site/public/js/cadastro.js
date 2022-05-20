function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var dataNascVar = data_input.value;
    var cpfVar = cpf_input.value;
    var senhaVar = senha_input.value;
    var dinheiroVar = 0
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    if (nomeVar == "" || emailVar == "" || dataNascVar == "" || cpfVar == "" ||  senhaVar == "" || confirmacaoSenhaVar == "") {
        return false;
    }
    if (senhaVar != confirmacaoSenhaVar) {
        return false
    }
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            dataNascServer: dataNascVar,
            cpfServer: cpfVar,
            senhaServer: senhaVar,
            dinheiroServer : dinheiroVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            setTimeout(() => {
                abrirLogin();
            }, 2000)
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}