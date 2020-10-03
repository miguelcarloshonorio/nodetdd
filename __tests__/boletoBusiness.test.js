const {
    expect
} = require('chai');
const BoletoBusiness = require('../src/business/BoletoBusiness');

describe('Boleto Business Suite', () => {
    describe('Feature: Cálculo do valor a pagar', () => {
        it('Boleto em dia', () => {
            // GIVEN
            let target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            let dataAtual = new Date(2020, 10, 12);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(100);

        });

        it('Boleto pago antecipadamente com desconto.', () => {
            // GIVEN
            let target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            let dataAtual = new Date(2020, 10, 7);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(95);
            expect(target.calcularDesconto()).to.eq(5);
        });

        it('Boleto pago com atraso com multa', () => {
            // GIVEN
            let target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            let dataAtual = new Date(2020, 10, 17);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(105);
            expect(target.calcularAcrescimento()).to.eq(5);
        });

        it('Boleto criado com data inválida', () => {

            expect(function(){
                new BoletoBusiness(null, 100);
            }).to.throw('Data Inválida');
        });
        
        it('Boleto criado com valor inválida', () => {
            expect(function(){
                new BoletoBusiness(new Date(), null);
            }).to.throw('Valor Obrigatório');
        });
    });

});