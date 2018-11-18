/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 10:09:10 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 10:09:10 
 */
import DashboardService from 'api/DashboardService'

import { errorHandle } from 'actions/errorHandling'

export function fetchSecurityAudit(payload) {
    mixpanel.track("Dashboard-action-SecurityAudit-execute");
    return function (dispatch) {
        return DashboardService.fetchSecurityAudit(payload).then(response => {
            mixpanel.track("Dashboard-action-SecurityAudit-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-SecurityAudit-error");
            return errorHandle(error)
        });
    };
}

export function fetchAssetInventory(payload) {
    mixpanel.track("Dashboard-action-AssetInventory-execute");
    return function (dispatch) {
        return DashboardService.fetchAssetInventory(payload).then(response => {
            mixpanel.track("Dashboard-action-AssetInventory-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-AssetInventory-error");
            return errorHandle(error)
        });
    };
}

export function fetchSecurityAlert(payload) {
    mixpanel.track("Dashboard-action-SecurityAlert-execute");
    return function (dispatch) {
        return DashboardService.fetchSecurityAlert(payload).then(response => {
            mixpanel.track("Dashboard-action-SecurityAlert-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-SecurityAlert-error");
            return errorHandle(error)
        });
    };
}

export function fetchAssetByRegion(payload) {
    mixpanel.track("Dashboard-action-AssetByRegion-execute");
    return function (dispatch) {
        return DashboardService.fetchAssetByRegion(payload).then(response => {
            mixpanel.track("Dashboard-action-AssetByRegion-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-AssetByRegion-error");
            return errorHandle(error)
        });
    };
}

export function fetchIssues(payload) {
    mixpanel.track("Dashboard-action-fetchIssues-execute");
    return function (dispatch) {
        return DashboardService.fetchIssues(payload).then(response => {
            mixpanel.track("Dashboard-action-fetchIssues-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-fetchIssues-error");
            return errorHandle(error)
        });
    };
}

export function fetchIssuesByService(payload) {
    mixpanel.track("Dashboard-action-IssuesByService-execute");
    return function (dispatch) {
        return DashboardService.fetchIssuesByService(payload).then(response => {
            mixpanel.track("Dashboard-action-IssuesByService-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-IssuesByService-error");
            return errorHandle(error)
        });
    };
}

export function fetchAccounts(payload) {
    mixpanel.track("Dashboard-action-Accounts-execute");
    return function (dispatch) {
        return DashboardService.fetchAccounts(payload).then(response => {
            mixpanel.track("Dashboard-action-Accounts-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-Accounts-error");
            return errorHandle(error)
        });
    };
}

export function fetchTotalAssets(payload) {
    mixpanel.track("Dashboard-action-TotalAssets-execute");
    return function (dispatch) {
        return DashboardService.fetchTotalAssets(payload).then(response => {
            mixpanel.track("Dashboard-action-TotalAssets-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-TotalAssets-error");
            return errorHandle(error)
        });
    };
}

export function fetchSecurityGroups(payload) {
    mixpanel.track("Dashboard-action-SecurityGroups-execute");
    return function (dispatch) {
        return DashboardService.fetchSecurityGroups(payload).then(response => {
            mixpanel.track("Dashboard-action-SecurityGroups-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-SecurityGroups-error");
            return errorHandle(error)
        });
    };
}

export function fetchExternalIps(payload) {
    mixpanel.track("Dashboard-action-ExternalIps-execute");
    return function (dispatch) {
        return DashboardService.fetchExternalIps(payload).then(response => {
            mixpanel.track("Dashboard-action-ExternalIps-success");
            return response;
        }).catch(error => {
            mixpanel.track("Dashboard-action-ExternalIps-error");
            return errorHandle(error)
        });
    };
}