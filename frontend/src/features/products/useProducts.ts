import { useCallback, useEffect, useState } from "react";
import { products$ } from "../../mocks/products";
import { Product } from "../../types/product";

export const useProducts = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const [isFetching, setIsFetching] = useState(false);

	const addProduct = useCallback((productToCreate: Product) => {
		setProducts((prevState: Product[]) => [...prevState, productToCreate]);
	}, []);

	const updateProduct = useCallback((updatedProduct: Product) => {
		setProducts((prevState: Product[]) =>
			prevState.map((product) => {
				if (product.id === updatedProduct.id) {
					return updatedProduct;
				}
				return product;
			})
		);
	}, []);

	const removeProducts = useCallback((productsToRemove: Product[]) => {
		setProducts((prevState) =>
			prevState.filter(
				(product) =>
					!productsToRemove.find(
						(productToRemove) => productToRemove.id === product.id
					)
			)
		);
	}, []);

	const fetchProducts = async () => {
		setIsFetching(true);
		try {
			const data = await products$;
			setProducts(data as Product[]);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		} finally {
			setIsFetching(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const reloadProducts = () => {
		setIsLoading(true);
		setIsError(false);
		fetchProducts();
	};

	return {
		addProduct,
		isError,
		isFetching,
		isLoading,
		products,
		removeProducts,
		reloadProducts,
		updateProduct,
	};
};
