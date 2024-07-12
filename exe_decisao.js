// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
// Contendo:  ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
// Para cada item, verificar se a cidade "Florianópolis" está presente na lista
// Caso esteja, avisar! 
// Caso não esteja o elementro procurado, avisar
// Informe o número de execução

//Execução 1
//Cidade: Sâo Paulo
//Encontrado / Não Encontrado
//-----------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade, indice) =>{ 
    console.log('Execução', indice +1)
    console.log('Cidade: ', cidade )

    if (cidade == 'Florianópolis'){
        console.log ('Encontrado!')
    } else {
        console.log('Não Encontrado!')
        }
    console.log('-----------------------')
    })