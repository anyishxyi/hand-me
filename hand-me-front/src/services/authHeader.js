export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('userData'));

    if (!user || !user.token) {
        return {
          Accept: 'application/json',
          'Content-type': 'application/json'
        }
    } else {
        return {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        };
    }
}
