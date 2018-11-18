/*
 * @Author: Virendra Patidar 
 * @Date: 2018-10-30 10:12:46 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-13 15:03:58
 */
import requestWithToken from './requestWithToken'


function fetchRuleCategory() {
    return requestWithToken({
        url: 'rules/list/category',
        method: 'GET'
    });
}

function fetchRuleCount(data) {
    return requestWithToken({
        url: 'security-policy/rules/active-inactive/count/',
        method: 'POST',
        data
    });
}

function fetchRuleList(data) {
    return requestWithToken({
        url: 'security-policy/rules/',
        method: 'POST',
        data
    });
}

function fetchRuleServiceList() {
    return requestWithToken({
        url: 'security-policy/service/list/',
        method: 'GET',
    });
}




const RuleService = {
    fetchRuleCategory,
    fetchRuleCount,
    fetchRuleList,
    fetchRuleServiceList
}

export default RuleService;