//Mudando o nome dos times
const nometimeA = prompt('Digite o nome do time A');
const nometimeB = prompt('Digite o nome do time B');

const nomeAhtml = document.getElementById('nomeTimeA');
const nomeBhtml = document.getElementById('nomeTimeB');

nomeAhtml.innerText = nometimeA;
nomeBhtml.innerText = nometimeB;

//Mudando o placar
const pontoAhtml = document.getElementById('pontuacaoA');
const pontoBhtml = document.getElementById('pontuacaoB');

let pontoA = 0;
let pontoB = 0;

pontoAhtml.innerHTML = pontoA;
pontoBhtml.innerHTML = pontoB;

pontoAhtml.addEventListener('click', function (){
    pontoA++;
    pontoAhtml.innerHTML = pontoA;
    verificarGanhador();
});

pontoBhtml.addEventListener('click', function (){
    pontoB++;
    pontoBhtml.innerHTML = pontoB;
    verificarGanhador();
});

function verificarGanhador() {
    if (pontoA >= 21){
        alert('Time '+ nometimeA +' venceu!');
    }
    if(pontoB >= 21){
        alert('Time '+ nometimeB +' venceu!');
    }


}


