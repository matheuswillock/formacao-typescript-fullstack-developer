import { Card } from "./Components/Card";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <Layout>
      <Card id={1} paragraph="Typescript" details="Ts para frontrend" />
      <Card id={2} paragraph="HTML" details="HMTL para frontrend" />
      <Card id={3} paragraph="SQL" details="SQL para Banco de Dados" />
    </Layout>
  );
}

export default App;
