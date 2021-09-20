
describe('Suite de testes de multiplicaçao',()=>{

    const Calculadora = require("../src/js/calculadora")

    it('deve retornar 6 para 2 e 3',()=>{
        expect(Calculadora.multiplicar(2,3)).toEqual(6);
    })

    it('deve retornar 12 para 3 e 4',()=>{
        expect(Calculadora.multiplicar(3,4)).toEqual(12);
    })

    it("deve retornar -15 para -3 e 5",()=>{
        expect(Calculadora.multiplicar(-3,5)).toEqual(-15);
    })

    it("deve retornar 6 para 2 e 3 em formato texto",()=>{
        expect(Calculadora.multiplicar('2','3')).toEqual(6);
    })

    it('deve retornar 9 para 4 e 2.25 ',()=>{
        expect(Calculadora.multiplicar(4,2.25)).toEqual(9);
    })

    it('deve 0 para 1 undefined ',()=>{
        expect(Calculadora.multiplicar(undefined,5)).toEqual(0);
    })

    it('deve 0 para 2 undefined ',()=>{
        expect(Calculadora.multiplicar(5,undefined)).toEqual(0);
    })

})