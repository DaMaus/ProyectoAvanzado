var preguntas=["¿Que es esto?","¿Que Baraja es?","¿Como se llama esta rama de la magia?","Quien es el"];
var inciso1=["Un WOW","Executive Deck","Close up","Dani Daortiz"]
var inciso2=["Estuche para carta","Virtuoso Deck","Manipulacion","Yu Hio Jin"]
var inciso3=["Pull-off","Monarchs Deck","Numismagia","Shin Lim"]

var respuestas=[1,1,3,2,3]
var num = 0;
var num2 = 2;
var puntaje = 0;
var porciento = 0;


$("#siguiente").click(function() {

  var elementos = document.getElementsByName("group1");
  if (elementos[respuestas[num]-1].checked) {
    puntaje += 2;
  }

  if (num>=4) {
    $("#contenido").html("<div class='resultado center-align'><span><h1>FELICIDADES</h1></span><span><h1>Tu puntaje es:"+puntaje+"</h1></span></div>");
  };


  $(".imagen").html("<div class='col s12 m6 offset-m3'><img class='materialboxed' src='img/img"+num2+".jpg'>");
  $("#pregunta").html(preguntas[num]);
  $("form").html("  <p><input class='with-gap' name='group1' type='radio' id='test1'/><label for='test1'>"+inciso1[num]+"</label></p><p><input class='with-gap' name='group1' type='radio' id='test2'/><label for='test2'>"+inciso2[num]+"</label></p><p><input class='with-gap' name='group1' type='radio' id='test3'/><label for='test3'>"+inciso3[num]+"</label></p>");
  porciento += 20;
  $("#barra").html("<div class='determinate' style='width: "+porciento+"%'></div>");
  $("#porcentaje").html(porciento+"%");

  num++;
  num2++;

});
