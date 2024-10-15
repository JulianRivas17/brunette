const login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        resolve({ token: 'fake-jwt-token' });
      } else {
        reject('Invalid credentials');
      }
    });
  };
  
  export const authService = {
    login,
  };
  