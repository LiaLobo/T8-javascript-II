const objeto = {
    nome: 'Lia',
    idade: 24,
    gato1: 'bigode',
    gato2: 'carlito',
    gato3: 'beorn',
    'Meu site para o GitHub': 'https://github.com/LiaLobo?tab=repositories'
}

// const divMae = document.getElementById('sou-a-mae')

// let criaTitulo = document.createElement('h2')
// criaTitulo.textContent = objeto.nome

// divMae.appendChild(criaTitulo)

// let criaIdade = document.createElement('span')
// criaIdade.textContent = objeto.idade

// divMae.appendChild(criaIdade)

// let meuPrimeiroGato = document.createElement('p')
// meuPrimeiroGato.textContent = objeto.gato1

// divMae.appendChild(meuPrimeiroGato)

// let meuSegundoGato = document.createElement('p')
// meuSegundoGato.textContent = objeto.gato2

// divMae.appendChild(meuSegundoGato)

// let meuTerceiroGato = document.createElement('p')
// meuTerceiroGato.textContent = objeto.gato3

// divMae.appendChild(meuTerceiroGato)

// let meuLink = document.createElement('a')
// meuLink.setAttribute('href', 'https://github.com/LiaLobo?tab=repositories')
// meuLink.setAttribute('target', '_blank')

// meuLink.textContent = objeto['Meu site para o GitHub']

// divMae.appendChild(meuLink)


//RESOLUÇÃO COM FOR IN (LOOP PARA OBJETOS)
const divMae = document.getElementById('sou-a-mae')

for (let prop in objeto){
    let criaParagrafo = document.createElement('p')
    divMae.appendChild(criaParagrafo)
    criaParagrafo.textContent = objeto[prop]
}

