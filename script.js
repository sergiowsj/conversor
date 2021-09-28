function ConverterUSD() {
  var valorElemento = document.getElementById("valorUSD");
  var valorUSD = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valorUSD);

  var valorEmReal = valorEmDolarNumerico * 5.24;
  var valorEmBitcoin = valorEmDolarNumerico * 0.000021;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Reais é de R$ " +
    valorEmReal +
    "<br> ou em Bitcoins é de BTC " +
    valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEUR() {
  var valorElemento = document.getElementById("valorEUR");
  var valorEUR = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valorEUR);

  var valorEmReal = valorEmEuroNumerico * 6.18;
  var valorEmBitcoin = valorEmEuroNumerico * 0.000025;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado em Reais é de R$ " +
    valorEmReal +
    "<br> ou em Bitcoins é de BTC " +
    valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}