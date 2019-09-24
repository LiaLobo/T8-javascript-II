let pinguim = {
    'nome': 'Carlos',
    'idade': 5,
    'origem': 'Ártico'
}

pinguim.andar = function() {
    console.log('Andou!')
}

pinguim.podeVoar = false

pinguim.voar = function() {
    if (this.podeVoar){
        console.log('Pinguim pode voar (:')
    } else {
        console.log('Pinguim não pode voar :/')
    }
}