import {Product} from "../types/product";
import {users} from "./users";
export type ProductsResponse = Product[];

export type ProductMap = Record<string, Product[]>;

const products: Product[] = [
    {
        id: "id-product-1",
        name: "renault",
        price: 10,
        image: "http://uygfzyefgz.fr",
        company: "EDWYN",
        description: "too looooooong",
        category: "vehicule",
        inStock: true,
        inVentory: 50,
        averageRating: 3,
        user: users[0],
    },
    {
        id: "id-product-2",
        name: "apple",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "fruit",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },{
        id: "id-product-3",
        name: "peer",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "fruit",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },{
        id: "id-product-4",
        name: "carot",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "vegetable",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },{
        id: "id-product-5",
        name: "dog",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "animals",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },{
        id: "id-product-6",
        name: "dog",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "animals",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },{
        id: "id-product-7",
        name: "audi",
        price: 0,
        image: "string",
        company: "string",
        description: "string",
        category: "vehicule",
        inStock: true,
        inVentory: 0,
        averageRating: 0,
        user: users[0],
    },

];

export const products$: Promise<ProductsResponse> = new Promise((resolve) =>
    setTimeout(resolve, 100, products)
);
