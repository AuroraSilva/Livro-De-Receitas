const fs = require('fs'); 
const receitas = require('./receitas.json');
const teste = [receitas[0], receitas[1], receitas[2]];
const reformat = receitas.map(receita => {
    const newFormat = {
        "nome": receita.nome,
        "secao": receita.secao,
    };
    return newFormat;

});


const reformatString = JSON.stringify(reformat, null, 1);

fs.writeFile("./recipes.json", reformatString, error => console.log(error))

