const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const data = {
    "users": [
        {
            "login": "guidalcir@gmail.com",
            "nome": "guidalcir",
            "hash": "beaumont",
            "cargo": "admin",
            "comissão": ""
        }
    ],
    "projects": [
        {
            "Id": "0",
            "name": "Kelvin Trindade",
            "clientData": {
                "number": "(51) 98765-4321",
                "cpf": "123.456.789.10",
                "address": "São Carlos 218, Santa Isabel - Viamão",
                "email": "brunoadf.dev@gmail.com"
            },
            "projectData": {
                "start": "12/04/2023",
                "end": "12/05/2023",
                "ambients": "3",
                "ambientCount": "Cozinha, quarto, sala",
                "batch": "0001",
                "totalValue": "200000"
            },
            "costs": {
                "designers": "15000",
                "assembler": "800",
                "freight": "300",
                "factory": "30000",
                "taxes": "15000",
                "inputs": "20000",
                "total": "261100"
            },
            "timeline": [
                {
                    "output": "Primeiro contato.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Orçamento ok, foi para medição",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Medição ok, foi para projetar.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                }
            ],
            "inputs": [
                {
                    "name": "Metalon",
                    "supplier": "fornecedor",
                    "amount": "5",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Espelho",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Spot de luz",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Fita de led",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                }
            ]
        },
        {
            "Id": "1",
            "name": "Bruno Aguirre",
            "clientData": {
                "number": "(51) 98765-4321",
                "cpf": "123.456.789.10",
                "address": "São Carlos 218, Santa Isabel - Viamão",
                "email": "brunoadf.dev@gmail.com"
            },
            "projectData": {
                "start": "12/04/2023",
                "end": "12/05/2023",
                "ambients": "3",
                "ambientCount": "Cozinha, quarto, sala",
                "batch": "0001",
                "totalValue": "200000"
            },
            "costs": {
                "designers": "15000",
                "assembler": "800",
                "freight": "300",
                "factory": "30000",
                "taxes": "15000",
                "inputs": "20000",
                "total": "261100"
            },
            "timeline": [
                {
                    "output": "Primeiro contato.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Orçamento ok, foi para medição",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Medição ok, foi para projetar.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                }
            ],
            "inputs": [
                {
                    "name": "Metalon",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Espelho",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Spot de luz",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Fita de led",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                }
            ]
        },
        {
            "Id": "2",
            "name": "Kelvin Trindade",
            "clientData": {
                "number": "(51) 98765-4321",
                "cpf": "123.456.789.10",
                "address": "São Carlos 218, Santa Isabel - Viamão",
                "email": "brunoadf.dev@gmail.com"
            },
            "projectData": {
                "start": "12/04/2023",
                "end": "12/05/2023",
                "ambients": "3",
                "ambientCount": "Cozinha, quarto, sala",
                "batch": "0001",
                "totalValue": "200000"
            },
            "costs": {
                "designers": "15000",
                "assembler": "800",
                "freight": "300",
                "factory": "30000",
                "taxes": "15000",
                "inputs": "20000",
                "total": "261100"
            },
            "timeline": [
                {
                    "output": "Primeiro contato.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Orçamento ok, foi para medição",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Medição ok, foi para projetar.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                }
            ],
            "inputs": [
                {
                    "name": "Metalon",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Espelho",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Spot de luz",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Fita de led",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                }
            ]
        },
        {
            "Id": "3",
            "name": "Bruno Aguirre",
            "clientData": {
                "number": "(51) 98765-4321",
                "cpf": "123.456.789.10",
                "address": "São Carlos 218, Santa Isabel - Viamão",
                "email": "brunoadf.dev@gmail.com"
            },
            "projectData": {
                "start": "12/04/2023",
                "end": "12/05/2023",
                "ambients": "3",
                "ambientCount": "Cozinha, quarto, sala",
                "batch": "0001",
                "totalValue": "200000"
            },
            "costs": {
                "designers": "15000",
                "assembler": "800",
                "freight": "300",
                "factory": "30000",
                "taxes": "15000",
                "inputs": "20000",
                "total": "261100"
            },
            "timeline": [
                {
                    "output": "Primeiro contato.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Orçamento ok, foi para medição",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                },
                {
                    "output": "Medição ok, foi para projetar.",
                    "issuer": "Kelvin",
                    "time": "12 de abril de 2023 às 09:30"
                }
            ],
            "inputs": [
                {
                    "name": "Metalon",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Espelho",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Spot de luz",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                },
                {
                    "name": "Fita de led",
                    "supplier": "fornecedor",
                    "amount": "quantidade",
                    "size": "tamanho",
                    "unitaryValue": "valor unitário",
                    "totalValue": "valor total",
                    "color": "cor"
                }
            ]
        }
    ]
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(jsonParser)

http
    .createServer(app)
    .listen(4444)

app.get('/', (req, res) => {
    res.send(data.projects)
})
app.get('/project/:projectId', (req, res) => {
    const { projectId } = req.params
    data.projects.map(project => {
        if(project.Id === projectId){
        console.log(project)
        res.send(project)
        }
    })
})