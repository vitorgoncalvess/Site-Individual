x = 1
y = 2
z = 1
c = 1
v = 1
b = 1
loginC = 0
cadastroC = 0
contatoC = 0
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
        if (x == 1) {
            location.href = 'https://www.topper.com.br/'
        } else if (x == 2) {
            location.href = 'https://www.sptech.school/'
        } else if (x == 3) {
            location.href = 'https://www.hermespardini.com.br/blog/?p=237'
        }
})
function mudarCor() {
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
document.getElementById('cadastroContent').addEventListener('click', function abrirCadastro() {
    v++
    if (v % 2 == 0) {
    containerCadastro.style.display = 'block'
    containerCadastroHide.style.display = 'none'
    containerLogin.style.display = 'none'
    b = 1
    } else {
        containerCadastro.style.display = 'none'
        containerLogin.style.display = 'none'
        containerCadastroHide.style.display = 'block'
    }
})
document.getElementById('loginContent').addEventListener('click', function abrirLogin() {
    b++
    if (b % 2 == 0) {
        containerLogin.style.display = 'block'
        containerCadastroHide.style.display = 'none'
        containerCadastro.style.display = 'none'
        v = 1
    } else {
        containerLogin.style.display = 'none'
        containerCadastroHide.style.display = 'block'
        containerCadastro.style.display = 'none'
        tabela.style.marginTop = `-354px`
    }
})
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