/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 14:52:44 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 14:52:44 
 */
import SchedulerSettingSerivce from '../api/SchedulerSettingSerivce'
import { errorHandle } from 'actions/errorHandling'

export function fetchSchedulerList(data) {
  return function (dispatch) {
    return SchedulerSettingSerivce.fetchSchedulerList(data).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function schedulerEdit(payload) {
  mixpanel.track("ScheduleSettings-action-schedulerEdit-execute");
  return function (dispatch) {
    return SchedulerSettingSerivce.schedulerEdit(payload).then(response => {
      if (response.success) {
        mixpanel.track("ScheduleSettings-action-schedulerEdit-success");
        return response;
      }
      else {
        mixpanel.track("ScheduleSettings-action-schedulerEdit-fail");
        return response.errorMessage;
      }
    }).catch(error => {
      mixpanel.track("ScheduleSettings-action-schedulerEdit-error");
      return errorHandle(error)
    });
  };
}

export function schedulerEnableDisable(payload) {
  mixpanel.track("ScheduleSettings-action-schedulerEnableDisable-execute");
  return function (dispatch) {
    return SchedulerSettingSerivce.schedulerEnableDisable(payload).then(response => {
      if (response.success) {
        mixpanel.track("ScheduleSettings-action-schedulerEnableDisable-success");
        return response;
      }
      else {
        mixpanel.track("ScheduleSettings-action-schedulerEnableDisable-fail");
        return response.errorMessage;
      }
    }).catch(error => {
      mixpanel.track("ScheduleSettings-action-schedulerEnableDisable-error");
      return errorHandle(error)
    });
  };
}