var ouvir = require(__dirname +'/neuronios/ouvir')(process.argv);
var somar = require(__dirname +'/neuronios/somar');
var armazenar = require(__dirname +'/neuronios/armazenar');

/*
    As expressões são expressões simples e inicialmente mantendo uma mesma forma:
    estrutura da frase: VERBO + AÇÃO ESPERADA
    Exemplo: SOME 1 + 1 ou DIVIDA 10 / 5
*/
var resposta = somar(ouvir);
if(resposta == false)
    console.log('Infelizmente sei apenas realizar operações de soma. :(');

armazenar(ouvir, resposta);

console.log(resposta);
