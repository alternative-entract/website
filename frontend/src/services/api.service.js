const ORIGIN = 'http://localhost:5000/api/v1';

class ApiService {
    
    async get(url) {
      const response = await fetch(ORIGIN + url);
      const data = await response.json();
      return data;
    }
  
    async post(url, data) {
      const response = await fetch(ORIGIN + url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      return response;
    }
  
    async put(url, data) {
      const response = await fetch(ORIGIN + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    }
  
    async patch(url, data) {
      const response = await fetch(ORIGIN + url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    }
  }
  
  const apiService = new ApiService()
  export default apiService;
  