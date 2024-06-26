let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempatual").innerHTML =  Math.floor(dados.main.temp) + "°C Atual"
    document.querySelector(".tempmax").innerHTML =  Math.floor(dados.main.temp_max) + "°C Máxima"
    document.querySelector(".tempmin").innerHTML =  Math.floor(dados.main.temp_min) + "°C Minima"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = Math.floor(dados.main.humidity) + "% Umidade"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}
