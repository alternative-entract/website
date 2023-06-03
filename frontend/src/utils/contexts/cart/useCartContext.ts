import {useContext} from "react";
import {CartContext} from "./cartProvider";

export const useCartContext = () => useContext(CartContext);