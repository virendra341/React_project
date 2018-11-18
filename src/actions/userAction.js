/*
 * @Author: Virendra Patidar 
 * @Date: 2018-09-05 09:24:30 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-12 15:41:53
 */

import UserService from 'api/UserService'

import { errorHandle } from 'actions/errorHandling'

export function fetchUserList(payload) {
  return function (dispatch) {
    return UserService.fetchUserList(payload).then(response => {
      return response
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchInviteUserList(payload) {
  return function (dispatch) {
    return UserService.fetchInviteUserList(payload).then(response => {
      return response
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchUserCount() {
  return function (dispatch) {
    return UserService.fetchUserCount().then(response => {
      return response
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchLastUpdateTime(payload) {
  return function (dispatch) {
    return UserService.fetchLastUpdateTime(payload).then(response => {
        return response
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function userActiveDeactive(payload) {
  mixpanel.track("User-action-userActiveDeactive-execute");
  return function (dispatch) {
    return UserService.userActiveDeactive(payload).then(response => {
      mixpanel.track("User-action-userActiveDeactive-success");
        return response
    }).catch(error => {
      mixpanel.track("User-action-userActiveDeactive-error");
      return errorHandle(error)
    });
  };
}

export function resetPasswordSendMail(payload) {
  mixpanel.track("User-action-userActiveDeactive-execute");
  return function (dispatch) {
    return UserService.resetPasswordSendMail(payload).then(response => {
        return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}