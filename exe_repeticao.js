// Exercício 1 - Estrutura de repetição

//Percorrer uma lista de nomes, contendo os nomes: 
//Eduardo, Maria, Fernando, Joao e Franciso
//Numero da execução, começando em 1 
//Nome que está sendo executado
//Separadores

//Exemplo
    // Execução 1:
    //Nome: Eduardo
    // ----------

    const nomes = ['Eduardo', 'Maria', 'Fernando', 'Joao', 'Franciso']

    nomes.forEach((nome, indice) =>{ 
        console.log('Execução: ', indice + 1)
        console.log('Nome: ', nome )
        console.log('-----------------------')
    })
    
    
    /* for (let indice = 0; indice <10; indice++) {
    console.log(indice)
    }
    
    for (let indice = 0; indice < cidades.length; indice++) {
        //console.log(cidades[indice])
        console.log(cidades[2])
        } */
    
    