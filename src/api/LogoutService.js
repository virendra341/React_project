import requestWithToken from './requestWithToken'

function logout() {
    return requestWithToken({
      url: 'users/logout/',
      method: 'GET',
    });
  }


  const LogoutService = {
    logout
  }
  
  export default LogoutService;
  