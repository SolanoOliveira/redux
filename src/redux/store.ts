import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/countslice";
import { type } from "os";
import ProdutoReducer from "./features/produto.slice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  count: CounterReducer,
  produto: ProdutoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {},
});

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
