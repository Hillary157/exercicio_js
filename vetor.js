v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = 'abc'
console.log(v1.length)

v2 = [1,'xyz', true]
console.log(v2.length)

console.log('v2')
for(let i=0;i<v2.length; i++){
    console.log(v2[i])
}

console.log('v1')
for(let i=0; i < v1.length; i++){
    if(v1[i] != undefined){

    console.log("posição " + i + " valor " + v1[i])
    
    }
    else{
        
        console.log("posição " + i + " vazia")
    }
}