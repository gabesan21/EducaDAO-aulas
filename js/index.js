let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado_valor = document.getElementById("resultado_valor");
let operacao_valor = document.getElementById("operacao_valor");

function executar() {
  if (operacao_valor.value == "soma") {
    resultado_valor.value = parseInt(numero1.value) + parseInt(numero2.value);
  } else if (operacao_valor.value == "subtracao") {
    resultado_valor.value = parseInt(numero1.value) - parseInt(numero2.value);
  }
}
