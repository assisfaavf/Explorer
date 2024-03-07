let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
let tryes = 1;

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const h2 = document.querySelector(".screen2 h2")

//Funções callBack
function handleTryClick(event) {
  event.preventDefault(); //Evitar que o padrão de ação seja realizado
  
  const inputNumber = document.querySelector("#inputNumber");
  console.log(inputNumber.value);
  
  let result = inputNumber.value;


  if(Number(result) == randomNumber){

    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    h2.innerText = `Acertou em ${tryes} tentativas`


}

  //Limpa o input
  inputNumber.value = ""

    // Contador de tentativas, contando inclusive as tentativas que deram certo
    tryes++
}


function playAgain (event){
  event.preventDefault();
  
  screen2.classList.add('hide')
  screen1.classList.remove('hide')

  tryes = 1;
  randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber)
}


//Eventos 
const btnTry = document.querySelector("#btnTry")
const btnRestart = document.querySelector("#btnRestart")

btnTry.addEventListener("click", handleTryClick)
btnRestart.addEventListener("click", playAgain)