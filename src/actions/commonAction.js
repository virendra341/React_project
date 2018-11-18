/*
 * @Author: Virendra Patidar 
 * @Date: 2018-09-05 09:25:32 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-10-15 15:44:36
 */
import * as types from 'constants/ActionTypes'

import { errorHandle } from 'actions/errorHandling'

import CommonService from 'api/CommonService'

export function fetchCountry() {
    return function (dispatch) {
        return CommonService.countryList().then(response => {
            if (response.success) {
                return response.data.list
            } else {
                return []
            }
        }).catch(error => {
            return errorHandle(error)
        });
    };
}

export function fetchState(countryCode) {
    return function (dispatch) {
        return CommonService.stateList(countryCode).then(response => {
            if (response.success) {
                return response.data.list
            } else {
                return []
            }
        }).catch(error => {
            console.log(' eror on fetch state ', error);
            return [];
        });
    };
}

export function setHeaderFilterData(filterData) {
    return { type: types.FILTER_SEARCH_BAR, filterData };
}

export function setActiveMenu(activeMenu) {
    return { type: types.ACTIVE_MENU, activeMenu };
}

export function setAwsList(awsList) {
    return { type: types.AWS_LIST, awsList };
}

export function setProgressBar(isProgress) {
    return { type: types.PROGRESS_BAR, isProgress };
}