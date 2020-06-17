const getURLWithParams = cfg => {
    const url = cfg.url;
    let queryParams = null;
    /* istanbul ignore else */
    if (cfg.queryParams) {
      queryParams = cfg.queryParams;
    }
  
    return queryParams ? `${url}?${queryParams}` : url;
  };
  
  const getValidErrors = (error, apiUrl) => {
    const errorDetails = error.response;
    if (errorDetails) {
      const { message, status, error: statusText } = errorDetails.data || [];
  
      return { error: true, statusText, status, message };
    }
  
    return {
      error: true,
      statusText: `${'Fetch message'} ${apiUrl}`,
      status: 500,
      message: 'Server Down message'
    };
  };
  
  const handleError = response => {
      return response;
    };
  
  export default class RestClient {
    static get(config) {
      const apiUrl = getURLWithParams(config);
  
      
      return fetch(apiUrl, {
          method: 'GET',     
          headers: config.headers,
      })
        .then(resp => {
          return handleError(resp);
        })
        .then(response => {
          const status = response.status;
          const statusText = response.statusText;
  
          return response
            .json()
            .then(json => ({ status, statusText, data: json }));
        })
        .catch(error => {
          return getValidErrors(error, apiUrl);
        });
      
    }
  
    static post(config) {
      const apiUrl = getURLWithParams(config);
  
     
      return fetch(apiUrl, {
        method: 'POST',
        headers: config.headers,
  
        // credentials: 'include',
        body: JSON.stringify(config.data)
      })
        .then(resp => {
          return handleError(resp);
        })
        .then(response => {
          return response.json();
        })
        .then(text => {
          const status = text.status;
          const statusText = text.statusText;
  
          return { status, statusText, data: text };
        })
        .catch(error => {
          return getValidErrors(error, apiUrl);
        });
      
    }
  
    static put(config) {
      const apiUrl = getURLWithParams(config);
  
    
      return fetch(apiUrl, {
        method: 'PUT',
        headers: config.headers,
  
        // credentials: 'include',
        body: JSON.stringify(config.data)
      })
        .then(resp => {
          return handleError(resp);
        })
        .then(response => {
          const status = response.status;
          const statusText = response.statusText;
  
          return response
            .json()
            .then(json => ({ status, statusText, data: json }));
        })
        .catch(error => {
          return getValidErrors(error, apiUrl);
        });
    }
  
    static delete(config) {
      const apiUrl = getURLWithParams(config);
  
      return fetch(apiUrl, {
        method: 'DELETE',
        headers: config.headers,
  
        // credentials: 'include',
        body: JSON.stringify(config.data)
      })
        .then(resp => {
          return handleError(resp);
        })
        .then(response => {
          const status = response.status;
          const statusText = response.statusText;
  
          return response
            .json()
            .then(json => ({ status, statusText, data: json }));
        })
        .catch(error => {
          return getValidErrors(error, apiUrl);
        });
      
    }
  
    static setContext(context) {
      this.context = context;
      this.headers = context.headers;
    }
  }
  