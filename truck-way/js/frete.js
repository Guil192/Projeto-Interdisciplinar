function calcularFrete() {
    const km = parseFloat(document.getElementById("km").value);
    const custoPorKm = 50; // inserir aqui o custo por km, ou seja, o custo da diesel por quilometro rodado
    const custoFixo = 200; // inserir aqui o custo fixo, ou seja despesas
    const total = km * custoPorKm + custoFixo;

    document.getElementById("total").innerHTML = `Total do frete: R$ ${total.toFixed(2)}`;
}
