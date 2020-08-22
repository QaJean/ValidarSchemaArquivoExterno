// Node.js require:
var Ajv = require('ajv');
const { TestScheduler } = require('jest');

var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

var schema = {
	"properties": {
		"numero": {"type": "number"},
		"escrita": {"type": "string"},
		"numeroOuEscrita": {"type": ["number", "string"]},
		"numeroOuEscrita2": {"type": ["number", "string"]},
		"arraySimples": {"type": "array",
			"items": {"type" : ["number", "string"]}
		},	
		"arrayComItens": {"type": "array",
			"items" : {"type" : "object",
				"properties" : {
					"palavra": {"type" : "string"},
					"numero" : {"type" : "number"}
				}
			}
		},
		"ObjectSimples": { "type" : "object",
			"properties" : {
				"escrita": {"type" : "string"}
			}
		} 
	}
}
console.log('schema ' + schema)
  var data = {
    "numero": 5,
    "escrita": "ABC",
	  "numeroOuEscrita": "1",
	  "numeroOuEscrita2": 1,
	  "arraySimples":["5",4],
    "arrayComItens":[
      {"palavra": "ABC"},
      {"numero": 5}
    ],
    "ObjectSimples": {
        "escrita": "ABC"
    }
}
  console.log('data ' + data)

var validate = ajv.compile(schema);
console.log('validate ' + validate)
var valid = validate(data);
console.log('valid ' + valid)
test("Teste", () =>{
  if(!valid) {
    console.log(validate.errors);
  }
  expect(valid).toBe(true);
})