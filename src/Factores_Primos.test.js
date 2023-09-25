import mostrarPrimos from "./Factores_Primos";

describe("Factores Primos", () => {
  it("Se devuelve una lista vacia para el caso del 1", () => {
    expect(mostrarPrimos(1)).toEqual([]);
  });
});
