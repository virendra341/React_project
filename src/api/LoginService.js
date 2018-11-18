/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 14:08:14 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-08-31 10:04:54
 * @Description :-  Used for interact with server for login related operation
 */
import request from './request'
import requestWithPassToken from './requestWithPassToken'

function authenticate(data) {
  return request({
    url: 'api-token-auth/',
    method: 'POST',
    data
  });
}


function fetchConstant(token) {
  return requestWithPassToken({
    url: 'constants/',
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'jwt ' + token },
  });
}


const LoginService = {
  authenticate,
  fetchConstant
}

export default LoginService;



