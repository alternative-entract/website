import {createContext, FC, ReactElement, useState} from "react";
import {Product} from "../../../types/product";
import toast from "react-hot-toast";

interface ICartProvider {
    children: ReactElement
}

export type CartProduct = Product & {
    quantity: number
}

export enum ToggleQuantityValue {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
}

export interface ICartContext {
    cartProducts: CartProduct[],
    showCart: boolean,
    setShowCart: (state: boolean) => void,
    totalProductsQuantities: number
    totalPrice: number
    toggleCartItemQuantity: (id: string, value: ToggleQuantityValue) => void
    onAddProductInCart: (product: Product, quantity: number) => void
    onRemoveProductFromCart: (cartProduct: CartProduct) => void,
    setCartProducts: (cartProducts: CartProduct[]) => void,
    setTotalPrice: (price: number) => void,
    setTotalProductsQuantities: (price: number) => void
}

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    showCart: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShowCart: () => {},
    totalProductsQuantities: 0,
    totalPrice: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleCartItemQuantity: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onAddProductInCart: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onRemoveProductFromCart: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCartProducts: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTotalPrice: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTotalProductsQuantities: () => {}
})

export const CartProvider: FC<ICartProvider> = ({ children }) => {
    const [ showCart, setShowCart] = useState(false)
    const [ cartProducts, setCartProducts ] = useState<CartProduct[]>([])
    const [ totalPrice, setTotalPrice ] = useState(0)
    const [ totalProductsQuantities, setTotalProductsQuantities ] = useState(0)

    let foundProduct: CartProduct

    const toggleCartItemQuantity = (id: string, value: ToggleQuantityValue) => {
        foundProduct = cartProducts.find((item) => item.id === id) as CartProduct

        const tmpCartItems = cartProducts.filter((item) =>  item.id !== id)

        if(foundProduct) {
            if (value === ToggleQuantityValue.INCREMENT) {
                setCartProducts([...tmpCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
                setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
                setTotalProductsQuantities(prevTotalProductsQuantities => prevTotalProductsQuantities + 1)
            }

            if (value === ToggleQuantityValue.DECREMENT && foundProduct.quantity > 1) {
                setCartProducts([...tmpCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalProductsQuantities(prevTotalProductsQuantities => prevTotalProductsQuantities - 1)
            }
        }

    }

    const onAddProductInCart = (product: Product, quantity: number) => {
        const isProductInCart = cartProducts.find((item) => item.id === product.id)

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalProductsQuantities((prevTotalProductsQuantities) => prevTotalProductsQuantities + quantity)

        if(isProductInCart) {
            const updatedCartItems = cartProducts.map((cartProduct) => {
                if( cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }
                return cartProduct
            })
            setCartProducts(updatedCartItems)
        } else {
            setCartProducts([ ...cartProducts,  {...product, quantity}])
        }

        return toast.success(`${quantity} ${product.name} ajouté au panier.`)
    }

    const onRemoveProductFromCart = (product: CartProduct) => {
        foundProduct = cartProducts.find((item) => item.id === product.id) as CartProduct;
        const newCartItems = cartProducts.filter((item) => item.id !== product.id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalProductsQuantities(prevTotalProductsQuantities => prevTotalProductsQuantities - foundProduct.quantity);
        setCartProducts(newCartItems);
    }

    return (
        <CartContext.Provider value={{
            cartProducts,
            onAddProductInCart,
            showCart,
            setShowCart,
            totalProductsQuantities,
            totalPrice,
            toggleCartItemQuantity,
            onRemoveProductFromCart,
            setCartProducts,
            setTotalPrice,
            setTotalProductsQuantities
        }}>
            {children}
        </CartContext.Provider>
    )
}

