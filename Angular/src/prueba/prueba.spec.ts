import { factorial, isEven } from './prueba';

xdescribe('Factorial function...', () => {

    it('should be 1 if n=1', () => {
        const n = 1;
        expect(factorial(n)).toEqual(1);

    });

    it('should be 0 if n=0', () => {
        const n = 0;
        expect(factorial(n)).toEqual(0);

    });

    it('should be 120 if n=5', () => {
        const n = 5;
        expect(factorial(n)).toEqual(120);
    });


    it('should throw error if n=-5', () => {
        const n = -5;
        // expect(factorial.bind(n)).toThrow();
        expect(factorial.bind(n)).toThrowError('No existe el factorial de un número negativo');
    });


});

xdescribe ('Function isEven...', () => {
    it('should be even if n = 20', () => {
        expect(isEven(20)).toBeTruthy()
    })

    it('should be not even if n = 23', () => {
        expect(isEven(23)).toBeFalsy()
    })

    it('should be even if n = 0', () => {
        expect(isEven(0)).toBeTruthy()
    })

    it('should be even if n = -20', () => {
        expect(isEven(-20)).toBeTruthy()
    })

    it('should be not even if n = -23', () => {
        expect(isEven(-23)).toBeFalsy()
    })

    it('should throw error if n = 3.5', () => {
        expect( () => isEven.bind(3.5) ).toThrowError('The value is a decimal number!')
    })

    //no need to check rest of errors as they're type errors and the program already knows is dumb.

})

