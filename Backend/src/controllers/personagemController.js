const personagemModel = require("../models/personagem.json")
const fs = require("fs")


const findAllPersonagens = (request, response) => {

    response.status(200).json(personagemModel)
}

const findOnePersonagemById = (request, response) => {
    const { id } = request.params

    const findPersonagem = personagemModel.find(personagem => personagem.id == id)

    console.log(findPersonagem)
    response.status(200).json(findPersonagem)
}



const createPersonagem = (request, response) => {

    const personagem = request.body

    personagem.id = personagemModel.length

    personagemModel.push(personagem)

    fs.writeFile('./src/models/personagem.json', JSON.stringify(personagemModel), 'utf-8', function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }

    })

    response.status(201).json(personagem)

}

const deleteOnePersonagem = async (request, response) => {

    try {
        const { id } = request.params
        const personagens = await personagemModel.find(personagem => personagem.id == id)
        if (personagens == null) {
            return response.status(404).json({ message: 'Personagem não encontrado' })

        }

        await personagemModel.splice(id, 1)
        response.status(200).json({ message: 'Personagem deletado com sucesso' })
    } catch (err) {
        return response.status(500).json({ message: err.message })
    }

}

const updateOnePersonagem = (request, response) => {

    const updatedPersonagem = request.body
    const { id } = request.params
    const personagens = personagemModel.find(personagem => personagem.id == id)

    personagens.name = updatedPersonagem.name || personagens.name

    fs.writeFile('./src/models/personagem.json', JSON.stringify(personagemModel), 'utf-8', function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json(personagens)


}




module.exports = {
    findAllPersonagens,
    findOnePersonagemById,
    createPersonagem,
    deleteOnePersonagem,
    updateOnePersonagem
}