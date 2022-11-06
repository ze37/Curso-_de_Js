function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // crianca
               img.setAttribute('src', 'CriaHome.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','jovhome2.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src','adulthome.png')
            }else {
                // Idoso
                img.setAttribute('src','idoso.png')
                
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // crianca
                img.setAttribute('src','criança-mulher.png')

            }else if (idade < 21){
                // jovem
                img.setAttribute('src','jovem-mulher.png')

            }else if (idade < 50){
                // Adulto
                img.setAttribute('src','adulto-mulher.png')
            }else {
                // Idoso
                img.setAttribute('src','Idoso.png')
            }
        }
     
        res.style.border = '10px'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}