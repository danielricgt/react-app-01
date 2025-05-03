import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("object desectructuration test", () => {
  test("usContext should return an object", () => {
    // prepare the text subject
    const clave = "Dani";
    const edad = 33;
    // stimulus
    const user = usContext({ clave, edad });
    console.log(user)
    //  observe the expect behavior
    expect(user).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
