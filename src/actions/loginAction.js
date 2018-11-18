/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 10:14:56
 */
import * as types from '../constants/ActionTypes'

import { reset } from 'redux-form'
import history from 'customHistory'

import LoginService from '../api/LoginService'

import { errorHandle } from 'actions/errorHandling'
import { setActiveMenu } from 'actions/commonAction'
import { setAwsList } from 'actions/commonAction'
import { fetchProfileDetail } from 'actions/profileAction'
import { fetchCompanyList } from 'actions/companyAction'
import { checkIsTailPeriodFinishedAndNotSubsribed } from 'actions/subscriptionsAction'

/**
 * Action used for authenticate user
 * @param {*} loginPayload 
 * Note :- After login  succesfully need to perform following task-
 *  1. Set token in local storage
 *  2. Reset header filter data 
 *  3. By default need to set Dashboard menu is active
 *  4. Reset signup-awsinvite , awscreate redux form
 *  5. Fetch login user profile details and set in reducer
 *  6. Fetch compnay details
 *  7. Set aws list in reducer
 *  8. Fetch account details
 *  9. Check user trail period is expire or not
 *  10. Check user subscribe any plan or not after trail period expired
 * 
 */
export function login(loginPayload) {
  mixpanel.track("Login-action-login-execute");
  return function (dispatch) {
    return LoginService.authenticate(loginPayload).then(response => {
      if (response.success) {
        localStorage.setItem('token', response.data.token)
        dispatch(resetHeaderFilterData())
        dispatch(setActiveMenu('Dashboard'))
        dispatch(loginSuccess(response.data));

        dispatch(reset('awscreate'));
        localStorage.setItem('lastUpdateTime', '')
        dispatch(reset('signup'));
        dispatch(reset('awsInvite'));
        dispatch(fetchProfileDetail());
        dispatch(fetchCompanyList());

        const awsList = []
        dispatch(setAwsList(awsList))
        mixpanel.track("Login-action-login-successs");
        return dispatch(fetchConstant(response.data.token));
      }
      else {
        mixpanel.track("Login-action-login-fail");
        return { success: false, erroType: 'message', error: response.errorMessage }
      }
    }).catch(error => {
      mixpanel.track("Login-action-login-error");
      return errorHandle(error)
    });
  };
}

/**
 * Action used after login success 
 * @param {*} responseLogin 
 */
export function loginSuccess(token) {
  return { type: types.LOGIN_SUCCESS, token };
}

export function loadLogin() {
  return history.push(`/login`)
};

export function fetchConstant(token) {
  return function (dispatch) {
    return LoginService.fetchConstant(token).then(response => {
      if (response.success) {
        dispatch(setConstant(response.data.account_id));
        dispatch(checkIsTailPeriodFinishedAndNotSubsribed())
        if (response.data.onboard) { // If user not set up any account then redirect to On-board page
          history.push(`/app/dashboard/home`)
        } else {
          history.push({
            pathname: '/app/onboard',
            state: { backUrl: '/login' }
          })
        }
        return;
      }
      else {
        return;
      }
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function resetLoginForm() {
  return function (dispatch) {
    return dispatch(reset('login'));
  };
}

export function resetHeaderFilterData() {
  return { type: types.RESET_FILTER_SEARCH_BAR };
}

export function setConstant(accountId) {
  return { type: types.SET_CONSTANT, accountId };
}