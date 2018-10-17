const ApiUrl = new XMLHttpRequest()
const UrlWeb = 'https://swapi.co/api/people/'

function enviar(parametro) {
    idRecibido = UrlWeb + parametro + '/'
    ApiUrl.open('GET', idRecibido, true)
    ApiUrl.send()

    ApiUrl.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let HOLA = JSON.parse(ApiUrl.responseText);
            document.getElementById('idTabla').innerHTML = parametro
            document.getElementById('nombreID').innerHTML = HOLA.name
            document.getElementById('alturaID').innerHTML = HOLA.height + "m"
            document.getElementById('pesoID').innerHTML = HOLA.mass + "kg"
            document.getElementById('colorPeloID').innerHTML = HOLA.hair_color
            console.log(HOLA.name + HOLA.height);
        }
    }

}