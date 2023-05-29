function calcularFrete() {
    const km = parseFloat(document.getElementById("km").value);
    const custoPorKm = 7.10; // inserir aqui o custo por km, ou seja, o custo da diesel por quilometro rodado
    const custoFixo = 100; // inserir aqui o custo fixo, ou seja despesas
    const total = km * custoPorKm + custoFixo;
    if (!total) {
    document.getElementById("total").innerHTML = `Digite um valor.`
    }
    else {
    document.getElementById("total").innerHTML = `Total do frete: R$ ${total.toFixed(2)}`
    };
}
