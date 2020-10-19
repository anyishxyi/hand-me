export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('userData'));

    if (!user || !user.token) {
        return {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
        }
    } else {
        return {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': `Bearer ${user.token}`
        };
    }
}
