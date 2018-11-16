let user = {
    sexo: "null",
    idade: "null",
    tempoLeituraDiaria: "null"
};

function getGenre(){
    let radios = document.getElementsByName('sexo');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked){
            user.sexo = radios[i].value;
        }
    }
    document.getElementById('sexoChoice').style.display = "none";
    document.getElementById('leituraTempo').style.display = "block";

}

function getTempoLeitura() {
    let radios = document.getElementsByName('tempoLeitura');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked){
            user.tempoLeituraDiaria = radios[i].value;
            break;
        }
    }
}

