import { LoginErrorStatus, loginErrorTranslated } from "./types";

interface ILoginError {
    readonly errorType: keyof typeof loginErrorTranslated;
    readonly message: string;
}

export class CustomLoginError implements ILoginError {
    constructor(public readonly errorType: LoginErrorStatus) {
        this.message = loginErrorTranslated[errorType];
    }

    readonly message: string;
}
