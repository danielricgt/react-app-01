import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("08 test imple exa functions", () => {
  test("getHeroeById function should return and hero by id", () => {
    //  prepare the test subject
    const id = 1;
    // stimulus
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById function should return undefined when id does not exist", () => {
    //  prepare the test subject
    const id = 100;
    // stimulus
    const hero = getHeroeById(id);
    // console.log(hero);
    // observe the expect behavior
    expect(hero).toBeFalsy();
  });

  test("get hero byowner function shuld return an array that containes the given DC owner", () => {
    // prepare the test subject
    const ownerDC = "Marvel";
    // stimulus
    const heroes = getHeroesByOwner(ownerDC);
    console.log("this is the owner output", heroes);
    // observe the expect behavior
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === ownerDC));
  });

  test("should return an array that contains marvel heroes", () => {
    // prepare the test subject
    const ownerDC = "DC";
    // stimulus
    const heroes = getHeroesByOwner(ownerDC);
    console.log("this is the owner output", heroes);
    // observe the expect behavior
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === ownerDC));
  });
});
