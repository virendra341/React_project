/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 10:08:22 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 10:08:49
 */
import AwsService from '../api/AwsService'
import { errorHandle } from 'actions/errorHandling'

import { reset, initialize } from 'redux-form'
/**
 * Action used for authenticate user
 * @param {*} signupPayload 
 */
export function awsCreate(payload) {
  return function (dispatch) {
    return AwsService.create(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function resetOnbaordForm() {
  return function (dispatch) {
    dispatch(reset('awscreate'));
    // dispatch(reset('login'));
    dispatch(initialize('awsInvite', { 'emails': [''] }));
  };
}

export function fetchExternalId() {
  return function (dispatch) {
    return AwsService.fetchExternalId().then(response => {
      if (response.success) {
        return response.data.id;
      }
      else {
        return response;
      }
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function addCollaborator(payload) {
  return function (dispatch) {
    return AwsService.addCollaborator(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchAwsList() {
  return function (dispatch) {
    return AwsService.fetchAwsList().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function deleteAwsAccount(payload) {
  return function (dispatch) {
    return AwsService.deleteAwsAccount(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function enableAccount(payload) {
  return function (dispatch) {
    return AwsService.enableAccount(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function disableAccount(payload) {
  return function (dispatch) {
    return AwsService.disableAccount(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchServiceList() {
  return function (dispatch) {
    return AwsService.fetchServiceList().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function deleteUserAccount() {
  return function (dispatch) {
    return AwsService.deleteUserAccount().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}