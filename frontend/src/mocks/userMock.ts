import { User, UserRole } from "../types/user";

/** Mocks data used to login */
export const userMock: User = {
    email: "foo@bar.nux",
    isVerified: false,
    name: "Foo Bar",
    password: "sup3rPassw0rd",
    passwordToken: "sup3rPassw0rd-token",
    passwordTokenExpirationDate: new Date(),
    role: UserRole.USER,
    verificationToken: "verification-token",
    verified: new Date(),
};
