/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem vindo ao jogo de BlackJack!")
//console.log("Boas vindas ao jogo de BlackJack!")
let inicioRodada = confirm("Vamos iniciar uma rodada?")

if (inicioRodada) {
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaUsuario3 = comprarCarta()
   const somaUsuario1 = cartaUsuario1.valor + cartaUsuario2.valor + cartaUsuario3.valor
   const somaUsuario2 = cartaUsuario1.valor + cartaUsuario2.valor
   const cartaComp1 = comprarCarta()
   const cartaComp2 = comprarCarta()
   const somaComp1 = cartaComp1.valor + cartaComp2.valor
   let resultado = ""

   const novaRodada = confirm(`Suas Cartas são ${cartaUsuario1.texto} e ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComp1.texto} 
Deseja comprar mais uma carta?`)
   //console.log(`Computador - cartas: ${cartaComp1.texto} e ${cartaComp2.texto} => pontuação total = ${somaComp1} pontos.`)


   if (novaRodada === true) {
      if (somaUsuario1 > 21) {
         resultado = "Infelizmente você estourou a pontuação, Computador Ganhou!!!"
      }
      if (somaComp1 > 21) {
         resultado = "Computador estourou a pontuação, você Ganhouu!!!"
      }
      if (somaUsuario1 > somaComp1) {
         resultado = "Parabéns Você Ganhouu!!!"
      }
      if (somaUsuario1 < somaComp1) {
         resultado = "O Computador Ganhouu!!! Já era! as máquinas vão dominar o mundo =o"
      }
      if (somaUsuario1 === somaComp1) {
         resultado = "Empatouu!!!"
      }
      alert(`Suas Cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} ${cartaUsuario3.texto} = Pontuação: ${somaUsuario1}
Computador - Cartas ${cartaComp1.texto} ${cartaComp2.texto} = Pontuação: ${somaComp1}
${resultado}`)
   } else {
      if (somaUsuario2 > 21) {
         resultado = "Infelizmente você estourou a pontuação, Computador Ganhou!!!"
      }
      if (somaComp1 > 21) {
         resultado = "Computador estourou a pontuação, você Ganhouu!!!"
      }
      if (somaUsuario2 > somaComp1) {
         resultado = "Parabéns Você Ganhouu!!!"
      }
      if (somaUsuario2 < somaComp1) {
         resultado = "O Computador Ganhouu!!! Já era! as máquinas vão dominar o mundo =o"
      }
      if (somaUsuario2 === somaComp1) {
         resultado = "Empatouu!!!"
      }
      alert(`Suas Cartas são ${cartaUsuario1.texto} ${cartaUsuario2.texto} = Pontuação: ${somaUsuario2}
Computador - Cartas ${cartaComp1.texto} ${cartaComp2.texto} = Pontuação: ${somaComp1}
${resultado}`)
   }


} else {
   console.log("O jogo acabou!")
   alert("O jogo acabou!")
}