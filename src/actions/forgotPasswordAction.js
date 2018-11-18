/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 10:53:11
 */

import history from 'customHistory'
import { errorHandle } from 'actions/errorHandling'

import ForgotPasswordService from 'api/ForgotPasswordService'

/**
 * Action used for authenticate user
 * @param {*} forgotPasswordPayload 
 */
export function forgotPassword(forgotPasswordPayload) {
  mixpanel.track("ForgotPassword-action-forgotPassword-execute");
  return function (dispatch) {
    return ForgotPasswordService.forgotPasswordService(forgotPasswordPayload).then(response => {
      if (response.success) {
        history.push({
          pathname: '/forgot-password-email',
          query: { email: forgotPasswordPayload.email }
        })
        mixpanel.track("ForgotPassword-action-forgotPassword-success");
        return response;
      }
      else {
        mixpanel.track("ForgotPassword-action-forgotPassword-fail");
        return response.errorMessage;
      }
    }).catch(error => {
      console.log(' error ', error)
      mixpanel.track("ForgotPassword-action-forgotPassword-error");
      return errorHandle(error)
    });
  };
}

/**
 * Action used for authenticate user
 * @param {*} ResetPasswordPayload 
 */

export function resetPassword(ResetPasswordPayload) {
  mixpanel.track("ForgotPassword-action-resetPassword-execute");
  return function (dispatch) {
    return ForgotPasswordService.resetPasswordService(ResetPasswordPayload).then(response => {
      if (response.success) {
        history.push(`/login`)
        mixpanel.track("ForgotPassword-action-resetPassword-success");
        return;
      }
      else {
        mixpanel.track("ForgotPassword-action-resetPassword-fail");
        return response;
      }
    }).catch(error => {
      mixpanel.track("ForgotPassword-action-resetPassword-error");
      return errorHandle(error)
    });
  };
}

