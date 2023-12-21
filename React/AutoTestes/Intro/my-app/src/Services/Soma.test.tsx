import { Multiplica, Soma } from "./Soma";

describe("Soma", () => {
  it("deve somar 1 ao numero informado", () => {
    const value = Soma(1);
    expect(value).toBe(2);
  });

  it("deve informar um erro, com multiplicador diferente de 3", () => {
    const value = Multiplica(3, 2);
    expect(value).toBe("Multiplicador não aceito");
  });

  it("deve multiplicar o numero por 3", () => {
    const value = Multiplica(2, 3);
    expect(value).toBe(6);
  });
});
