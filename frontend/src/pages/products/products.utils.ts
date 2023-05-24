import {ProductMap} from "../../data/products";
import {Product} from "../../types/product";

export const mapProductsOnCategory = (products: Product[]): ProductMap => {
    const categoryMap = products.reduce<ProductMap>((map, { category }) => {
        const tmpMap = map;
        tmpMap[category] = [];
        return tmpMap;
    }, {});
    products.forEach((product) => {
        const { category } = product;
        categoryMap[category] = [...categoryMap[category], product];
    });

    return categoryMap;
};
