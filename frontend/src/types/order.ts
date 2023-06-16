import { User } from "./user";
import { Product } from "./product";

export type SingleOrderItemSchema = {
	name: string;
	image: string;
	price: number;
	amount: number;
	product: Product;
};

/*export enum OrderStatus {
    PENDING = "pending",
    FAILED = "failed",
    PAID = "paid",
    DELIVERED = "delivered",
    CANCELED = "canceled"
}*/

export type Order = {
	tax: number;
	shippingFee: number;
	subTotal: number;
	total: number;
	orderItems: SingleOrderItemSchema[];
	status: string;
	user: User;
};
