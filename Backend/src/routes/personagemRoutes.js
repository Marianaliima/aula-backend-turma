const express = require ('express')

const router = express.Router()

const PersonagemController = require("../controllers/personagemController")

router.get('/personagens', PersonagemController.findAllPersonagens)

router.get('/personagens/:id', PersonagemController.findOnePersonagemById)

router.post('/personagem/', PersonagemController.createPersonagem)

module.exports = router