//const imagemGatinho = document.getElementsByClassName('item')

const imagemGatinho = document.querySelectorAll('.item__imagem')

for (let i = 0; i < imagemGatinho.length; i++){
        imagemGatinho[i].addEventListener('click', function(){
            imagemGatinho[i].classList.add('remover')
        })
}

// Outra maneira

/*const imagemGatinho = document.querySelectorAll('.item__imagem')

imagemGatinho.forEach(function(gato){
    gato.addEventListener('click', function(evento){
        evento.target.classList.add('remover')
    })
})*/

//target é para quem foi direcionado o click
//classList é uma lista com todas as classes do elemento