const personagemModel = require("../models/personagem.json")
const fs = require("fs")


const findAllPersonagens = (request, response) => {

    response.status(200).json(personagemModel)
}

const findOnePersonagemById = (request, response) => {
    const  { id }  = request.params

    const findPersonagem = personagemModel.find(personagem => personagem.id == id)

    console.log(findPersonagem)
         response.status(200).json(findPersonagem)
}



const createPersonagem = (request, response) => {

    const personagem = request.body

    personagem.id = personagemModel.length

    personagemModel.push(personagem)

    fs.writeFile('./src/models/personagem.json', JSON.stringify(personagemModel), 'utf-8', function(err) {
        if(err) {
            return response.status(424).send({message: err})
        }

})

response.status(201).json(personagem)

}

module.exports = {
    findAllPersonagens,
    findOnePersonagemById,
    createPersonagem
}