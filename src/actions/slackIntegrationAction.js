/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-02 12:46:16 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-05 11:07:52
 */
import SlackIntegrationService from 'api/SlackIntegrationService'

import { errorHandle } from 'actions/errorHandling'

export function slackWebHookIntegrate(payload) {
    mixpanel.track("SlackIntegration-action-slackWebHookIntegrate-execute");
    return function (dispatch) {
        return SlackIntegrationService.slackWebHookIntegrate(payload).then(response => {
            mixpanel.track("SlackIntegration-action-slackWebHookIntegrate-success");
            return response;
        }).catch(error => {
            mixpanel.track("SlackIntegration-action-slackWebHookIntegrate-error");
            return errorHandle(error)
        });
    };
}

export function fetchSlackDetails(payload) {
    mixpanel.track("SlackIntegration-action-fetchSlackDetails-execute");
    return function (dispatch) {
        return SlackIntegrationService.fetchSlackDetails(payload).then(response => {
            mixpanel.track("SlackIntegration-action-fetchSlackDetails-success");
            return response;
        }).catch(error => {
            mixpanel.track("SlackIntegration-action-fetchSlackDetails-error");
            return errorHandle(error)
        });
    };
}
