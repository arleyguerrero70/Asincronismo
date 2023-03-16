// const promise = new Promise( function (resolve,reject){
//     resolve ('Todo Ok')
// })

const cows = 12

const countCows = new Promise(function (resolve,reject){
    if (cows >= 15){
        resolve(`Tenemos el total de ${cows} vaquitas`)
    } else {
        reject(`Nos hacen falta vaquitas`)
    }
})

countCows.then((result) => {
    console.log(result)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('Finally'))