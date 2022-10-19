var idade = 60
console.log((`Você tém ${idade} anos .`))
if (idade < 16){
    console.log('Você Não vota .')
}else if (idade < 18 || idade >= 60){
    console.log('Voto opcional')
    
}else {
    console.log('voto obrgatorio')
}
