x = 1
y = 2
z = 1
c = 1
v = 1
b = 1
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
      money.innerHTML = `R$${dinheiroSessao}`
      nomeUsuario.style.display = 'block'
      logo1.style.display = 'block'
    }
  }
    function loadPropaganda() {
        setInterval(loadPropagandaP, 5000)
    }
    function loadPropagandaP() {
        x++
        if(x == 1) {
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
document.getElementById('cadastroContent').addEventListener('click', function abrirCadastro() {
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
    tabela.style.marginTop = '-903px'
    setTimeout(timerSairBotao,100)
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
})
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
        tabela.style.marginTop = '-904px'
        blurCheck = true
        blur1.style.filter = 'blur(2px)'
        blur2.style.filter = 'blur(2px)'
        setTimeout(timerSairBotao,100)
        loginContent.style.cursor = 'default'
        cadastroContent.style.cursor = 'default'
        contatoContent.style.cursor = 'default'
        imagem.style.cursor = 'default'
        v = 1
    } else {
        containerLogin.style.display = 'none'
        containerCadastroHide.style.display = 'block'
        containerCadastro.style.display = 'none'
        tabela.style.marginTop = '-474px'
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
document.getElementById("loginContent").addEventListener('mouseout', function loginOff () {
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
    blur1.style.filter = 'blur(0px)'
    blur2.style.filter = 'blur(0px)'
    imagem.style.cursor = 'pointer'
    tabela.style.marginTop = '-474px'
    cadastroContent.style.color = '#2ccf0b'
    loginContent.style.color = '#2ccf0b'
    contatoContent.style.color = '#2ccf0b'
    blurCheck = false
    v = b = 1
    loginContent.style.cursor = 'pointer'
        cadastroContent.style.cursor = 'pointer'
        contatoContent.style.cursor = 'pointer'
    document.getElementById("blur1").removeEventListener('click', sairBotao)
    document.getElementById("blur2").removeEventListener('click', sairBotao)
} 