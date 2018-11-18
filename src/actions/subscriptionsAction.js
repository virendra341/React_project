/*
 * @Author: Virendra Patidar 
 * @Date: 2018-10-30 10:10:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 14:50:49
 */
import history from 'customHistory'

import * as types from 'constants/ActionTypes'
import SubscriptionService from 'api/SubscriptionService'

import { errorHandle } from 'actions/errorHandling'

export function fetchSubscriptionsPlans() {
    return function (dispatch) {
        return SubscriptionService.fetchSubscriptionsPlans().then(response => {
            return response
        }).catch(error => {
            return errorHandle(error)
        });
    };
}


export function checkIsTailPeriodFinishedAndNotSubsribed() {
    return function (dispatch) {
        return SubscriptionService.fetchSubscriptionsRemainingTrial().then(response => {
            console.log(' fetchSubscriptionsRemainingTrial ', response);
            if (response.success) {
                if (response.data === 0) {
                    const payload = {
                        company_id: localStorage.getItem('companyId'),
                        account_id: localStorage.getItem('account_id')
                    }
                    SubscriptionService.fetchSubscriptionsHistorySubscriptions(payload).then(response1 => {
                        var isSubscribed = false
                        if (response1.data.length > 0) {
                            if (response1.data[0]['status'] == 'active') {
                                isSubscribed = true
                            }
                        }
                        if (isSubscribed) {
                            const trailData = { isPurchased: true, trailPeriodRemainigDays: 0 }
                            dispatch(setTrailPeriodData(trailData));
                        } else {
                            const trailData = { isPurchased: false, trailPeriodRemainigDays: 0 }
                            dispatch(setTrailPeriodData(trailData));
                            history.push(`/app/subscribe`)
                        }
                        return !isSubscribed
                    }).catch(error => {
                        console.log(' error in fetch customer subscription -------> ', error)
                        const trailData = { isPurchased: false, trailPeriodRemainigDays: 0 }
                        dispatch(setTrailPeriodData(trailData));
                        history.push(`/app/subscribe`)
                        return true
                    });
                } else {
                    const trailData = { isPurchased: false, trailPeriodRemainigDays: response.data }
                    dispatch(setTrailPeriodData(trailData));
                    return false
                }
            } else {
                history.push(`/app/subscribe`)
                const trailData = { isPurchased: true, trailPeriodRemainigDays: 0 }
                dispatch(setTrailPeriodData(trailData));
                return true;
            }
            return response
        }).catch(error => {
            console.log(' error in fetch remaining trail period expire days---------- > ', error)
            const trailData = { isPurchased: true, trailPeriodRemainigDays: 0 }
            dispatch(setTrailPeriodData(trailData));
            history.push(`/app/subscribe`)
            return true
        });
    };
}

export function subscriptionsPlan(payload) {
    return function (dispatch) {
        return SubscriptionService.subscriptionsPlan(payload).then(response => {
            return response
        }).catch(error => {
            return errorHandle(error)
        });
    };
}



export function fetchSubscriptionsHistoryInvoices(payload) {
    return function (dispatch) {
        return SubscriptionService.fetchSubscriptionsHistoryInvoices(payload).then(response => {
            return response
        }).catch(error => {
            return errorHandle(error)
        });
    };
}

export function fetchSubscriptionsHistorySubscriptions(payload) {
    return function (dispatch) {
        return SubscriptionService.fetchSubscriptionsHistorySubscriptions(payload).then(response => {
            return response
        }).catch(error => {
            return errorHandle(error)
        });
    };
}

export function subscribeCancel(payload) {
    mixpanel.track("Subscriptions-action-subscribeCancel-execute");
    return function (dispatch) {
        return SubscriptionService.subscribeCancel(payload).then(response => {
            mixpanel.track("Subscriptions-action-subscribeCancel-success");
            return response
        }).catch(error => {
            mixpanel.track("Subscriptions-action-subscribeCancel-error");
            return errorHandle(error)
        });
    };
}


export function fetchSubscribeCustomer() {
    mixpanel.track("Subscriptions-action-fetchSubscribeCustomer-execute");
    return function (dispatch) {
        const payload = {
            company_id: localStorage.getItem('companyId')
        }
        return SubscriptionService.fetchSubscribeCustomer(payload).then(response => {
            mixpanel.track("Subscriptions-action-fetchSubscribeCustomer-success");
            return response
        }).catch(error => {
            mixpanel.track("Subscriptions-action-fetchSubscribeCustomer-error");
            return errorHandle(error)
        });
    };
}

export function setTrailPeriodData(trailData) {
    return { type: types.SET_TRAIL_PERIOD_DATA, trailData };
}