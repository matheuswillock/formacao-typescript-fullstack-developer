import { Login } from "./Login";

describe("Login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir a mensagem de boas vindas!", () => {
    Login();
    expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo!");
  });
});
