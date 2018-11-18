import request from './request'
import requestWithPassToken from './requestWithPassToken'

function countryList() {
  return request({
    url: 'countryList/',
    method: 'GET'
  });
}

function stateList(countryCode) {
  return request({
    url: 'stateList/' + countryCode + '/',
    method: 'GET'
  });
}



const CommonService = {
  countryList,
  stateList,
}

export default CommonService;
