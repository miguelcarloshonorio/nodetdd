const { isAfter, isDate } = require('date-fns');
class BoletoBusiness {

    constructor(dataDeVencimento, valor) {
        
        if (!isDate(dataDeVencimento)) {
            throw new Error('Data Inválida');
        }
        
        if (!valor) {
            throw new Error('Valor Obrigatório');
        }

        this.valor = valor;
        this.dataDeVencimento = dataDeVencimento;
    }

    calcularValorAPagar(dataAtual){
        
        if(isAfter(dataAtual, this.dataDeVencimento)){
            // boletão atrasado
            return this.valor + this.calcularAcrescimento();
        } else if(isAfter(this.dataDeVencimento, dataAtual)){
            // boletão adianatdo
            return this.valor - this.calcularDesconto();            
        } else {
            // datas iguais
            return this.valor;
        }
    }

    calcularDesconto(){
        return this.valor * 0.07;
    }
    
    calcularAcrescimento(){
        return this.valor * 0.07;
    }
}

module.exports = BoletoBusiness;