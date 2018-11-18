/*
 * @Author: Virendra Patidar 
 * @Date: 2018-11-16 14:54:49 
 * @Last Modified by:   Virendra Patidar 
 * @Last Modified time: 2018-11-16 14:54:49 
 */
import requestWithToken from './requestWithToken'


function fetchAssets(data) {
    return requestWithToken({
        url: 'assets/list',
        method: 'POST',
        data
    });
}
function fetchServiceAssets(data) {
    return requestWithToken({
        url: 'assets/assets-list-by-service',
        method: 'POST',
        data
    });
}

function assetAlertChangeUpdate(data) {
    return requestWithToken({
        url: 'assets/exclude-toggle',
        method: 'POST',
        data
    });
}



const AssetService = {
    fetchAssets,
    fetchServiceAssets,
    assetAlertChangeUpdate
}

export default AssetService;