//lib para ler o arquivo que deseja validar
const fs = require('fs'); 

//Abaixo, incluir o Local do arquivo como no exemplo 
const dadosSchema = fs.readFileSync('C://Users//Usuario//Desktop//ValidarSchemaArquivo//exemploArquivo//returnJson.json')
const schemaRecebido = JSON.parse(dadosSchema)

//buscar o arquivo com a estrutura/schema esperado
const schemaEsperado = require('../schemaEstrutura/exemplo')

// Node.js require:
var Ajv = require('ajv');
var ajv = new Ajv(); 
var validate = ajv.compile(schemaEsperado);
var valid = validate(schemaRecebido);

test("Teste de validação", () =>{
  if(!valid) {
    console.log(validate.errors);
  }
  expect(valid).toBe(true);
})