import { Login } from "./Login";

describe("Login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("deve exibir um alert com boas vindas", () => {
    Login();
    expect(mockAlert).toHaveBeenCalledWith("bem vindo!");
  });
});
