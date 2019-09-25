const form = document.getElementById('formulario-de-comentarios')

/*let divErro = document.querySelector('error')*/
const erro = document.querySelector('.error')

form.addEventListener('submit', function(evento){
    evento.preventDefault() //método para previnir o comportamento padrão do elemento, que nesse caso é recarregar a página.
    //E se acontecer isso a execução do código vai parar e perderemos as informações do usuário
    let mensagemUsuario = document.querySelector('.input-de-texto')
    let valorMensagem = mensagemUsuario.value //para capturar a mensagem que o usuário informou no input

    //.trim() funciona para tirar/aparar os espaços das pontas da string
    /*if (valorMensagem.trim() === ''){
        divErro.classList.add('errorTextAppears')
        mensagemUsuario.classList.add('borda')
    } else {
        let novaDiv = document.createElement('div')
        novaDiv.textContent = valorMensagem
        const divMae = document.getElementById('todos-os-comentarios')
        divMae.appendChild(novaDiv)
        novaDiv.classList.add('comentario')
        mensagemUsuario.classList.remove('borda')
        divErro.classList.remove('errorTextAppears')
        // mensagemUsuario.value = '' é um dos jeitos de 'esvaziar' o input, mas não o melhor porque se tivermos muitos inputs teremos que escrever essa linha para cada campo
        form.reset()
    }*/


    /*if (mensagemUsuario.value.trim() === ''){
        let erro = document.createElement('p')
        divErro.appendChild(erro)
        erro.textContent = 'Digite um texto, fofa'
        mensagemUsuario.classList.add('borda')
    } else{
        mensagemUsuario.classList.remove('borda')
        let novaDiv = document.createElement('div')
        novaDiv.textContent = valorMensagem
        const divMae = document.getElementById('todos-os-comentarios')
        divMae.appendChild(novaDiv)
        novaDiv.classList.add('comentario')
        // mensagemUsuario.value = '' é um dos jeitos de 'esvaziar' o input, mas não o melhor porque se tivermos muitos inputs teremos que escrever essa linha para cada campo
        form.reset() //irá resetar o input do formulário, deixará em branco
            ESSE FAZ UM BUG DE REPETIR A MENSAGEM DE ERRO TODA VEZ QUE O SUBMIT É CLICADO
    }*/

    if (valorMensagem.trim() === ''){
        erro.textContent = 'Digite um texto, fofa'
        mensagemUsuario.classList.add('borda')
    } else{
        mensagemUsuario.classList.remove('borda')
        erro.textContent = null
        let novaDiv = document.createElement('div')
        novaDiv.textContent = valorMensagem
        const divMae = document.getElementById('todos-os-comentarios')
        divMae.appendChild(novaDiv)
        novaDiv.classList.add('comentario')
        // mensagemUsuario.value = '' é um dos jeitos de 'esvaziar' o input, mas não o melhor porque se tivermos muitos inputs teremos que escrever essa linha para cada campo
        form.reset()
    }    
})