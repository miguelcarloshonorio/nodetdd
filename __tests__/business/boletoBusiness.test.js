const {
    expect
} = require('chai');
const BoletoBusiness = require('../../src/business/BoletoBusiness');

describe('Boleto Business Suite', () => {
    describe('Feature: Cálculo do valor a pagar', () => {
        it('Boleto em dia', () => {
            // GIVEN
            const target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            const dataAtual = new Date(2020, 10, 12);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(100);

        });

        it('Boleto pago antecipadamente com desconto.', () => {
            // GIVEN
            const target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            const dataAtual = new Date(2020, 10, 7);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(95);
        });

        it('Boleto pago com atraso com multa', () => {
            // GIVEN
            const target = new BoletoBusiness(new Date(2020, 10, 12), 100);

            // AND
            const dataAtual = new Date(2020, 10, 17);

            // WHEN
            expect(target.calcularValorAPagar(dataAtual)).to.eq(105);
        });

        it('Boleto criado com data inválida', () => {

            expect(function(){
                new BoletoBusiness(null, 100);
            }).to.throw(Error, 'Data Inválida');
        });
        
        it('Boleto criado com valor inválida', () => {
            expect(function(){
                new BoletoBusiness(new Date(), null);
            }).to.throw(Error, 'Valor Obrigatório');
        });
    });

});