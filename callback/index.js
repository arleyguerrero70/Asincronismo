function suma(suma1, suma2) {
    return suma1 + suma2
}

function calc (num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(2,2,suma))

setTimeout( function () {
    console.log('Hello asynchronism')
},2000)