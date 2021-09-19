

describe("Suite de testes de adiçao",()=>{

    const Calculadora = require("../src/js/calculadora")    

    it('deve retornar 5 para os valores 2 e 3',function(){
        expect(Calculadora.adicionar(2,3)).toEqual(5);
    
    })
    
    it('deve retornar 6 para os valores 9 e -3 em formato texto',function(){
        expect(Calculadora.adicionar('9','-3')).toEqual(6);
    })
    
    it('deve retornar -3 para -7 + 4',function(){
        expect(Calculadora.adicionar(-7,4)).toEqual(-3)
    })
    
    it('deve retornar 6.5 para os valores 1.5 e 5',()=>{
        expect(Calculadora.adicionar(1.5,5)).toEqual(6.5);
    })
    
    it('deve retornar 0 quando numero 1 for invalido',()=>{
        expect(Calculadora.adicionar(undefined,10)).toEqual(0);
    })
    
    it('deve retornar 0 quando numero 2 for invalido',()=>{
        expect(Calculadora.adicionar(10,undefined)).toEqual(0);
    })
    
    it('deve retornar 0 quando numero 1 for letra ',()=>{
        expect(Calculadora.adicionar('a',10)).toEqual(0);
    })
    
    it('deve ser uma adiçao normal, de -1 + -1 que deve dar -2 ',()=>{
        expect(Calculadora.adicionar(-1,-1)).toEqual(-2);
    })
})
