const fs = require('fs'); 



/*
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
*/

const recipesToFormat = require("./recipes.json");

const noContent = [];
recipesToFormat.map((recipe, index) => {
    for (let sectionIndex = 0; sectionIndex < recipe.secao.length; sectionIndex++){
        if (recipe.secao[sectionIndex].conteudo.length == 0) return noContent.push(index);
    };
});

const noContentRecipes = noContent.map(recipeIndex => {
    return recipesToFormat[recipeIndex]
});

const noContentRecipesStringfied = JSON.stringify(noContentRecipes, null, 1);

fs.writeFile("./noContentRecipes.json", noContentRecipesStringfied, error => console.log(error))


const almostNoContent = [];
recipesToFormat.map((recipe, index) => {
    for (let sectionIndex = 0; sectionIndex < recipe.secao.length; sectionIndex++){
        if (recipe.secao[sectionIndex].conteudo.length == 1) return almostNoContent.push(index);
    };
});

const almostNoContentRecipes = almostNoContent.map(recipeIndex => {
    return recipesToFormat[recipeIndex]
});

const almostNoContentRecipesStringfied = JSON.stringify(almostNoContentRecipes, null, 1);

fs.writeFile("./almostNoContentRecipes.json", almostNoContentRecipesStringfied, error => console.log(error))

const content = [];
recipesToFormat.map((recipe, index) => {
    for (let sectionIndex = 0; sectionIndex < recipe.secao.length; sectionIndex++){
        if (recipe.secao[sectionIndex].conteudo.length == 1 || recipe.secao[sectionIndex].conteudo.length == 0) return;
    };
    content.push(index);
});

const contentRecipes = content.map(recipeIndex => {
    return recipesToFormat[recipeIndex]
});

const contentRecipesStringfied = JSON.stringify(contentRecipes, null, 1);

fs.writeFile("./contentRecipes.json", contentRecipesStringfied, error => console.log(error))
