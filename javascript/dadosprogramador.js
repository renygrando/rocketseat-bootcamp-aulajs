const programador = {

    nome: 'Reny',
    
    idade: 30,

    tecnologias: [

        {nome: 'Python', especialidade: 'Desktop'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
    
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos 
e usa a tecnologia ${programador.tecnologias[1].nome} 
com especialidade em ${programador.tecnologias[1].especialidade}`);
