var armazenar = require(__dirname +'/armazenar');
/*
    OUVIR:
        Ao ouvir algo eu recebo informações e guardo elas no meu cerebro para
        para que eu possa usar esse conhecimento de alguma forma em algum momento.
*/

module.exports = function(input){
    var expression = [];
    input.forEach(function(arg, index){
        if(index >= 2)
            expression.push(arg);
    });
    armazenar(expression, '');
    return expression;
}
