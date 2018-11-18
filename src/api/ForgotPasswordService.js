/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 14:08:14 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-18 15:23:02
 * @Description :-  Used for interact with server for login related operation
 */
import request from './request'

function forgotPasswordService(data) {
  return request({
    url: 'users/password/reset/',
    method: 'POST',
    data
  });
}

function resetPasswordService(data) {
  return request({
    url: 'users/password/reset/confirm/',
    method: 'POST',
    data
  });
}

const ForgotPasswordService = {
  forgotPasswordService,
  resetPasswordService
}

export default ForgotPasswordService;



