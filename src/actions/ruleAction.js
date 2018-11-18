/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-02 12:46:09 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-13 15:03:51
 */
import RuleService from 'api/RuleService'

import { errorHandle } from 'actions/errorHandling'

export function fetchRuleCategory(payload) {
  return function (dispatch) {
    return RuleService.fetchRuleCategory(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchRuleCount(payload) {
  return function (dispatch) {
    return RuleService.fetchRuleCount(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchRuleList(payload) {
  return function (dispatch) {
    return RuleService.fetchRuleList(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchRuleServiceList() {
  return function (dispatch) {
    return RuleService.fetchRuleServiceList().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}