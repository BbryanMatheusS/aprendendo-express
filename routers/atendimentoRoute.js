const { Router }  = require("express");
const router = Router()


router.get('/atendimentos', (req, res) => {
    res.send('chegou aqui estamos listando todos os atendimentos...');
})
router.post('/atendimentos', (req, res) => {
    res.send('chegou aqui estamos criando um novo atendimentos...');
})
router.put('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send(`chegou aqui estamos atualisando o atendimento ${id}...`);
})
router.delete('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send(`chegou aqui estamos listando todos os atendimentos ${id}...`);
})

module.exports = router;