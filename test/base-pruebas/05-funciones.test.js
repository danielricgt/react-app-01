import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("JS functions test", () => {
  test("getUser should return an object", () => {
    // prepare the test subject
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    //   stimulus
    const user = getUser();
    console.log(user);

    // observe the expect behavior
    expect(testUser).toEqual(user);
  });
});

test('getActiveUserUser should return an object', () => {
    // prepare the test subject

    const nombre = 'Fernando';

    // stimulus
    const user = getUsuarioActivo( nombre );
    console.log(user);


    // observe the expect behavior

    expect(user).toEqual({
        uid: 'ABC567',
        username: nombre
    });

});

