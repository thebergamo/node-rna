var informacao = require(__dirname +'/informacao');
/*
    ARMAZENAR:
        Precisamos guardar em algum lugar as informações que nos são passadas
        para que em algum momento possamos acessar essas informações e aprender
        com elas.
*/

module.exports = function(expression, answer){
    var verbo = expression[0]
    var action = [];
    expression.forEach(function(value, index){
        if(index > 0)
            action.push(value);
    });
    var dado = {
        'action': action,
        'answer': answer
    };
    informacao.collection('expressions').update({verb: verbo},
            {$push: {expression: dado}},
            { upsert: true }, function(err){
        if(err)
            console.log('Infelizmente não consegui guardar essa informação :(');
    })
}
