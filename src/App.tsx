import "./App.css";
import ListagemProdutos from "./componentes/listProdutos";
import { increment } from "./redux/features/countslice";
import FormularioProduto from "./componentes/formProduto";

// npx create-react-app redux_teste --template typescript

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div>
        <FormularioProduto></FormularioProduto>
      </div>

      <div style={{ width: "50%" }}>
        <ListagemProdutos />
      </div>
    </div>
  );
}

export default App;
