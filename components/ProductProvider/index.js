"use client";
import store from "@store/store";
import { Provider, useDispatch } from "react-redux";

export default function ProductProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
