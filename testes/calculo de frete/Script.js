function calcularFrete() {
    const km = parseFloat(document.getElementById("km").value);
    const custoPorKm = 1; // inserir aqui o custo por km, ou seja, o custo da diesel por quilometro rodado
    const custoFixo = 20; // inserir aqui o custo fixo, ou seja despesas
    const total = km * custoPorKm + custoFixo;

    document.getElementById("total").innerHTML = `Total do frete: R$ ${total.toFixed(2)}`;
}
