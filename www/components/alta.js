
$(document).on("click","#env",function(){
var sexo = parseFloat($("#sexo").val());

if(sexo == 1){

var al = parseFloat($("#altura").val());
var altura = al * 100;
var kilos = parseFloat($("#kilos").val());
var idade = $("#idade").val();
var taxaAtividade = 1725;
var primeiraConta = parseFloat(13.7) * kilos;
var segundaConta = parseFloat(5) * altura;
var terceiraConta = primeiraConta + segundaConta; 
var quartaConta = parseFloat(6.8) * idade;
var quintaConta = terceiraConta - quartaConta;
var sextaConta = quintaConta + 66;
var setimaConta = sextaConta * taxaAtividade;
$("#resultado").val(setimaConta);
}
else{
  var al = parseFloat($("#altura").val());
var altura = al * 100;
var kilos = parseFloat($("#kilos").val());
var idade = $("#idade").val();
var taxaAtividade = 1725;
var primeiraConta = parseFloat(9.6) * kilos;
var segundaConta = parseFloat(1.8) * altura;
var terceiraConta = primeiraConta + segundaConta; 
var quartaConta = parseFloat(4.7) * idade;
var quintaConta = terceiraConta - quartaConta;
var sextaConta = quintaConta + 655;
var setimaConta = sextaConta * taxaAtividade;
$("#resultado").val(setimaConta);
}

});