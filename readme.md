# Marketplace Version Checker

Um projeto de automação feito com Postman que ajuda a garantir que as versões das plataformas estão de acordo a ultima atualização feita após o deploy semanal.

## Fluxo de execução

Utilizando o Postman, este projeto acessa uma URL por meio de um requisição (GET) e tem como retorno o código HTML da página acessada, em seguida, é aplicado um script de teste contendo uma expressão regular para identificar o número da versão atual do marketplace (contido no HTML). A versão encontrada com o script é então comparada com a versão esperada. Resultando se o marketplace está ou não na mesma versão.

**Demonstração 01**: Verificação Manual em dois marketplaces diferente.

![Imagem](/imagens-readme/mvc-image01.png)

**Demonstração 02**: Verificação Automatizada em 42 marketplaces diferentes usando Run Collection e arquivo CSV com a URL dos marketplaces.

![Imagem](/imagens-readme/mvc-image02.png)

Na demonstração 02, o Postman recebe a importação de um arquivo CSV contendo as URLs dos Marketplaces que serão testados e faz uma execução para cada um até completar todos as verificações.

Vale ressaltar que, o arquivo CSV contém duas colunas uma chamada `marketplaceUrl` e outra `marketplaceName`, que respectivamente são as mesmas variáveis utilizadas na collection e requisições feitas: `{{marketplaceUrl}}` e 
`{{marketplaceName}}`.

## Overview do Script executado

```javascript
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
```

No Script é utilizado o recurso de expressões regulares na variável `marketplaceVersion` para identificar qual versão do marketplace está dentro do HTML que recebemos como retorno após a requisição da URL. E então, o valor obtido é comparado com a versão que declaramos em `expectedVersion`

## O que aprendi / exercitei?

**Postman**: Como utilizar o Run Collection, aba de Testes e importação de amostra de dados para testes com arquivos CSV.

**JavaScript**: Reforcei os estudos de lógica e aprendi sobre expressões regulares.

**Testes e Qualidade de Software**:  Compreendi como essa automação vai me ajudar com mais eficiência a garantir que todas as plataformas foram atualizadas após o deploy no momento do testes de regressão. E caso encontre algum erro, vai me permitir reportar em tempo hábil.

## Feedbacks e contribuições

Obrigado pela visita e caso tenha ficado alguma dúvida, fico à disposição para conversarmos a respeito e também estou disponível para receber feedbacks de como posso melhorá-lo em ocorrências futuras. :)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

