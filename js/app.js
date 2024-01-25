function comprar() {
    
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > 10 || qtd < 1) {
        alert('Por favor, insira uma quantidade entre 1 e 10');
    } else if (qtd != parseInt(qtd)) {
        alert('Por favor, insira um valor inteiro');
    } else {
        if (tipo == 'inferior' && qtd <= qtdInferior) {
            verificaTipo(qtdInferior, qtd, tipo);
        } else if (tipo == 'superior' && qtd <= qtdSuperior) {
            verificaTipo(qtdSuperior, qtd, tipo);
        } else if (tipo == 'pista' && qtd <= qtdPista) {
            verificaTipo(qtdPista, qtd, tipo);
        } else {
            alert('não há ingressos suficientes, insira um valor que esteja de acordo com a quantidade dispinivel');
        }

    }
    document.getElementById('qtd').value = null;
    
}

function verificaTipo(qtdDisponivel, qtdCompra, tipo) {
    let resultado = qtdDisponivel - qtdCompra;
    document.getElementById(`qtd-${tipo}`).innerHTML = resultado;
    alert('compra realizada com sucesso!!');
}