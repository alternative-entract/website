import { User, UserRole } from "../types/user";

export type UsersResponse = User[];

export const users: User[] = [
	{
		name: "string",
		email: "string",
		password: "string",
		role: UserRole.USER,
		verificationToken: "string",
		isVerified: true,
		verified: new Date(),
		passwordToken: "string",
		passwordTokenExpirationDate: new Date(),
	},
];

export const users$: Promise<UsersResponse> = new Promise((resolve) =>
	setTimeout(resolve, 100, users)
);
