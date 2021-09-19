describe('Suite de testes de subtraçao ',()=>{
    const Calculadora = require("../src/js/calculadora") 

    it('deve retornar 5 para 8 e 3',()=>{
        expect(Calculadora.subtrair(8,3)).toEqual(5)
    })

    it('deve retornar 7 para 9 e 2 em forma de texto',()=>{
        expect(Calculadora.subtrair('9','2')).toEqual(7)
    })

    it('deve retornar -7 para 2 e 9 ',()=>{
        expect(Calculadora.subtrair(2,9)).toEqual(-7)
    })

    it('deve retornar -7 para 2 e 9 ',()=>{
        expect(Calculadora.subtrair(2,9)).toEqual(-7)
    })

    it('deve retornar 4 para 5.5 e 1.5 ',()=>{
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4)
        expect(Calculadora.subtrair('5.5','1.5')).toEqual(4)
    })

    it('deve retornar 0 para undefined e 9 ',()=>{
        expect(Calculadora.subtrair(undefined,9)).toEqual(0)
    })

    it('deve retornar 0 para 9 e undefined ',()=>{
        expect(Calculadora.subtrair(9,undefined)).toEqual(0)
    })

})