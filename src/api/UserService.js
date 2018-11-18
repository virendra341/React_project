import requestWithToken from './requestWithToken'

function fetchUserList(data) {
    return requestWithToken({
        url: 'company/users/list',
        method: 'POST',
        data
    });
}

function fetchInviteUserList(data) {
    return requestWithToken({
        url: 'company/users/list-invitees',
        method: 'POST',
        data
    });
}

function fetchUserCount() {
    return requestWithToken({
        url: 'company/users/state/count',
        method: 'GET',
    });
}

function fetchLastUpdateTime(data) {
    return requestWithToken({
        url: 'security-policy/last/update/state',
        method: 'POST',
        data
    });
}

function userActiveDeactive(data) {
    return requestWithToken({
        url: 'company/users/state/change',
        method: 'POST',
        data
    });
}

function resetPasswordSendMail(data) {
    return requestWithToken({
        url: 'company/users/password/email',
        method: 'POST',
        data
    });
}


const UserService = {
    fetchUserList,
    fetchUserCount,
    fetchLastUpdateTime,
    userActiveDeactive,
    resetPasswordSendMail,
    fetchInviteUserList
}

export default UserService;
