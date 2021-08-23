let pessoa = {
    nome:"Maria",
    idade:21,
    endereco:{
        logradouro: "Rua da Mooca",
        numero:231
    }
}
console.log(`Me chamo ${pessoa.nome},
 tenho ${pessoa.idade} anos 
 e moro na ${pessoa.endereco['logradouro']} 
 nº ${pessoa.endereco['numero']}.`)

/* let pessoa = {
    nome:"Ana",
    idade:19
}
console.log("Me chamo " + pessoa.nome)
console.log("Tenho " + pessoa['idade'] + ' anos.') */


//XML - Passado

//JavaScript Object Notation: JSON


//arrow function
/* const triplo = (valor) => valor * 3 // se tivesse {} o return é obrigatório; se tivesse mais de uma instrução as {} são obrigatórias
console.log(triplo(5)) */

/* const dobro = (valor) => valor * 2
console.log(dobro(10))
 */

/* const hello = () => console.log ('Hello <3')
hello() */


/* const dobro = n => n * 2
console.log(dobro(2)) */


/* function dobro(n){
    return n * 2
}
 */



/* const triplo = function (n=5){
    return n * 3
}

console.log(triplo(8))
console.log(triplo()) */

//const triplo = function(n){
   // if(n!== undefined)
   // return 3 * n
   // return 3 * 5
//}
//console.log(triplo(8))
//console.log(triplo())


//function eAgora(f1, f2){

    //return f1() * f2()
//}
//console.log(eAgora(function(){return 2+3}, function(){return 2*3}))

//const dobro = function(n){
   // return n * 2

//}

//const res = dobro (5)
//console.log(res)



//function soma(a, b){
  //  if(a === b){

    
   // return a + b
   // }
//}
//const resultado1 = soma(3,3)
//const resultado2 = soma(2,3)
//console.log(`Resultado 1: ${resultado1}         Resultado 2: ${resultado2}`)


//function hello (){
//    console.log('Hello <3')
//}
//hello()

//function hello(nome){
 //   console.log(`Hello, ${nome}`)//console.log('Hello ' + nome)
//}
//hello('Ana')






//var idade = 18
//console.log("Oi, " + nome)
//if (idade >= 18){
    //let nome = "Lucas"
   // console.log("Parabéns " + nome + ". Você pode dirigir")
//}
//console.log("Até mais, " + nome)
//variável pode ser redeclarada
//var linguagem = "Javascript"
//console.log("Aprendendo " + linguagem)
//declarando variáveis
//let a = 2
//let b = "abcd"
//a = 3

//declarando constantes
//const nome = "Maria"
//const idade = 27
//const endereco = 'Rua K, 12'