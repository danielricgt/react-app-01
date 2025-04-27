import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('08 test imple exa functions', () => {
    test('getHeroeById function should return and hero by id', () => {
    //  prepare the test subject
    const id = 1;
    // stimulus
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById function should return undefined when id does not exist', () => {
        //  prepare the test subject
        const id = 100;
        // stimulus
        const hero = getHeroeById(id);
        console.log(hero);
    
        expect(hero).toBeFalsy();
    
        });

    

    
});
