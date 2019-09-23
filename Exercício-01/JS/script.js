/* -Percorrer array
-Criar um 'li'
-Colocar conteúdo
-Capturar 'ul'
-Inserir 'li' na 'ul'*/ 


const alunas = ['Raquel Pereira', 'Talita Barbosa', 'Lia Lobo', 'Daiana Moraes', 'Angelica Garcia', 'Simara Conceição', 
'Simone Santos', 'Monique Almeida', 'Priscilla Alves', 'Marcela', 'Emanuelle', 'Cecília', 'Rosana', 'Carolina', 'Ana', 'Thaís',
'Telma', 'Romênia', 'Barbara Santos', 'Barbara Galante', 'Josiane', 'Jennifer', 'Valdeniza', 'Adriely', 'Adriana', 'Jaqueline',
'Priscila', 'Carolina', 'Aline', 'Raissa'];

//Podemos deixar declarado somente uma vez fora do loop a parte em que capturamos a lista
//const listaDesordenada = document.getElementById('lista-alunas')
//Deixar do lado de fora ajuda a não desperdiçar espaço em memória, e o loop não precisa sempre percorrer essa declaração

for (let i = 0; i < alunas.length; i++){
    let item = document.createElement('li')
    item.textContent = alunas[i]
    const listaDesordenada = document.getElementById('lista-alunas')
    listaDesordenada.appendChild(item)
}

let soma = 0

const text = document.querySelector('.subtitulo')

text.addEventListener('click', function contarClicks(){
    console.log(soma++)
})

const meuTitulo = document.querySelector('.titulo')

meuTitulo.addEventListener('click', function(){
    //maneira menos adequada:    meuTitulo.style.color = 'red'
    meuTitulo.classList.add('vermelha')
})


//Outra maneira de fazer o exercício


// const listaDesordenada = document.getElementById('lista-alunas')

// alunas.forEach(function(aluna){
//     let item = document.createElement('li')
//     item.textContent = aluna
//     listaDesordenada.appendChild(item)
// })



 