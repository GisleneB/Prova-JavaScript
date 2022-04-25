/*1 - Muitas estruturas algorítmicas tem sua lógica inspirada em coisas do seu cotidiano, como por exemplo o ato de tomar água e depois ter que ir ao banheiro. Baseado nos seus conhecimentos de estruturas algorítmicas 
e na sua vivência pessoal, descreva uma situação cotidiana que se assemelha a essas respectivas estruturas abaixo:

a - Array 
b - Função
c - Laço de repetição (for)
d - Laço de repetição (while)
e - Condicionais (if e else)

Respostas:

a - Conjunto de nomes de uma familía: 'gislene', 'geane', 'marilene', 'maria'
b - escovar os dentes: utilizar pasta, escova e escovar os dentes. 
c - Para quantidade de café na xicara menor ou igual 200ml, adicionar mais café
d - Enchaguar a panela enquanto tiver sabão
e - Se pergunta se x é menor ou igual a y?

2 - Agora, com base nas suas respostas a cima, repita essa mesma situação que você descreveu, porém transformando-as em código JavaScript.

a - Array
b - Função
c - Laço de repetição (for)
d - Laço de repetição (while)
e - Condicionais (if e else)

Respostas:
*/

// a
const nomes = ['Gislene', 'Geane', 'Marilene', 'Maria'];
console.log(nomes);

// b
function escovarDentes (escova, pasta) {
    console.log('escovando os dentes com a escova ' + escova + ' e a pasta ' + pasta);
}
escovarDentes('laranja', 'colgate')

// c
for (let  quantidadeCafe = 1; quantidadeCafe <= 200; quantidadeCafe++) {
    console.log('adicionando mais café ' + quantidadeCafe + ' ml');
}

// d
let temSabao = true;
let quantidadeAgua = 0;
while (temSabao == true) {
    quantidadeAgua++;
    console.log('enchaguando panela: ' + quantidadeAgua + ' ml');
    if (quantidadeAgua == 10) {
        temSabao = false;
    }
}

// e
const x = 5;
const y = '5';

if (x <= y) {
    console.log('x é menor ou igual a y');
} else {
    console.log('y é menor que x');
}

gislene_barros_sousa


