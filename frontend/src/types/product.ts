import { User } from "./user";

export type Product = {
    id: string;
    name: string;
    price: number;
    image?: string;
    company: string;
    description: string;
    category: string;
    inStock?: boolean;
    inVentory: number;
    averageRating?: number;
    user: User;
};
