let option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
  option3 = document.getElementById("option3"),
  audio = document.getElementById("myAudio"); 
   audio1 = document.getElementById('myAudio1')
            
var respuesta = 0;

function generar_ecuacion(){ 
  var num1 = Math.floor(Math.random() * 13),
      num2 = Math.floor(Math.random() * 13),
      dummyrespuesta1 = Math.floor(Math.random() * 50),
      dummyrespuesta2 = Math.floor(Math.random() * 50),
      todasRespuestas = [],
      switchrespuestas = [];

  respuesta = eval(num1 * num2);
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

  todasRespuestas = [respuesta, dummyrespuesta1, dummyrespuesta2];

  for (i = todasRespuestas.length; i--;){
    switchrespuestas.push(todasRespuestas.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchrespuestas[0];
  option2.innerHTML = switchrespuestas[1];
  option3.innerHTML = switchrespuestas[2]; 

};

option1.addEventListener("click", function(){
    if(option1.innerHTML == respuesta){
      generar_ecuacion();
       audio1.play();
    }
    else{
      audio.play();
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML == respuesta){
      generar_ecuacion();
      audio1.play();
    }
    else{
      audio.play();
    }
});

option3.addEventListener("click", function(){
    if(option3.innerHTML == respuesta){
     generar_ecuacion();
     audio1.play();
    }
    else{
      audio.play();
    }
});

generar_ecuacion()