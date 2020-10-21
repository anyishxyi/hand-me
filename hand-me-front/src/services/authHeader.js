export function authHeader() {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log('user - header', user)

    if (!user || !user.token) {
      return {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': '*'
      }
    } else {
      return {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': '*',
        'Authorization': `Bearer ${user.token}`
      };
    }
}
