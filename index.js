
function custoPreco() {
    let introPreco = parseFloat(prompt("digite o preço do produto"));
    return introPreco;
}


function calculaICMS(introPreco) {
    return introPreco * 0, 14;
}


function resultICMS(custoPreco, calculaICMS) {
    return (custoPreco + calculaICMS);
}


function resultadoFinal(resultado) {
    alert("Esse é o preço final " + resultado);

}

let preco = custoPreco()
let precoICMS = calculaICMS(preco)
let resultado = resultICMS(preco, precoICMS)
resultadoFinal(resultado)

