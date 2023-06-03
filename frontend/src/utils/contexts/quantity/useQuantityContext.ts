import {useContext} from "react";
import {QuantityContext} from "./quantityProvider";

export const useQuantityContext = () => useContext(QuantityContext);
