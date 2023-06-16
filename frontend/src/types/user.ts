export enum UserRole {
	ADMIN = "admin",
	USER = "user",
}

export type User = {
	name: string;
	email: string;
	password: string;
	role: UserRole;
	verificationToken?: string;
	isVerified: boolean;
	verified: Date;
	passwordToken: string;
	passwordTokenExpirationDate: Date;
};
