import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('test on array desestructuration', () => { 

test('should return an array and a number desestrutured', () => {
    //  prepare the test subject
    // strimulus
    const [letters, numbers] = retornaArreglo();
 
    // observe the expect behavior
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

   expect(typeof letters).toBe('string');
   expect(typeof numbers).toBe('number');

   expect(letters).toEqual(expect.any(String));
});


 })