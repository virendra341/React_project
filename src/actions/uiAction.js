/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-24 10:17:00 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 14:40:31
 */

import * as types from '../constants/ActionTypes'

/**
 * Action used after login success 
 * @param {*} responseLogin 
 */
export function showAssetModal(showAssetModal) {
    return { type: types.SHOW_ASSET_MODAL, showAssetModal };
}

/**
 * 
 */
export function closeAssetModal() {
    return { type: types.CLOSE_ASSET_MODAL };
}


export function setReloadFlagSearchBar(reloadSearchBar) {
    return { type: types.RELOAD_SEARCH_BAR, reloadSearchBar };
}