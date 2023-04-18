// Rapi API
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9IdEZPl44BPor7mvxhnOYg&part=snippet%2Cid&order=date&maxResults=8'
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae0f79ef54msh7e149c8ee486f13p1e8786jsnccaa65bf2ae5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
            ${videos.items.map(video => `
                <div class="contentVideosYoutube">
                    <a class="videosYoutubeCta" href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                        <div class="sectionVideos">
                            <figure class="figureImgYoutube">
                                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="imgInstagram coverImg">
                            </figure>
                        </div>
                        <div class="titleVideosYoutube">
                            <figure class="iconYoutube">
                                <img src="./src/img/youtube.svg">
                            </figure>
                            <h3 class="textVideo">
                                <span aria-hidden="true" class="overflowEllipsis"></span>
                                ${video.snippet.title}
                            </h3>
                        </div>
                    </a>
                </div>
            `).slice(0,4).join('')}
        `;
        content.innerHTML = view
    } catch(error){
        console.log(error)
    }
})()

// END Rapi API


//Typed
const typed = new Typed('.typed', {
    strings: [
        '<i class="typedText">instrumentación musical</i>',
        '<i class="typedText">organología vallenata</i>',
        '<i class="typedText">musicología vallenata</i>'
    ],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});
// END Typed