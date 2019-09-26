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

    let autor = document.createElement('li')
    listaCatalogo.appendChild(autor)
    autor.textContent = livros[prop]['quemEscreveu']

    let linkLivro = document.createElement('a')
    listaCatalogo.appendChild(linkLivro)
    linkLivro.textContent = livros[prop]['link']
    linkLivro.setAttribute('href', livros['link'])
    linkLivro.setAttribute('target', '_blank')
}