const livros = {
    1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const listaCatalogo = document.getElementById('lista-do-catalogo')

for (let prop in livros){
    let titulo = document.createElement('h3')
    listaCatalogo.appendChild(titulo)
    titulo.textContent = livros[prop]['titulo']
    titulo.classList.add('livro__titulo')

    let autor = document.createElement('li')
    listaCatalogo.appendChild(autor)
    autor.textContent = livros[prop]['quemEscreveu']
    autor.classList.add('livro__autoria')

    let linkLivro = document.createElement('a')
    listaCatalogo.appendChild(linkLivro)
    linkLivro.textContent = 'Ler'
    linkLivro.setAttribute('href', livros['link'])
    linkLivro.setAttribute('target', '_blank')
    linkLivro.classList.add('livro__link')

    let botaoLido = document.createElement('button')
    listaCatalogo.appendChild(botaoLido)
    botaoLido.textContent = 'Não lido'
    botaoLido.classList.add('botao-lido')

    botaoLido.addEventListener('click', function(){
        if (titulo.classList.contains('livro__titulo--lido')){
            titulo.classList.remove('livro__titulo--lido')
            botaoLido.textContent = 'Não lido'
            botaoLido.classList.remove('botao__Lido')
        } else{
            titulo.classList.add('livro__titulo--lido')
            botaoLido.textContent = 'Já lido'
            botaoLido.classList.add('botao__Lido')
        }
     })


    //-----OUTRA FORMA DE FAZER O FUNCIONAMENTO DO BOTÃO-----
    //botaoLido.addEventListener('click', function(){
    //titulo.classList.remove('livro__titulo--nao-lido')
    //titulo.classList.add('livro__titulo--lido')
    //})
    // let botaoDesfaz = document.createElement('button')
    // listaCatalogo.appendChild(botaoDesfaz)
    // botaoDesfaz.textContent = 'Desfazer'
    // botaoDesfaz.classList.add('botao-desfazer')

    // botaoDesfaz.addEventListener('click', function(){
    //     titulo.classList.remove('livro__titulo--lido')
    //     titulo.classList.add('livro__titulo--nao-lido')
    // }) 

    //-----OUTRA FORMA DE FAZER O FUNCIONAMENTO DO BOTÃO-----
    //botaoLido.addEventListener('click', function(){
    //    titulo.classList.add('livro__titulo--lido')
    //})
    //botaoDesfaz.addEventListener('click', function(){
    //    titulo.classList.remove('livro__titulo--lido')
    //})

    //-----OUTRA FORMA DE FAZER O FUNCIONAMENTO DO BOTÃO----
    //Para fazer com condicional if temos que criar somente umm botão, que é o de 'Já li':
    // botaoLido.addEventListener('click', function(){
    //     if (titulo.classList.contains('livro__titulo--lido')){
    //         titulo.classList.remove('livro__titulo--lido')
    //     } else{
    //         titulo.classList.add('livro__titulo--lido')
    //     }
    // })
}

