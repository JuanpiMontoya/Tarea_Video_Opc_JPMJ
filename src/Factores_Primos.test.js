import mostrarPrimos from "./Factores_Primos";

describe("Factores Primos", () => {
  it("Se devuelve una lista vacia para el caso del 1", () => {
    expect(mostrarPrimos(1)).toEqual([]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 2", () => {
    expect(mostrarPrimos(2)).toEqual([2]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 3", () => {
    expect(mostrarPrimos(3)).toEqual([3]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 4", () => {
    expect(mostrarPrimos(4)).toEqual([2,2]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 6", () => {
    expect(mostrarPrimos(6)).toEqual([2,3]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 8", () => {
    expect(mostrarPrimos(8)).toEqual([2,2,2]);
  });

  it("Se devuelve una lista con los factores correspondientes para el caso del 9", () => {
    expect(mostrarPrimos(9)).toEqual([3,3]);
  });
});
