const ORIGIN = process.env.REACT_APP_API_BASE_URL;

class HttpClient {

    async get(url: string) {
        const response = await fetch(ORIGIN + url);
        return await response.json();
    }

    async post(url: string, data: {[x: string]: unknown}) {
        return await fetch(ORIGIN + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    async put(url: string, data: {[x: string]: unknown}) {
        const response = await fetch(ORIGIN + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }

    async patch(url: string, data: {[x: string]: unknown}) {
        const response = await fetch(ORIGIN + url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
}

const httpClient = new HttpClient()
export default httpClient;
