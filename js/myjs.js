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
                document.getElementById('leituraTempo').style.display = "none";
                document.getElementById('idadeUsuario').style.display = "block";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.getElementById('leituraTempo').style.display = "none";
                    document.getElementById('idadeUsuario').style.display = "block";
                }
            }
        }
    }
}

function getAge() {
    let radios = document.getElementsByName('age');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            user.idade = radios[i].value;
            let modal = document.getElementById('myModalAge');
            let span = document.getElementById('closeModal');
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }
    }
}


