//CÁLCULO PARA VERIFICAÇÃO DE APOSENTADORIA POR TEMPO DE SERVIÇO

const nome = 'Valberto Silvio Grando'
const sexo = 'M'
const idade = 65
const contribuicao = 35

const tempoContribuicao = idade + contribuicao

const aposentadoriaHomem = sexo == 'M' && contribuicao >= 35 && tempoContribuicao >= 95
const aposentadoriaMulher = sexo == 'F' && contribuicao >= 30 && tempocontribuicao >=85

if (aposentadoriaHomem || aposentadoriaMulher) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você não pode se aposentar!`)
}
