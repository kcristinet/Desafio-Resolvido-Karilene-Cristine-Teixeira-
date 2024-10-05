/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
function calcularMedalhasOlimpicas() {
    let paises = [];
    let medalhas = [];

    while (true) {
        let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

        if (pais.toLowerCase() === "sair") {
            break;
        }

        let ouro = parseInt(prompt(`Digite o número de medalhas de ouro de ${pais}:`));
        let prata = parseInt(prompt(`Digite o número de medalhas de prata de ${pais}:`));
        let bronze = parseInt(prompt(`Digite o número de medalhas de bronze de ${pais}:`));

        if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
            let totalMedalhas = ouro + prata + bronze;
            paises.push(pais);
            medalhas.push(totalMedalhas);
        } else {
            alert("Por favor, insira valores numéricos válidos para as medalhas.");
        }
    }

    if (paises.length > 0) {
        let ranking = [];

        // Cria o ranking com países e medalhas
        for (let i = 0; i < paises.length; i++) {
            ranking.push({ pais: paises[i], medalhas: medalhas[i] });
        }

        // Ordena o ranking em ordem decrescente de medalhas
        ranking.sort((a, b) => b.medalhas - a.medalhas);

        // Exibe o ranking
        let resultado = "Ranking de Medalhas:\n";
        for (let i = 0; i < ranking.length; i++) {
            resultado += `#${ranking[i].pais}: ${ranking[i].medalhas} medalhas\n`;
        }
        alert(resultado);
    } else {
        alert("Nenhum dado de medalhas foi inserido.");
    }
}

calcularMedalhasOlimpicas();

