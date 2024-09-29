"use client";

import { createContext, ReactNode, useEffect, useReducer } from "react";
import { TShoppingDataStruct } from "../hooks/useGetShoppingData";
import cartReducer from "../actions/cartReducer";

export interface TCartState {
  isLoading: boolean;
  shoppingData: TShoppingDataStruct[] | null;
  totalCartValue: number;
  totalCartItemsCount: number;
}
type toggleAmountType = "inc" | "dec";
export interface TCartContext extends TCartState {
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  toggleAmount: (id: number, type: toggleAmountType) => void;
}
// export interface TCartContext

const url = `http://localhost:3030/shoppingCart`;

const initialState: TCartState = {
  isLoading: true,
  shoppingData: null,
  totalCartValue: 0,
  totalCartItemsCount: 0,
};

const initialContext: TCartContext = {
  ...initialState,
  clearCart: () => {},
  remove: (id: number) => {},
  increase: (id: number) => {},
  decrease: (id: number) => {},
  toggleAmount: (id: number, type: any) => {},
};

export const cartContext = createContext<TCartContext>(initialContext);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [TCartState, any] = useReducer(
    cartReducer,
    initialState
  );
  const x = 0;
  // to empty the cart - remove all items in it
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to remove a specific item completely from the cart
  const remove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // to increase the quantity of the item
  const increase = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // to decrease the quantity of the item
  const decrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // fetch all data and display them
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "DISPLAY_ITEMS", payload: data });
    } catch (error) {
      dispatch({ type: "DISPLAY_ITEMS", payload: null });
    }
  };

  // combined functionality of increment and decrement of quantity of an item
  const toggleAmount = (id: number, type: any) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update the total value & items in cart whenever cart items change
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.shoppingData]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
