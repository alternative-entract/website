const BASE_URL = process.env.VITE_API_BASE_URL;

class HttpClient {
    protected readonly headers: { [key: string]: string };

    public constructor(headers?: { [key: string]: string }) {
        this.headers = headers || {};
    }

    public get = async (
        entrypoint: string
    ): Promise<Record<string, unknown>> => {
        const response = await fetch(BASE_URL + entrypoint);
        return await response.json();
    };

    public post = async (
        entrypoint: string,
        data: Record<string, unknown> | null,
        errorMessageFormater = (message: string) => message
    ): Promise<Record<string, unknown>> => {
        try {
            const response = await fetch(BASE_URL + entrypoint, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    ...this.headers,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                error.message = errorMessageFormater(error.message);
            }
            throw error;
        }
    };

    public put = async (
        entrypoint: string,
        data: Record<string, unknown> | null,
        errorMessageFormater = (message: string) => message
    ): Promise<Record<string, unknown>> => {
        try {
            const response = await fetch(BASE_URL + entrypoint, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    ...this.headers,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                error.message = errorMessageFormater(error.message);
            }
            throw error;
        }
    };

    public patch = async (
        entrypoint: string,
        data: Record<string, unknown> | null,
        errorMessageFormater = (message: string) => message
    ): Promise<Record<string, unknown>> => {
        try {
            const response = await fetch(BASE_URL + entrypoint, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    ...this.headers,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                error.message = errorMessageFormater(error.message);
            }
            throw error;
        }
    };
}

const httpClient = new HttpClient();
export default httpClient;
