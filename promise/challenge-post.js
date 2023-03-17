import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function postData (urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    "title": "Gotas para nunca parar de aprender",
    "price": 999,
    "description": "Lo científicos Freddy Vega y Christian Van Der Henst han desarrollado una poderosa formula para ganar 2x más de dinero",
    "categoryId": "2",
    "images":[
        "https://static.platzi.com/media/blog/wallpaper-pc-a07b6880-351b-410c-a4dc-9fbafdc420b2.png"
    ]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('Finish POST event'))