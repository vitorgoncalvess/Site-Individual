x = 1
    function loadPropaganda() {
        setInterval(loadPropagandaP, 5000)
    }
    function loadPropagandaP() {
        console.log('mudo')
        x++
        if(x == 1) {
            imagem.src = "imagens/campanha-bola-1200x480.jpg"
        } else if (x == 2) {
            imagem.src = "imagens/image.psd.png"
        } else if (x == 3) {
            imagem.src = "imagens/vacina.png"
        } else if (x == 4) {
            x = 0
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