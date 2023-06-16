import { createContext, FC, ReactElement, useState } from "react";

interface IQuantityProviderProps {
	children: ReactElement;
}

export interface IQuantityContext {
	quantity: number;
	incrementQuantity: () => void;
	decrementQuantity: () => void;
}

export const QuantityContext = createContext<IQuantityContext>({
	quantity: 1,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	incrementQuantity: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	decrementQuantity: () => {},
});

export const QuantityProvider: FC<IQuantityProviderProps> = ({ children }) => {
	const [quantity, setQuantity] = useState(1);

	const incrementQuantity = () => {
		setQuantity((prevQty) => prevQty + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

	return (
		<QuantityContext.Provider
			value={{ quantity, incrementQuantity, decrementQuantity }}
		>
			{children}
		</QuantityContext.Provider>
	);
};
