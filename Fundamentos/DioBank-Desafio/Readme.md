# Desenvolvendo o Dio Bank
desenvolvido por [Matheus Willock](https://github.com/matheuswillock)

#### Projeto desenvolvido com conceitos b�sicos de typescript atrav�s das aulas ministradas pela [Nathally Souza](https://github.com/nathyts)

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o reposit�rio

2 - Instale as depende�ncias
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[ ] Implementar os m�todos de dep�sito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para dep�sito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ] Implementar o m�todo de empr�stimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empr�stimo
  - Apenas contas com o status true podem fazer empr�stimo

[ ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta n�o deve receber novos atributos
  - Esta conta ter� um m�todo de dep�sito, que acresce 10 a mais ao valor informado para dep�sito. (Ex: Um dep�sito de 100, ser� de 110 no final)

[ ] Todos os atributos de qualquer conta devem ser privados

[ ] Os atributos name e accountNumber n�o podem ser alterados internamente ou externamente

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os m�todos poss�veis.