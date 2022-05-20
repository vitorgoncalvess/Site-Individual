function entrar() {
    var emailVar = emailLogin_input.value;
    var senhaVar = senhaLogin_input.value;

    if (emailVar == "" || senhaVar == "") {
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.DINHEIRO_USUARIO = json.dinheiro;

                setTimeout(function () {
                    entrarLogin();
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
function entrarLogin() {
    loginContent.style.display = 'none'
    cadastroContent.style.display = 'none'
    contatoContent.style.display = 'none'
    money1.style.display = 'none'
    money.style.display = 'block'
    lista.style.marginLeft = '-800px'
    dinheiro.style.display = 'block'
    sessao = sessionStorage.NOME_USUARIO.split(" ")
    nomeUsuario.innerHTML = `${sessao[0]}`
    money.innerHTML = `R$${sessionStorage.DINHEIRO_USUARIO}`
    nomeUsuario.style.display = 'block'
    logo1.style.display = 'block'
    setLogin
    setTimeout(abrirLogin,100)
}