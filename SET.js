//SET : evita duplicata de palavras, e tags por exemplo
// 

var novoSet = new Set();

novoSet.add('backend');
novoSet.add('frontend');
novoSet.add('mobile');
novoSet.add('mobile');
novoSet.add('mobile');


var resultado = novoSet;
console.log(resultado); // vai apaecer somente um 'mobile'
