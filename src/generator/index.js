function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(['Alfonso','Omar','Sebastian','Seijas'])

console.log(it.next())
console.log(it.next())
console.log(it.next())
