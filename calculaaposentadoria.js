const nome = 'Valberto Silvio Grando'
const sexo = 'M'
const idade = 60
const contribuicao = 35

const contribuicaoM = 35
const contribuicaoF = 30

const idadeAptoM = 95
const idadeAptoF = 85

if (idade+contribuicao >= idadeAptoM && contribuicao >= contribuicaoM){
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}