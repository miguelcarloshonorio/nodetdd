const router = require('express').Router();
const BoletoBusiness = require('./../business/BoletoBusiness');

router.post('/boleto/calculate',  (req, res) => {
    const {
        valor,
        dataPagamento,
        dataVencimento
    } = req.body;
    const boleto = new BoletoBusiness(new Date(dataVencimento), valor);
    const valorTotal = boleto.calcularValorAPagar(new Date(dataPagamento));
    return res.json(valorTotal);
});

module.exports = router;