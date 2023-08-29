const form = document.getElementById('form-atividade');
const emojiAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const emojiReprovado = '<img src="./images/reprovado.png" alt="Emoji chateado"/>';
const atividades =[];
const notas =[];
const spanAprovado = '<span class= "aprovado">Aprovado</span>';
const spanReprovado = '<span class= "reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: "));
let linhas = ''; //por ultimo//

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinhas(){
    const inputNomeAtividade =document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida.`);

    }else{ 
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha='<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? emojiAprovado : emojiReprovado} </td>`;
        linha +='</tr>';
        linhas += linha;
        }
    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizaTabela(){
    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}

function atualizaMediaFinal(){
    const mediaFinal=calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML=mediaFinal;
    document.getElementById('media-final-resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas =0;

    for(let i = 0; i < notas.length;i++){ 
        somaDasNotas += notas[i];
        }
    return somaDasNotas/notas.length;

}