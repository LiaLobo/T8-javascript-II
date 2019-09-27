let form = document.getElementById('form')
const formBtn = document.querySelector('.button transacao__button')
const  paragrafoGuardaResposta = document.querySelector('.extrato__header')

form.addEventListener('submit', function(event){
    event.preventDefault()

    let transacao = document.getElementById('transacaoInputNome')
    let valorTransacao = document.getElementById('transacaoInputValor')
    let dataTransacao = document.getElementById('transacaoInputData')

    let dadoDaTransacao = transacao.value
    let dadoDoValor = valorTransacao.value
    let dadoDaData = dataTransacao.value

    let criaColuna = document.createElement('tr')
    paragrafoGuardaResposta.appendChild(criaColuna)

    let linhaTransacaoUsuario = document.createElement('td')
    linhaTransacaoUsuario.textContent = dadoDaTransacao
    criaColuna.appendChild(linhaTransacaoUsuario)
        
    let linhaValorUsuario = document.createElement('td')
    linhaValorUsuario.textContent = dadoDoValor
    criaColuna.appendChild(linhaValorUsuario) 
       
    let linhaDataUsuario = document.createElement('td')
    linhaDataUsuario.textContent = dadoDaData
    criaColuna.appendChild(linhaDataUsuario) 

    form.reset()
})