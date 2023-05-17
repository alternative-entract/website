import {createContext, FC, ReactElement, useContext, useState} from "react";

interface IQuantityProviderProps {
    children: ReactElement
}

export interface IQuantityContext {
    quantity: number,
    incrementQuantity: () => void
    decrementQuantity: () => void
}

const QuantityContext = createContext<IQuantityContext>({
    quantity: 1,
    incrementQuantity: () => {},
    decrementQuantity: () => {}
})

export const QuantityProvider: FC<IQuantityProviderProps> = ({ children }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prevQty) => prevQty + 1);
    }

    const decrementQuantity = () => {
        setQuantity((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <QuantityContext.Provider value={{ quantity, incrementQuantity, decrementQuantity }}>
            {children}
        </QuantityContext.Provider>
    )
}

export const useQuantityContext = () => useContext(QuantityContext);