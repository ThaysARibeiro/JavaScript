let amigo = {nome: 'José',   // let amigo = {nome: 'José} --> é um objeto
sexo: 'M',
peso: 85.4,
engordar(p=0){          // Engordar é uma função
    console.log('Engordou')
    this.peso += p  // this --> Autoreferência ao objeto
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)   

// Funções dentro das variáveis
