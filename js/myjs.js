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
            let modal = document.getElementById('myModal');
            let span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    }
}


