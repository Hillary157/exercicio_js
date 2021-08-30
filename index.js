const fs = require ('fs')
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = function (erro, conteudo){
        //console.log(`${erro ? erro : conteudo.toString()}`)
        if(erro){
            console.log("Erro: " + erro)
        }
        else{
            console.log("Conteúdo lido: " + conteudo.toString())
            const dobro = +conteudo.toString() * 2
            const finalizar = function(erro){
                console.log(`${erro ? erro : 'Salvou o dobro com sucesso!'}`)
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }

    }
    fs.readFile(nomeArquivo,exibirConteudo)
}
abrirArquivo("arquivo.txt")



/* const fs = require("fs")//abrindo arquivo
const abrirArquivo = function(nomeArquivo){
    const exibirArquivo = function(erro, conteudo){
        if(erro){
            console.log(`Ocorreu um erro: ${erro}`)

        }
        else{
            console.log(conteudo.toString())
        }
    }
    fs.readFile(nomeArquivo, exibirArquivo) 
}
abrirArquivo("arquivo.txt")  */



//Modelos Single Threaded
/* function demorada(tempo) {
console.log(`demorada ${tempo}`)
const atualMaisTempo = new Date().getTime() + tempo
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= atualMaisTempo);
const d = 8 + 4;
return d;
 }
setTimeout(function (){demorada(2000)}, 2000)
setTimeout(function (){demorada(1000)}, 1000)
 console.log("chegou ao fim do script principal") */


/* setTimeout(function(){//assíncrona ou não bloqueante
    console.log('dentro do timeout', 0)
})
const a = new Date().getTime() + 1000
while(new Date().getTime() <= a);
console.log('fora do timeout')
 */


/* function demorada(){/*assíncrona ou não bloqueante com enfileiramento,consiste no uso
    da função setTimeout. */
    /* const atualMais2Segundos = new Date().getTime + 2000
    while(new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
setTimeout(function(){
    const d = demorada()
    console.log(d)

},500)//função será executada depois de 500 milissegundos
//depois essas linhas executam sem esperar
const e = a + b
console.log(e)*/ 


/* function demorada(){//modelo síncrono ou bloqueante
    const atualMais2Segundos = new Date().getTime() + 2000
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
const d = demorada()

const e = 2 + a + b
console.log(e) */



/* let calculadora = {//funções em um objeto JSON
    soma: (a,b) => a + b, //arrow
    subtracao: function(a,b){ //function simples
        return a - b
    },
};
console.log(`2 + 5 = ${calculadora.soma(2,5)}`)
console.log(`2-3 = ${calculadora.subtracao(2,3)}`) */



/* let concessionaria = {
    cnpj: "000111222210001-45",
    endereco: {
        logradouro: "Rua B, 4" ,
        numero: 123,
        bairro: "Vila Mariana",
    },
    veiculos:[//lista
        {
            marca: "Renault",
            modelo:"Sandero",
            anoDeFabricacao:2010,
        },
        {
            marca: "Ford",
            modelo:"Ka",
            anoDeFabricacao:2015,
        },
        {
            marca: "Chevrolet",
            modelo:"Cruze",
            anoDeFabricacao:2002,
        },

    ],
};
for(let veiculo of concessionaria.veiculos){
    console.log(`Marca: ${veiculo.marca}`)
    console.log(`Modelo: ${veiculo.modelo}`)
    console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
} */



/* let pessoa = {
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
 nº ${pessoa.endereco['numero']}.`) */

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