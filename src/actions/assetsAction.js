/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 09:31:15 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 10:08:12
 */
import AssetService from 'api/AssetService'

import { errorHandle } from 'actions/errorHandling'

export function fetchAssets(payload) {
  return function (dispatch) {
    return AssetService.fetchAssets(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchServiceAssets(payload) {
  return function (dispatch) {
    return AssetService.fetchServiceAssets(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}
export function assetAlertChangeUpdate(payload) {
  return function (dispatch) {
    return AssetService.assetAlertChangeUpdate(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

