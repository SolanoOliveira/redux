import { useSelector } from "react-redux";
import { RootSate } from "../redux/store";

export default function ListagemProdutos() {
  const produto = useSelector((state: RootSate) => state.produto);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produto.produtos.map((produto) => {
            return (
              <tr>
                <th>{produto.nome}</th>
                <th>{produto.preco}</th>
                <th>{produto.estoque}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
