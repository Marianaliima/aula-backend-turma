const express = require ('express')

const router = express.Router()

const PersonagemController = require("../controllers/personagemController")

router.get('/personagens', PersonagemController.findAllPersonagens)

router.get('/personagens/:id', PersonagemController.findOnePersonagemById)

router.post('/personagem/', PersonagemController.createPersonagem)

router.patch('/personagens/:id', PersonagemController.updateOnePersonagem)

router.delete('/personagem/:id', PersonagemController.deleteOnePersonagem)

module.exports = router