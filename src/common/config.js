const env = () => {
    const urlString = window.location.href;
    if (urlString.indexOf('development') !== -1) {
      return 'development';
    }
    if (urlString.indexOf('testing') !== -1) {
      return 'testing';
    }
    return 'local';
  };
  
  export const setUpAPI = env => {
    switch (env) {
      case 'development':
        return '/';
      case 'testing':
        return '/'; 
      case 'local':
        return 'http://localhost:3000/api/'; 
    }
  };
  
  export class Config {
    static ApiConfig = () => setUpAPI(env());
  }
  
  export default Config;


export const defaultHeaders = {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  };