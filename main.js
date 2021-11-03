//Beatriz Santos 21-10-21

//variáveis
var i = 0;
var speed = 115;

var txt = 'Hello.';
var txt2 = '      Welcome.';
var txt3 = '               Please pick one of the options ahead.';

var t1 = document.querySelector('#texto1');
var t2 = document.querySelector('#texto2');
var t3 = document.querySelector('#texto3');

var btn1 = document.querySelector('#fade1');
var btn2 = document.querySelector('#fade2');

// Array de todos os <link>
// Selecionar o elemento usando indexing
var theme = document.getElementsByTagName('link')[0];

const el = document.querySelector("#module");
const elex = document.querySelector("#moduleex");
const elexex = document.querySelector("#moduleexex");

var novo = document.querySelectorAll('span');

//mudar tamanho dos textos no inicio quando o tamanho do ecra muda
if (window.matchMedia("(max-width: 600px)").matches) {
  t1.style.fontSize = '20px';
  t2.style.fontSize = '20px';
  t3.style.fontSize = '20px';
}


//TEXTOS - INICIO
//define a partir de quantos segundos a função ocorre
window.setTimeout(
  //texto "typewritter effect"
  function Txt1() {
    //se o i tiver largura inferior ao texto continua
    if (i < txt.length) {
      //dentro da demo inserir a letra correspondente ao i
      document.querySelector("#texto1").innerHTML += txt.charAt(i);
      //ir adicionando
      i++;
      //definir velocidade a que cada letra sai com o Timeout
      setTimeout(Txt1, speed);
    }
  }, 1000); //<-- segundos


//repetir o que está acima
window.setTimeout(function Txt2() {
  if (i < txt2.length) {
    document.querySelector("#texto2").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(Txt2, speed);
    //apagar texto anterior
    t1.remove();
  }
}, 3500);


//repetir o que está acima
window.setTimeout(function Txt3() {
  if (i < txt3.length) {
    document.querySelector("#texto3").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(Txt3, speed);
    //apagar texto anterior
    t2.remove();
  }
}, 6000);


//Butões
window.setTimeout(
  function newPage() {
    //apagar texto anterior
    t3.remove();
    //fade in dos butões
    document.querySelector("#fade1").style.opacity = 1;
    document.querySelector("#fade2").style.opacity = 1;
  }, 13000);



//OPÇÕES 
//transparency - ao carregar no botão
btn1.addEventListener('click', function mudarPg1() {
  //se o ecrâ for mais pequeno transição vertical
  if (window.matchMedia("(max-width: 600px)").matches) {
    //transparency aumenta para ecrâ completo
    document.querySelector("#fade1").style.height = "100%";
    //privacy diminui
    document.querySelector("#fade2").style.height = "0%";
  } else {
    //transição horizontal
    //aumentar para ecrâ completo
    document.querySelector("#fade1").style.width = "100%";
    //diminuir tamanho
    document.querySelector("#fade2").style.width = "0%";
  }
  //só depois de 1.5seg é que fica transparente
  setTimeout(function () {
    document.querySelector("#fade1").style.opacity = 0;
  }, 1500);

  //diminuir opacidade
  document.querySelector("#fade2").style.opacity = 0;

  //depois da transição apaga-se os elementos anteriores e muda o stylesheet
  setTimeout(function () {
    // Mudar stylesheet
    theme.setAttribute('href', 'style_transparency.css');
    btn1.remove();
    btn2.remove();
    document.querySelector('#tab_grid').remove();
  }, 5000);
});


//privacy - ao carregar no botão
btn2.addEventListener('click', function mudarPg2() {
  //alterar botão dependendo do tamanho do ecrã
  if (window.matchMedia("(max-width: 600px)").matches) {
    //aumentar para ecrâ completo
    document.querySelector("#fade2").style.height = "100%";
    //diminuir tamanho
  } else {
    //aumentar para ecrâ completo
    document.querySelector("#fade2").style.width = "100%";
    //diminuir tamanho
    document.querySelector("#fade1").style.width = "0%";
  }
  //só depois de 1.5seg é que fica transparente
  setTimeout(function () {
    document.querySelector("#fade2").style.opacity = 0;
  }, 1500);

  //diminuir opacidade
  document.querySelector('#fade1').style.opacity = 0;
  document.body.style.backgroundColor = "black";

  setTimeout(function () {
    //mudar stylesheet
    theme.setAttribute('href', 'style_privacy.css');
    btn1.remove();
    btn2.remove();
    document.querySelector('#textos').remove();
  }, 5000);
});








//TRANSPARENCY
//Alterar o tempo de transição para que não fique invisivel mal o rato sai
tt1 = document.querySelector(".p1");
tt2 = document.querySelector(".p2");
tt3 = document.querySelector(".p3");
tt4 = document.querySelector(".p4");
tt5 = document.querySelector(".p5");
tt6 = document.querySelector(".p6");

//computador - eventos ocorrem quando o rato passa por cima ou sai de cima do elemento
tt1.addEventListener("mouseover", mouseOver);
tt1.addEventListener("mouseout", mouseOut);
tt2.addEventListener("mouseover", mouseOver);
tt2.addEventListener("mouseout", mouseOut);
tt3.addEventListener("mouseover", mouseOver);
tt3.addEventListener("mouseout", mouseOut);
tt4.addEventListener("mouseover", mouseOver);
tt4.addEventListener("mouseout", mouseOut);
tt5.addEventListener("mouseover", mouseOver);
tt5.addEventListener("mouseout", mouseOut);
tt6.addEventListener("mouseover", mouseOver);
tt6.addEventListener("mouseout", mouseOut);

//touchscreen/telemóvel - evento ocorre quando se toca no elemento (apenas para touchscreens)
//não funciona em safari ou opera
tt1.addEventListener("touchstart", mouseOver);
tt2.addEventListener("touchstart", mouseOver);
tt3.addEventListener("touchstart", mouseOver);
tt4.addEventListener("touchstart", mouseOver);
tt5.addEventListener("touchstart", mouseOver);
tt6.addEventListener("touchstart", mouseOver);

function mouseOver(event) {
  //vai apenas buscar o target da função
  // ao entrar - opacidade 1 e a transição sem delay
  event.target.style.opacity = 1;
  event.target.style.transitionDelay = '0s';
}

function mouseOut(event) {
  //quando o rato sair do elemento há um delay na transição de forma a ficar visivel mais tempo
  event.target.style.opacity = 0;
  event.target.style.transitionDelay = '1s';
}

//fazer as imagens mexer
//mousemove também funciona em touchscreens, contudo não fica a transição conseguida com o rato
//no telemóvel quando se toca no ecrã assume essa posição como a posição do rato e muda a imagem de baixo tendo o mesmo efeito
//offset property returns the coordinate of the mouse pointer, relative to the target element
//quando o rato passa por cima da imagem ela mexe-se
el.addEventListener("mousemove", (e) => {
  //vai buscar o elemento (imagem) e atribui-lhe a posição do rato (offsetX e offsetY)
  //como o offset dá a posição do rato relativamente ao objeto, para ter apenas a posição do rato é necessário retirar a posição do "e"
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

//repetir o que está acima
elex.addEventListener("mousemove", (eex) => {
  elex.style.backgroundPositionX = -eex.offsetX + "px" + 3;
  elex.style.backgroundPositionY = -eex.offsetY + "px";
});

//repetir o que está acima
elexex.addEventListener("mousemove", (eexex) => {
  elexex.style.backgroundPositionX = -eexex.offsetX + "px";
  elexex.style.backgroundPositionY = -eexex.offsetY + "px" - 2;
});







//PRIVACY
//drag and drop só funciona em computadores
function allowDrop(event) {
  event.preventDefault();
}

//especificar o que acontece quando o elemeto (target) é arrastado
//qual a informação que deve ser arrastada (tipo e valor) - "text" , event.target.id (o id do elemento arrastado (target))
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}


//onde vai "cair"
function drop(event) {
  //tirar e class sempre que "cai"
  event.target.classList.toggle("mais");
  //para um elemento poder ser arrastado para dentro de outro é preciso prevenir o default - normalmente items não podem ser colocados dentro de outros e isto impede isso de acontecer (default is open as link on drop)
  event.preventDefault();
  //ir buscar a informação do elemento arrastado
  var data = event.dataTransfer.getData("text");
  //só deixa fazer o apend se não houver outro elemento no div
  if (event.target.hasChildNodes()) {
    //fazer apend do elemento arrastado ao elemento onde ele vai ser colocado
    // !!!! APENAS FUNCIONA COM GET ELEMENT BY ID
    event.target.appendChild(document.getElementById(data));
  } else {
  }
}

//como o drag and drop não funciona em touchscreens, arranjei outra forma de tornar a composição interativa
//quando se carrega em cima dos spans altera as características
for (let i = 0; i < novo.length; i++) {
  novo[i].addEventListener('click', function change() {
    novo[i].classList.add("mais");
    novo[i].addEventListener('click', function change() {
      novo[i].classList.remove("mais");
    });
  });
}