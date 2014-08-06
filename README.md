node-rna
========

Node RNA(Redes Neurais Artificiais) é um projeto que visa entender e criar uma pequena RNA utilizando as tecnologias Node.js e MongoDB.

========

A estrutura dessa proposta de RNA ainda é muito simples. A premissa de que cada neurônio tem uma função especifica é por onde iremos iniciar. Sendo assim cada neuronio realiza apenas uma função que iremos denomiar de "verbos".
Esses verbos são administrados por um mecanismo que irá entender qual é a função/neuronio deve ser ativado dependendo da situação apresentada.
O escopo inicial é apenas um neuronio somador. Entretanto temos mais algumas premissas de outros neuronios com funções especificas e simples para nos ajudar.

Inicialmente temos os seguintes Neuronios:

####Ouvir
O primeiro passo para nossa rede interagir com o mundo é "ouvir" o que é solicitado a ela. Então esse neuronio simplesmente cuida de ouvir as entradas solicitadas e guardar essa expressão de entrada como informações.

####Armazenar
Toda expressão que chega inicialmente deve ser armazenada para que possamos em algum momento consultar essa nosa "base de conhecimentos" para conseguir solucionar problemas mais complexos em um futuro. Entretanto esse neuronio "Armazenar" trata apenas de guardar essas informações.

####Informação
Esse neuronio é responsável por ser nosso meio de comunicação com a base de conhecimento. Ele não acessa, nem guarda simplesmente provê um meio de um neurônio acessar a base para efetuar as ações que são pertinentes.

####Somar
Somar é o primeiro neurônio de ação que temos, esse por sua vez irá somar 2 ou mais numeros que forem passados na expressão de entrada. E ao terminar a soma armazenar na nossa base de conhecimento a resposta.

### Próximos Passos

Bom, agora que já temos uma estrutura básica de um sistema que consegue "armazenar o conhecimento" e resolver uma situação bem simples os próximos passos que pretendo implementar são:

#####Funções basicas da matematica
Implementar todas as funções mais básicas da matematica como: Subtração, Divisão, Multiplicação e Porcentagem. No proximo passo irei implementar esses neuronios.

#####Consultar Conhecimento
De nada adianta armazenar o conhecimento se não podemos consultar o mesmo para resolver uma situação já passada sem precisar pensar novamente no resultado sendo que já fizemos isso algumas vezes antes então é mais fácil utilizar o melhor resultado encontrado anteriormente. 


