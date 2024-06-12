var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função comparar
  comparar();

});


//Função comparar
function comparar() {

  //Captura o que está dentro do primeiro numero inteiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);

  //Captura o que está dentro do segundo numero inteiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value);

  //Captura o que está dentro do Terceiro numero inteiro inteiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let terceiro_numero_inteiro = Number(document.getElementById("terceiro_numero_inteiro").value);

  //Captura o que está dentro do quarto numero inteiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let quarto_numero_inteiro = Number(document.getElementById("quarto_numero_inteiro").value);
  //Realiza a comparacao do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //variável "terceiro_numero_inteiro"
  //variável "quarto_numero_inteiro"
  //E a variável "resultado_da_comparacao" recebe o valor da comparacao dos valores
  let resultado_comparacao = primeiro_numero_inteiro == segundo_numero_inteiro == terceiro_numero_inteiro == quarto_numero_inteiro;

  //se os número são iguais escreve na tela "Os número são iguais"
  if (resultado_comparacao) {
    document.getElementById("resultado_comparacao").value = os numeros são iguais ;
  } else {
      //caso contrário o números são diferentes
      document.getElementById("resultado_comparacao").value = os numeros são diferentes;
  }





}
