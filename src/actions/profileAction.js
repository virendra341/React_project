/*
 * @Author: Virendra Patidar 
 * @Date: 2018-10-11 16:40:39 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-10-16 12:05:44
 */
import ProfileService from 'api/ProfileService'
import * as types from 'constants/ActionTypes'

import { errorHandle } from 'actions/errorHandling'

export function fetchProfileDetail() {
  return function (dispatch) {
    return ProfileService.fetchProfileDetail().then(response => {
      if (response.success) {
        dispatch(setProfileData(response.data))
      }
      return response
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function updateProfileDetail(payload) {
  mixpanel.track("Profile-action-updateProfileDetail-execute");
  return function (dispatch) {
    return ProfileService.updateProfileDetail(payload).then(response => {
      mixpanel.track("Profile-action-updateProfileDetail-success");
      return response
    }).catch(error => {
      mixpanel.track("Profile-action-updateProfileDetail-error");
      return errorHandle(error)
    });
  };
}


export function photoUpload(file) {
  mixpanel.track("Profile-action-photoUpload-execute");
  console.log(' file ', file);
  return function (dispatch) {
    var formData = new FormData();
    formData.append("image", file);
    return ProfileService.photoUpload(formData).then(response => {
      mixpanel.track("Profile-action-photoUpload-success");
      return response
    }).catch(error => {
      mixpanel.track("Profile-action-photoUpload-error");
      return errorHandle(error)
    });
  };
}

export function setProfileData(profile) {
  return { type: types.USER_PROFILE, profile };
}