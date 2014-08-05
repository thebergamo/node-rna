var actions = ['somar', 'some'];

module.exports = function(expression){
    if(actions.indexOf(expression[0]) < -1)
        return false;

    //expression.shift();
    var answer = 0;
    expression.forEach(function(value, index){
        if(index > 0){
            if(value != '+')
                answer += parseInt(value);
        }
    });
    return answer;
}
