function verificar() { // Função 
    var data = new Date()
    var ano = data.getFullYear() // Data completa, ex.: 1994
    var formano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formano.value.length == 0 || Number(formano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)  // Transforma string em number
        var genero = ''
        var img = document.createElement('img') // Cria uma foto dinamicamente
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {  // .checked --> verifica
            genero = 'Homem'6
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png') // Busca a imagem no JS
            } else if(idade < 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // Centraliza usando JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adiciona um elemento em baixo
    }
}