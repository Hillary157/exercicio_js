const nomes = ["Ana", "Carlos", "Carla", "Alexandre"]

const comecaComA = nomes.filter((n) => n.startsWith("A"))
console.log(comecaComA)

const primeiras = nomes.map((n) => n.charAt(0)) //mapeamento de um caractere em uma determinada posição
console.log(primeiras)

const comA = nomes.every((n) => n.startsWith("A")) // falso porque nem todos começam com A
console.log(comA)

const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce((ac, v) => ac+ v)
console.log(soma)

const palavra = 'amor'// se não tivesse a letra 'm', retornaria -1
console.log(palavra.indexOf('m'))

const nomeComO = nomes.filter((n) => n.indexOf ('o') >-1)
console.log(nomeComO)