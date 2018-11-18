/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 14:51:45 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 16:32:06
 */
import SecurityPolicyService from 'api/SecurityPolicyService'

import { errorHandle } from 'actions/errorHandling'

export function fetchDefaultSecurityPolicyRule() {
  return function (dispatch) {
    return SecurityPolicyService.fetchDefaultSecurityPolicyRule().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function skipPolicyRun() {
  return function (dispatch) {
    return SecurityPolicyService.skipPolicyRun().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function defaultPolicyRun(payload) {
  return function (dispatch) {
    return SecurityPolicyService.defaultPolicyRun(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}



export function pullAssetsProgress(payload) {
  return function (dispatch) {
    return SecurityPolicyService.pull(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function pullProgress(payload) {
  return function (dispatch) {
    return SecurityPolicyService.pullAssetsProgress(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchPolicyList(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyList(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function enableDisablePolicy(payload) {
  mixpanel.track("securityPolicy-action-enableDisablePolicy-execute");
  return function (dispatch) {
    return SecurityPolicyService.enableDisablePolicy(payload).then(response => {
      mixpanel.track("securityPolicy-action-schedulerEenableDisablePolicynableDisable-success");
      return response;
    }).catch(error => {
      mixpanel.track("securityPolicy-action-schedulerEenableDisablePolicynableDisable-error");
      return errorHandle(error)
    });
  };
}

export function enableDisableRule(payload) {
  mixpanel.track("securityPolicy-action-enableDisableRule-execute");
  return function (dispatch) {
    return SecurityPolicyService.enableDisableRule(payload).then(response => {
      mixpanel.track("securityPolicy-action-enableDisableRule-success");
      return response;
    }).catch(error => {
      mixpanel.track("securityPolicy-action-enableDisableRule-execute");
      return errorHandle(error)
    });
  };
}


export function fetchPolicyCount(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyCount(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchPolicyDetailReport(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyDetailReport(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


export function fetchReportPolicyList(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchReportPolicyList(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchPolicyReport(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyReport(payload).then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchPolicyReportCount(payload) {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyReportCount(payload).then(response => {
        return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}

export function fetchPolicyWizardCount() {
  return function (dispatch) {
    return SecurityPolicyService.fetchPolicyWizardCount().then(response => {
      return response;
    }).catch(error => {
      return errorHandle(error)
    });
  };
}


