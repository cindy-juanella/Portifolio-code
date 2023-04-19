//SET : evita duplicada de palavras, e tags por exemplo
// 

var novoSet = new Set();

novoSet.add('backend');
novoSet.add('frontend');
novoSet.add('mopbile');
novoSet.add('mobile');
novoSet.add('mobile');


var resultado = novoSet;
console.log(resultado);
