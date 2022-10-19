var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12){
    console.log(`Nesse momento é ${hora} está cedo.`)

}else if(hora <= 18){
    console.log(`Boa tarde`)
}else {
    console.log('Boa noite')
}
