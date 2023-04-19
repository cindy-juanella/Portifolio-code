//Map é uma estrutura de dados pronta, basicamente uma lista como se fosse uma array. Vai ter sempre uma chave e um valor, por exemplo
//novoMapa.set('',{})  . Isso ajuda a reduzir span ou evitar duplicar as coisas. Por exemplo, acessei várias vezes o mesmo site no mesmo dia e horário mas não quero duplicar isso no histórico.
// isso ajuda a não sobrecarregar os aparelhos como o celular ou relogio por exemplo , assim não repete o "cache" dos historicos.

var novoMapa = new Map();
novoMapa.set('11/11/2011 - 23:30',{});
novoMapa.set('11/11/2011 - 23:30',{});
novoMapa.set('11/11/2011 - 23:32',{});

var resultado = novoMapa
console.log(resultado);



