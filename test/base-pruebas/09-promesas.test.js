import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("test on promises function", () => {
  test("get hero async must return a hero", (done) => {
    // prepare the test subject
    const id = 1;
    // stimulus
    getHeroeByIdAsync(id).then((hero) => {
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
            });
      done();
    });
  });
  test("get hero async must return an error if hero dos not exist", (done) => {
    // prepare the test subject
    const id = 100;
    // stimulus
    getHeroeByIdAsync(id).then((hero) => {
        expect(hero).toBeFalsy();
    })
    
    
    .catch((error ) => {
        expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
