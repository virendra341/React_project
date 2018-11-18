/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-14 11:35:48
 */
import history from 'customHistory'
import SignupService from '../api/SignupService'

import { errorHandle } from 'actions/errorHandling'

/**
 * Action used for authenticate user
 * @param {*} signupPayload 
 */
export function signup(signupPayload) {
  mixpanel.track("Signup-action-signup-execute");
  return function (dispatch) {
    return SignupService.registration(signupPayload).then(response => {
      if (response.success) {
        history.push({
          pathname: '/welcome',
          state: { email: signupPayload.email, isVerified: false }
        })
        mixpanel.track("Signup-action-signup-success");
        return;
      }
      else {
        mixpanel.track("Signup-action-signup-fail");
        return response;
      }
    }).catch(error => {
      mixpanel.track("Signup-action-signup-error");
      return errorHandle(error)
    });
  };
}

export function collaboratorCreate(signupPayload) {
  mixpanel.track("Signup-action-collaboratorCreate-execute");
  return function (dispatch) {
    return SignupService.collaboratorCreate(signupPayload).then(response => {
      if (response.success) {
        history.push({
          pathname: '/welcome',
          state: { email: signupPayload.email, isVerified: true }
        })
        mixpanel.track("Signup-action-collaboratorCreate-success");
        return;
      }
      else {
        mixpanel.track("Signup-action-collaboratorCreate-fail");
        return response.errorMessage;
      }
    }).catch(error => {
      mixpanel.track("Signup-action-collaboratorCreate-error");
      return errorHandle(error)
    });
  };
}


export function verify(uidb64, token) {
  mixpanel.track("Signup-action-verify-execute");
  return function (dispatch) {
    return SignupService.emailVerify(uidb64, token).then(response => {
      mixpanel.track("Signup-action-verify-success");
      return response;
    }).catch(error => {
      mixpanel.track("Signup-action-verify-error");
      return error.data.message;
    });
  };
}


export function verifyCollbrators(uidb64) {
  mixpanel.track("Signup-action-verifyCollbrators-execute");
  return function (dispatch) {
    return SignupService.verifyCollbrators(uidb64).then(response => {
      mixpanel.track("Signup-action-verifyCollbrators-success");
      return response;
    }).catch(error => {
      mixpanel.track("Signup-action-verifyCollbrators-error");
      return errorHandle(error)
    });
  };
}

export function resentMail(payload) {
  mixpanel.track("Signup-action-resentMail-execute");
  return function (dispatch) {
    return SignupService.resentMail(payload).then(response => {
      mixpanel.track("Signup-action-resentMail-success");
      return response;
    }).catch(error => {
      mixpanel.track("Signup-action-resentMail-error");
      return error.data.message;
    });
  };
}