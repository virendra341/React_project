/*
 * @Author: Virendra Patidar 
 * @Date: 2018-10-30 11:13:53 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-11-16 10:09:07
 */
import CompanyService from 'api/CompanyService'

import { errorHandle } from 'actions/errorHandling'

export function fetchCompanyList() {
    return function (dispatch) {
        return CompanyService.fetchCompanyList().then(response => {
            localStorage.setItem('companyId',response.data.list[0].id)
            return response
        }).catch(error => {
            return errorHandle(error) 
        });
    };
}
