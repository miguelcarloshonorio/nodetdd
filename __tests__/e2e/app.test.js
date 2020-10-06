const {
    expect
} = require('chai');
const request = require('supertest');
const app = require("./../../src/app/app");


describe("Endpoint Test", async () => {

    it("POST: Boleto em dia", async () => {
        const body = {
            valor: 100,
            dataPagamento: "2020-10-12 00:00:00",
            dataVencimento: "'2020-10-12 00:00:00"
        }

        const response = await request(app).post('/boleto/calculate').send(body);

        expect(response.body).eq(Number(100));
    });
    
    it("POST: Boleto pago antecipadamente com desconto", async () => {
        const body = {
            valor: 100,
            dataPagamento: "2020-10-05 00:00:00",
            dataVencimento: "'2020-10-12 00:00:00"
        }

        const response = await request(app).post('/boleto/calculate').send(body);

        expect(response.body).eq(Number(95));
    });
    
    it("POST: Boleto pago com atraso com multa", async () => {
        const body = {
            valor: 100,
            dataPagamento: "2020-10-12 00:00:00",
            dataVencimento: "'2020-10-05 00:00:00"
        }

        const response = await request(app).post('/boleto/calculate').send(body);

        expect(response.body).eq(Number(105));
    });
});