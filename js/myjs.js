let user = {
    sexo: "null",
    idade: "null",
    tempoLeituraDiaria: "null",
    utilizaOculos: "null",
    dispositivosLeitura: []
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
        if (radios[0].checked) {
            user.idade = radios[0].value;
            let modal = document.getElementById('myModalAge');
            let span = document.getElementById('closeModal');
            let titulo = document.getElementById('titulo').innerHTML = "Se você tem até 24 anos.";
            let texto = document.getElementById('textoModal').innerHTML = "A recomendação é de 47 minutos de leitura contínua por dia!";
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
                document.getElementById('idadeUsuario').style.display = "none";
                document.getElementById('oculos').style.display = "block";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.getElementById('idadeUsuario').style.display = "none";
                    document.getElementById('oculos').style.display = "block";
                }
            };
        } else if (radios[1].checked) {
            user.idade = radios[1].value;
            let modal = document.getElementById('myModalAge');
            let span = document.getElementById('closeModal');
            let titulo = document.getElementById('titulo').innerHTML = "Se você tem de 25 a 59 anos.";
            let texto = document.getElementById('textoModal').innerHTML = "A recomendação é de 37 minutos de leitura contínua por dia!";
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
                document.getElementById('idadeUsuario').style.display = "none";
                document.getElementById('oculos').style.display = "block";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.getElementById('idadeUsuario').style.display = "none";
                    document.getElementById('oculos').style.display = "block";
                }
            };
        } else if (radios[2].checked) {
            user.idade = radios[2].value;
            let modal = document.getElementById('myModalAge');
            let span = document.getElementById('closeModal');
            let titulo = document.getElementById('titulo').innerHTML = "Se você tem mais de 60 anos.";
            let texto = document.getElementById('textoModal').innerHTML = "A recomendação é de 17 minutos de leitura contínua por dia!";
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
                document.getElementById('idadeUsuario').style.display = "none";
                document.getElementById('oculos').style.display = "block";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.getElementById('idadeUsuario').style.display = "none";
                    document.getElementById('oculos').style.display = "block";
                }
            };
        }
    }
}

function getGlassesInfo() {
    let radios = document.getElementsByName('oculosLeitura');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            user.utilizaOculos = radios[i].value;
            let modal = document.getElementById('myModalGlasses');
            let span = document.getElementById('closeModalOculos');
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
                document.getElementById('oculos').style.display = "none";
                document.getElementById('dispositivosLeitura').style.display = "block";
            };

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.getElementById('oculos').style.display = "none";
                    document.getElementById('dispositivosLeitura').style.display = "block";
                }
            }
        }
    }
}

function getDispositivoInfo() {
    let dispositivos = document.getElementsByName('meioLeitura');
    for (let i = 0, length = dispositivos.length; i < length; i++) {
        if (dispositivos[i].checked) {
            user.dispositivosLeitura.push(dispositivos[i].value)
        }
    }

    let modal = document.getElementById('myModalDispositivos');
    let span = document.getElementById('closeModalDispositivos');
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
