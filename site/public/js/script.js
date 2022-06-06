
x = 1
y = 2
z = 1
c = 1
v = 1
b = 1
s = 1
depCont = 1
loginC = 0
cadastroC = 0
contatoC = 0
blurCheck = false

function validarSessao() {
    if (sessionStorage.NOME_USUARIO != undefined) {
        loginContent.style.display = 'none'
        cadastroContent.style.display = 'none'
        contatoContent.style.display = 'none'
        money1.style.display = 'none'
        money.style.display = 'block'
        lista.style.marginLeft = '-800px'
        dinheiro.style.display = 'block'
        sessao = sessionStorage.NOME_USUARIO.split(" ")
        dinheiroSessao = sessionStorage.DINHEIRO_USUARIO
        nomeUsuario.innerHTML = `${sessao[0]}`
        money.innerHTML = `R$${Number(dinheiroSessao).toFixed(2)}`
        nomeUsuario.style.display = 'block'
        logo1.style.display = 'block'
        document.getElementById('cadastroContent').removeEventListener('click', abrirCadastro)
    }
}

function sacarShow() {
    s++
    if (s % 2 == 0) {
        sacarContainer.style.display = 'block'
        blurCheck = true
        blur1.style.filter = 'blur(2px)'
        blur2.style.filter = 'blur(2px)'
        setTimeout(timerSairBotao, 100)
        loginContent.style.cursor = 'default'
        cadastroContent.style.cursor = 'default'
        contatoContent.style.cursor = 'default'
        imagem.style.cursor = 'default'
        } else {
            sacarContainer.style.display = 'none'
            blurCheck = false
            blur1.style.filter = 'blur(0px)'
            blur2.style.filter = 'blur(0px)'
        }
}

function sacar() {
    if (sessionStorage.DINHEIRO_USUARIO < 0 || sessionStorage.NOME_USUARIO == undefined || cpfInput.value == '' || qtdSacar.value > sessionStorage.DINHEIRO_USUARIO) {
        return false 
    } else {
        sessionStorage.DINHEIRO_USUARIO = parseInt(sessionStorage.DINHEIRO_USUARIO) - parseInt(qtdSacar.value)
        emailVar = sessionStorage.EMAIL_USUARIO
        dinheiroVar = sessionStorage.DINHEIRO_USUARIO
        
        fetch("/usuarios/upDinheiro", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
              emailServer: emailVar,
              dinheiroStatusServer: dinheiroVar,
            }),
          })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
      
            if (resposta.ok) {
              setTimeout(() => {
                console.log("Dinheiro Atualizado");
              }, 2000);
            } else {
              throw "Houve um erro ao tentar atualizar o dinheiro";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
          money.innerHTML = `R$${sessionStorage.DINHEIRO_USUARIO}`
          sairBotao()
          limparInputs()
    }
}

function efectDep() {
    numCartao = numeroCartao.value
    quantidadeDep = qtdInput.value
    if (numCartao == '') {
        numeroCartao.style.backgroundColor = '#640000'
        setTimeout(voltarCor, 3000)
    } 
    if (nomeTitular.value == '') {
        nomeTitular.style.backgroundColor = '#640000'
        setTimeout(voltarCor, 3000)
    } 
    if (dataVenc.value == '') {
        dataVenc.style.backgroundColor = '#640000'
        setTimeout(voltarCor, 3000)
    } 
    if (codigoSeg.value == '') {
        codigoSeg.style.backgroundColor = '#640000'
        setTimeout(voltarCor, 3000) 
    }
    if (quantidadeDep == '') {
        qtdInput.style.backgroundColor = '#640000'
        setTimeout(voltarCor, 3000)
    }
    if (quantidadeDep < 0) {
        qtdInput.value = ''
        qtdInput.placeholder = 'Valor Invalido'
        setTimeout(voltarInput, 3000)
    }
    if (numCartao.length < 19) {
        numeroCartao.value = ''
        numeroCartao.style.backgroundColor = '#640000'
        numeroCartao.placeholder = 'Numero Invalido'
        setTimeout(voltarInputCartao, 3000)
    }
    if (quantidadeDep > 0 && numCartao.length == 19 && nomeTitular.value != '' && dataVenc.value.length == 5 && codigoSeg.value.length == 3) {
        
        sessionStorage.DINHEIRO_USUARIO = parseInt(sessionStorage.DINHEIRO_USUARIO) + parseInt(quantidadeDep)
        emailVar = sessionStorage.EMAIL_USUARIO
        dinheiroVar = sessionStorage.DINHEIRO_USUARIO
        
        fetch("/usuarios/upDinheiro", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
              emailServer: emailVar,
              dinheiroStatusServer: dinheiroVar,
            }),
          })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
      
            if (resposta.ok) {
              setTimeout(() => {
                console.log("Dinheiro Atualizado");
              }, 2000);
            } else {
              throw "Houve um erro ao tentar atualizar o dinheiro";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
          money.innerHTML = `R$${sessionStorage.DINHEIRO_USUARIO}`
          sairBotao()
          limparInputs()
    }
}

function limparInputs() {
    numeroCartao.value = ''
    nomeTitular.value = ''
    dataVenc.value = ''
    codigoSeg.value = ''
    qtdInput.value = ''
    cpfInput.value = ''
    qtdSacar.value = ''
}

function validarCartao() {
    if (numeroCartao.value.length == 4) {
        numeroCartao.value = numeroCartao.value + ' '
    } else if (numeroCartao.value.length == 9) {
        numeroCartao.value = numeroCartao.value + ' '
    } else if (numeroCartao.value.length == 14) {
        numeroCartao.value = numeroCartao.value + ' '
    } else if (numeroCartao.value.length > 18) {
        numeroCartao.value = numeroCartao.value.substring(0, 18)
    }
}

function validarData() {
    if (dataVenc.value.length == 2) {
        dataVenc.value = dataVenc.value + '/'
    }  else if (dataVenc.value.length > 4) {
        dataVenc.value = dataVenc.value.substring(0, 4)
    }
}

function validarCodigo() {
    if (codigoSeg.value.length > 2) {
        codigoSeg.value = codigoSeg.value.substring(0, 2)
    }
}

function voltarInput() {
    qtdInput.value = ''
}
function voltarInputCartao() {
    numeroCartao.placeholder = ''
}

function voltarCor() {
    numeroCartao.style.backgroundColor = '#161616'
    nomeTitular.style.backgroundColor = '#161616'
    dataVenc.style.backgroundColor = '#161616'
    codigoSeg.style.backgroundColor = '#161616'
    qtdInput.style.backgroundColor = '#161616'
}

function loadPropaganda() {
    setInterval(loadPropagandaP, 5000)
}

function loadPropagandaP() {
    x++
    if (x == 1) {
        imagem.src = "imagens/campanha-bola-1200x480.jpg"
    } else if (x == 2) {
        imagem.src = "imagens/image.psd.png"
    } else if (x == 3) {
        imagem.src = "imagens/vacina.png"
    } else if (x == 4) {
        x = 1
        imagem.src = "imagens/campanha-bola-1200x480.jpg"
    }
}

function aparecerJogos() {
    y++
    z = 1
    c = 1
    if (y % 2 == 0) {
        jogosJogos.style.display = 'block'
        jogosJogos2.style.display = 'none'
        jogosJogos3.style.display = 'none'
    } else {
        jogosJogos.style.display = 'none'
    }
}

function aparecerJogos1() {
    z++
    y = 1
    c = 1
    if (z % 2 == 0) {
        jogosJogos2.style.display = 'block'
        jogosJogos.style.display = 'none'
        jogosJogos3.style.display = 'none'
    } else {
        jogosJogos2.style.display = 'none'
    }
}

function aparecerJogos2() {
    c++
    y = 1
    z = 1
    if (c % 2 == 0) {
        jogosJogos3.style.display = 'block'
        jogosJogos.style.display = 'none'
        jogosJogos2.style.display = 'none'
    } else {
        jogosJogos3.style.display = 'none'
    }
}
document.getElementById('imagem').addEventListener('click', function goToSite() {
    if (blurCheck) {
        return false
    } else {
        if (x == 1) {
            location.href = 'https://www.topper.com.br/'
        } else if (x == 2) {
            location.href = 'https://www.sptech.school/'
        } else if (x == 3) {
            location.href = 'https://www.hermespardini.com.br/blog/?p=237'
        }
    }
})

function mudarCor() {
    if (blurCheck) {
        return false
    } else {
        if (loginC == 1) {
            loginContent.style.color = '#2bff00'
        } else if (loginC == 0) {
            loginContent.style.color = '#2ccf0b'
        }
        if (cadastroC == 1) {
            cadastroContent.style.color = '#2bff00'
        } else if (cadastroC == 0) {
            cadastroContent.style.color = '#2ccf0b'
        }
        if (contatoC == 1) {
            contatoContent.style.color = '#2bff00'
        } else if (contatoC == 0) {
            contatoContent.style.color = '#2ccf0b'
        }
    }
}
document.getElementById('cadastroContent').addEventListener('click', abrirCadastro)
function abrirCadastro() {
    v++
    if (v % 2 == 0) {
        containerCadastro.style.display = 'block'
        containerCadastroHide.style.display = 'block'
        containerLogin.style.display = 'none'
        blur1.style.filter = 'blur(2px)'
        blur2.style.filter = 'blur(2px)'
        imagem.style.cursor = 'default'
        loginContent.style.cursor = 'default'
        cadastroContent.style.cursor = 'default'
        contatoContent.style.cursor = 'default'
        blurCheck = true
        b = 1
        setTimeout(timerSairBotao, 100)
    } else {
        containerCadastro.style.display = 'none'
        containerLogin.style.display = 'none'
        containerCadastroHide.style.display = 'block'
        blur1.style.filter = 'blur(0px)'
        blur2.style.filter = 'blur(0px)'
        imagem.style.cursor = 'pointer'
        blurCheck = false
        loginContent.style.cursor = 'pointer'
        cadastroContent.style.cursor = 'pointer'
        contatoContent.style.cursor = 'pointer'
        tabela.style.marginTop = '-474px'
    }
}

function timerSairBotao() {
    document.getElementById("blur1").addEventListener('click', sairBotao)
    document.getElementById("blur2").addEventListener('click', sairBotao)
}
document.getElementById('loginContent').addEventListener('click', abrirLogin)

function abrirLogin() {
    b++
    if (b % 2 == 0) {
        containerLogin.style.display = 'block'
        containerCadastro.style.display = 'none'
        containerCadastroHide.style.display = 'none'
        blurCheck = true
        blur1.style.filter = 'blur(2px)'
        blur2.style.filter = 'blur(2px)'
        setTimeout(timerSairBotao, 100)
        loginContent.style.cursor = 'default'
        cadastroContent.style.cursor = 'default'
        contatoContent.style.cursor = 'default'
        imagem.style.cursor = 'default'
        tabela.style.marginTop = '-429px'
        v = 1
    } else {
        containerLogin.style.display = 'none'
        containerCadastro.style.display = 'none'
        containerCadastroHide.style.display = 'block'
        blurCheck = false
        blur1.style.filter = 'blur(0px)'
        blur2.style.filter = 'blur(0px)'
    }
}

function deposito() {
    depCont++
    if (depCont % 2 == 0) {
    depositarContainer.style.display = 'block'
    containerCadastroHide.style.display = 'block'
    blurCheck = true
    blur1.style.filter = 'blur(2px)'
    blur2.style.filter = 'blur(2px)'
    setTimeout(timerSairBotao, 100)
    loginContent.style.cursor = 'default'
    cadastroContent.style.cursor = 'default'
    contatoContent.style.cursor = 'default'
    imagem.style.cursor = 'default'
    } else {
        depositarContainer.style.display = 'none'
        containerCadastroHide.style.display = 'block'
        blurCheck = false
        blur1.style.filter = 'blur(0px)'
        blur2.style.filter = 'blur(0px)'
    }
}

function setLogin() {
    b = 0
}
document.getElementById("loginContent").addEventListener('mouseover', function loginCheck() {
    loginC = 1
    mudarCor()
})
document.getElementById("loginContent").addEventListener('mouseout', function loginOff() {
    loginC = 0
    mudarCor()
})
document.getElementById('cadastroContent').addEventListener('mouseover', function cadastroCheck() {
    cadastroC = 1
    mudarCor()
})
document.getElementById('cadastroContent').addEventListener('mouseout', function cadastroOff() {
    cadastroC = 0
    mudarCor()
})
document.getElementById('contatoContent').addEventListener('mouseover', function contatoCheck() {
    contatoC = 1
    mudarCor()
})
document.getElementById('contatoContent').addEventListener('mouseout', function contatoOff() {
    contatoC = 0
    mudarCor()
})

function sairBotao() {
    containerCadastro.style.display = 'none'
    containerCadastroHide.style.display = 'block'
    containerLogin.style.display = 'none'
    depositarContainer.style.display = 'none'
    sacarContainer.style.display = 'none'
    blur1.style.filter = 'blur(0px)'
    blur2.style.filter = 'blur(0px)'
    imagem.style.cursor = 'pointer'
    tabela.style.marginTop = '-474px'
    cadastroContent.style.color = '#2ccf0b'
    loginContent.style.color = '#2ccf0b'
    contatoContent.style.color = '#2ccf0b'
    blurCheck = false
    v = b = depCont = s = 1
    loginContent.style.cursor = 'pointer'
    cadastroContent.style.cursor = 'pointer'
    contatoContent.style.cursor = 'pointer'
    document.getElementById("blur1").removeEventListener('click', sairBotao)
    document.getElementById("blur2").removeEventListener('click', sairBotao)
}
function voltarForma() {
    cartaoForma.style.opacity = '1'
    boletoForma.style.opacity = '1'
    pixForma.style.opacity = '1'
}
function sumirForma() {
    cartaoDisplay.style.display = 'none'
    boletoDisplay.style.display = 'none'
    pixDisplay.style.display = 'none'
}
function cartaoShow() {
    voltarForma()
    sumirForma()
    cartaoDisplay.style.display = 'block'
    cartaoForma.style.opacity = '0.7'
}
function boletoShow() {
    voltarForma()
    sumirForma()
    boletoDisplay.style.display = 'flex'
    boletoForma.style.opacity = '0.7'
}
function pixShow() {
    voltarForma()
    sumirForma()
    pixDisplay.style.display = 'flex'
    pixForma.style.opacity = '0.7'
}
function listHist() {
    fetch("/usuarios/listHist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                listJson = json
            });

        } else {

            console.log("Houve um erro ao tentar realizar a atualização do historico");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    setTimeout(listarHistorico, 1000)
}
function listarHistorico() {
    for (let i = 0; i < 11; i++) {
        containerJogos.innerHTML += `<div class="historicoJogo"><div class="nomeHist">${listJson[i].nome}</div> <div class="regHist">R$${listJson[i].registro}</div> <div class="multiHist">${listJson[i].multi}x</div> <div class="jogoHist">${listJson[i].jogo}</div> <div class="horarioHist">${listJson[i].horario}</div></div>`
    }
}