//EXERCÍCIO 3
//=========================
//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
//EXEMPLO:
//Preço: R$60,00
//À vista: R$54,00
//Ou 3x de: R$20,00
//=========================

let preco = 60;
let avista = 10; // Desconto a vista 10%.
let toTalavista = 0;

toTalavista = (preco - (avista / 100) * preco);


console.log(`Preço: R$${preco},00 `);
console.log(`Á vista: R$${toTalavista},00`);
console.log(`Ou 3x de: R$${preco / 3},00`)