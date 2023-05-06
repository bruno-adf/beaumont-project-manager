const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const fs = require('fs')

var data = require('./data.json')
const { finished } = require('stream')
// const data = {
//     "users": [
//         {
//             "login": "guidalcir@gmail.com",
//             "nome": "guidalcir",
//             "hash": "beaumont",
//             "cargo": "admin",
//             "comissão": ""
//         }
//     ],
//     "projects": [
//         {
//             "id": "0",
//             "clientData": {
//                 "name": "Bruno Aguirre",
//                 "number": "(51) 98765-4321",
//                 "cpf": "123.456.789.10",
//                 "address": "São Carlos 218, Santa Isabel - Viamão",
//                 "email": "brunoadf.dev@gmail.com"
//             },
//             "projectData": {
//                 "start": "12/04/2023",
//                 "end": "12/05/2023",
//                 "ambients": ["Cozinha", "quarto", "sala"],
//                 "ambientCount": "3",
//                 "batch": "0001",
//                 "totalValue": "200000",
//                 "designers": ["Kelvin"]
//             },
//             "costs": {
//                 "designers": "15000",
//                 "assembler": "800",
//                 "freight": "300",
//                 "factory": "30000",
//                 "taxes": "15000",
//                 "inputs": "20000",
//                 "total": "261100"
//             },
//             "timeline": [
//                 {
//                     "output": "Primeiro contato.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Orçamento ok, foi para medição",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Medição ok, foi para projetar.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 }
//             ],
//             "inputs": [
//                 {
//                     "name": "Metalon",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Espelho",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Spot de luz",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Fita de led",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 }
//             ]
//         },
//         {
//             "id": "1",
//             "clientData": {
//                 "name": "Bruno Aguirre",
//                 "number": "(51) 98765-4321",
//                 "cpf": "123.456.789.10",
//                 "address": "São Carlos 218, Santa Isabel - Viamão",
//                 "email": "brunoadf.dev@gmail.com"
//             },
//             "projectData": {
//                 "start": "12/04/2023",
//                 "end": "12/05/2023",
//                 "ambients":  ["Cozinha", "quarto", "sala"],
//                 "ambientCount": "3",
//                 "batch": "0001",
//                 "totalValue": "200000",
//                 "designers": ["Kelvin"]
//             },
//             "costs": {
//                 "designers": "15000",
//                 "assembler": "800",
//                 "freight": "300",
//                 "factory": "30000",
//                 "taxes": "15000",
//                 "inputs": "20000",
//                 "total": "261100"
//             },
//             "timeline": [
//                 {
//                     "output": "Primeiro contato.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Orçamento ok, foi para medição",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Medição ok, foi para projetar.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 }
//             ],
//             "inputs": [
//                 {
//                     "name": "Metalon",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Espelho",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Spot de luz",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Fita de led",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 }
//             ]
//         },
//         {
//             "id": "2",
//             "clientData": {
//                 "name": "Bruno Aguirre",
//                 "number": "(51) 98765-4321",
//                 "cpf": "123.456.789.10",
//                 "address": "São Carlos 218, Santa Isabel - Viamão",
//                 "email": "brunoadf.dev@gmail.com"
//             },
//             "projectData": {
//                 "start": "12/04/2023",
//                 "end": "12/05/2023",
//                 "ambients":  ["Cozinha", "quarto", "sala"],
//                 "ambientCount": "3",
//                 "batch": "0001",
//                 "totalValue": "200000",
//                 "designers": ["Kelvin"]
//             },
//             "costs": {
//                 "designers": "15000",
//                 "assembler": "800",
//                 "freight": "300",
//                 "factory": "30000",
//                 "taxes": "15000",
//                 "inputs": "20000",
//                 "total": "261100"
//             },
//             "timeline": [
//                 {
//                     "output": "Primeiro contato.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Orçamento ok, foi para medição",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Medição ok, foi para projetar.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 }
//             ],
//             "inputs": [
//                 {
//                     "name": "Metalon",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Espelho",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Spot de luz",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Fita de led",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 }
//             ]
//         },
//         {
//             "id": "3",
//             "clientData": {
//                 "name": "Bruno Aguirre",
//                 "number": "(51) 98765-4321",
//                 "cpf": "123.456.789.10",
//                 "address": "São Carlos 218, Santa Isabel - Viamão",
//                 "email": "brunoadf.dev@gmail.com"
//             },
//             "projectData": {
//                 "start": "12/04/2023",
//                 "end": "12/05/2023",
//                 "ambients":  ["Cozinha", "quarto", "sala"],
//                 "ambientCount": "3",
//                 "batch": "0001",
//                 "totalValue": "200000",
//                 "designers": ["Kelvin"]
//             },
//             "costs": {
//                 "designers": "15000",
//                 "assembler": "800",
//                 "freight": "300",
//                 "factory": "30000",
//                 "taxes": "15000",
//                 "inputs": "20000",
//                 "total": "261100"
//             },
//             "timeline": [
//                 {
//                     "output": "Primeiro contato.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Orçamento ok, foi para medição",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 },
//                 {
//                     "output": "Medição ok, foi para projetar.",
//                     "issuer": "Kelvin",
//                     "time": "12 de abril de 2023 às 09:30"
//                 }
//             ],
//             "inputs": [
//                 {
//                     "name": "Metalon",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Espelho",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Spot de luz",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 },
//                 {
//                     "name": "Fita de led",
//                     "supplier": "fornecedor",
//                     "amount": "quantidade",
//                     "size": "tamanho",
//                     "unitaryValue": "valor unitário",
//                     "totalValue": "valor total",
//                     "color": "cor"
//                 }
//             ]
//         }
//     ]
// }

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
        if (project.id === projectId) {
            res.send(project)
        }
    })
})
app.post('/saveProject', (req, res) => {
    const { newProjectData } = req.body
    console.log( newProjectData )
    res.send('ok')
    const index = data.projects.findIndex(obj => obj.id === newProjectData.id)
    data.projects[index] = newProjectData;
    saveData(data)
})

const saveData = () => { 
    const finished = (error) => {
        if(error){
            console.error(error)
            return
        }
    }

    const newData = JSON.stringify(data)
    fs.writeFile('data.json', newData, finished)
}