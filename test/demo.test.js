describe("pruebas en </demoComponent>", () => {
  test("this test should not fail", () => {
    //  inicialization
    const message1 = "Hola Mundo";
    // stimulus
    const message2 = message1.trim();
    // observe the expect behavior
    expect(message1).toBe(message2);
  });
});
