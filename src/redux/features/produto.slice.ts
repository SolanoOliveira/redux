import { createSlice } from "@reduxjs/toolkit";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  createAT: string;
  updatedAT: string;
}

interface ProdutosState {
  produtos: Produto[];
}

const initialState: ProdutosState = {
  produtos: [
    {
      id: 1,
      preco: 1.9,
      nome: "lacre",
      estoque: 2222,
      createAT: "HUMMMMM",
      updatedAT: "HUMMMMM",
    },
    {
      id: 2,
      preco: 1.9,
      nome: "lacre",
      estoque: 2222,
      createAT: "HUMMMMM",
      updatedAT: "HUMMMMM",
    },
  ],
};

const produtoSlice = createSlice({
  name: "produtoSLice",
  initialState: initialState,
  reducers: {
    addProduto(state, action) {
      state.produtos.push(action.payload);
    },
  },
});

export const { addProduto } = produtoSlice.actions;
export default produtoSlice.reducer;
