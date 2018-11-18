import requestWithToken from './requestWithToken'


function createReportSchdule(data) {
    return requestWithToken({
        url: 'report/create-and-download/',
        method: 'POST',
        responseType: 'blob',
        data
    });
}

function editReportSchdule(data) {
    return requestWithToken({
        url: 'report/edit/',
        method: 'POST',
        data
    });
}


function fetchReportSchdule(data) {
    return requestWithToken({
        url: 'report/list/',
        method: 'POST',
        data
    });
}


function deleteReportSchdule(data) {
    return requestWithToken({
        url: 'report/delete/',
        method: 'POST',
        data
    });
}



const ReportScheduleService = {
    createReportSchdule,
    fetchReportSchdule,
    deleteReportSchdule,
    editReportSchdule
}

export default ReportScheduleService;