

describe('Suite de testes de divisao ',()=>{

    const Calculadora = require("../src/js/calculadora")

    it('deve dividir 4 por 2, resultado em 2',()=>{
        expect(Calculadora.dividir(4,2)).toEqual(2)
    })

    it('deve dividir 10 por 2, resultado em 5',()=>{
        expect(Calculadora.dividir(10,2)).toEqual(5);
    })

    it('deve dividir 10 por 2, resultado em 5, no formato texto',()=>{
        expect(Calculadora.dividir('10','2')).toEqual(5);
    })

    it('deve dividir -10 por 2, resultado em 5',()=>{
        expect(Calculadora.dividir(-10,2)).toEqual(-5);
    })

    it('deve dividir -11 por 2, resultado em 5.5',()=>{
        expect(Calculadora.dividir(-11,2)).toEqual(-5.5);
    })

    it('deve retornar "ERRO" para divisao por 0',()=>{
        expect(Calculadora.dividir(10,0)).toEqual("ERRO")

    })

    it('deve retornar 0 para o 1 undefined ',()=>{
        expect(Calculadora.dividir(undefined,2)).toEqual(0);
    })

    it('deve retornar 0 para o 2 undefined ',()=>{
        expect(Calculadora.dividir(2,undefined)).toEqual(0);
    })
})