import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en 02-template-string', () => { 

test( 'getSaludo function test' , () =>{


    //  we prepare out test subject
    const name = 'fernando';
    const message = getSaludo( name );

    expect(message).toBe(`Hola ${name}!!!`)

});

});