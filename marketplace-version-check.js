// Número da versão: alterar para versão atual a cada semana
const expectedVersion = "37.7.8"; 

// Expressão regular para encontrar o padrão numérico "00.0.0" dentro do HTML
const marketplaceVersion = responseBody.match(/\b\d+\.\d+\.\d+\b/);

let testDescription = pm.variables.get("marketplaceName") + " - Versão: ";
let testPassed = false;

// Comparação da versão do marketplace versus versão esperada
if (marketplaceVersion && marketplaceVersion[0] === expectedVersion) {
    testDescription += marketplaceVersion[0];
    testPassed = true;
} else {
     testDescription += marketplaceVersion[0];
    testPassed = false;
}

tests[testDescription] = testPassed;