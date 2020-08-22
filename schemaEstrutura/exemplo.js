module.exports = {
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
};