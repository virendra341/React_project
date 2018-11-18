/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 14:52:56 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 14:52:56 
 */
import ReportScheduleService from 'api/ReportScheduleService'

import { errorHandle } from 'actions/errorHandling'

export function createReportSchdule(payload) {
  mixpanel.track("ReportSchedule-action-createReportSchdule-execute");
  return function (dispatch) {
    return ReportScheduleService.createReportSchdule(payload).then(response => {
      mixpanel.track("ReportSchedule-action-createReportSchdule-success");
      return { success: true, data: response };
    }).catch(error => {
      mixpanel.track("ReportSchedule-action-createReportSchdule-error");
      return errorHandle(error)
    });
  };
}

export function editReportSchdule(payload) {
  mixpanel.track("ReportSchedule-action-editReportSchdule-execute");
  return function (dispatch) {
    return ReportScheduleService.editReportSchdule(payload).then(response => {
      mixpanel.track("ReportSchedule-action-editReportSchdule-success");
      return { success: true, data: response };
    }).catch(error => {
      mixpanel.track("ReportSchedule-action-editReportSchdule-error");
      return errorHandle(error)
    });
  };
}


export function fetchReportSchdule(payload) {
  return function (dispatch) {
    return ReportScheduleService.fetchReportSchdule(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function deleteReportSchdule(paylod) {
  mixpanel.track("ReportSchedule-action-deleteReportSchdule-execute");
  return function (dispatch) {
    return ReportScheduleService.deleteReportSchdule(paylod).then(response => {
      mixpanel.track("ReportSchedule-action-deleteReportSchdule-success");
      return response;
    }).catch(error => {
      mixpanel.track("ReportSchedule-action-deleteReportSchdule-error");
      return errorHandle(error)
    });
  };
}

