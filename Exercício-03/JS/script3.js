const primeira = document.getElementById('primeira-section')
const segunda = document.getElementById('segunda-section')
const terceira = document.getElementById('terceira-section')

document.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop >= 200){
        primeira.classList.add('vermelha')
    }
    
    if (document.documentElement.scrollTop >= 401){
        segunda.classList.add('azul')
    } 

    if (document.documentElement.scrollTop >= 650){
        terceira.classList.add('verde')
    }
})