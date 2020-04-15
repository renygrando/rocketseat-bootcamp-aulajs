const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//   function imprimeTela (usuarios){
//     for (let i = 0; i < usuarios.length; i++){
//         console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
//     } 
//     }

// imprimeTela(usuarios);
// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
// SE encontrar, retorne true da função, caso contrário retorne false


function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'CSS') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}