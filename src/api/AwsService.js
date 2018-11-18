import requestWithToken from './requestWithToken'

function create(data) {
  return requestWithToken({
    url: 'aws/create/',
    method: 'POST',
    data
  });
}

function fetchExternalId() {
  return requestWithToken({
    url: 'aws/get/external_id',
    method: 'GET',
  });
}

function addCollaborator(data) {
  return requestWithToken({
    url: 'collaborator/add/',
    method: 'POST',
    data
  });
}

function fetchAwsList() {
  return requestWithToken({
    url: 'aws/list',
    method: 'GET',
  });
}

function deleteAwsAccount(data) {
  return requestWithToken({
    url: 'aws/delete/',
    method: 'POST',
    data
  });
}

function enableAccount(data) {
  return requestWithToken({
    url: 'aws/active/',
    method: 'POST',
    data
  });
}

function disableAccount(data) {
  return requestWithToken({
    url: 'aws/disable/',
    method: 'POST',
    data
  });
}
function fetchServiceList() {
  return requestWithToken({
    url: 'aws/services/list/',
    method: 'GET',
  });
}

function deleteUserAccount() {
  return requestWithToken({
    url: 'aws/delete/accounts/',
    method: 'DELETE',
  });
}


const AwsService = {
  create,
  fetchExternalId,
  addCollaborator,
  fetchAwsList,
  deleteAwsAccount,
  enableAccount,
  disableAccount,
  fetchServiceList,
  deleteUserAccount
}

export default AwsService;