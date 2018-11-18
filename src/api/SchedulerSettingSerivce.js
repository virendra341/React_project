import requestWithToken from './requestWithToken'

function fetchSchedulerList(data) {
  return requestWithToken({
    url: 'scheduler/list/',
    method: 'POST',
    data
  });
}

function schedulerEdit(data) {
  return requestWithToken({
    url: 'scheduler/edit/',
    method: 'POST',
    data
  });
}

function schedulerEnableDisable(data) {
  return requestWithToken({
    url: 'scheduler/state/',
    method: 'POST',
    data
  });
}



const SchedulerSettingSerivce = {
    fetchSchedulerList,
    schedulerEdit,
    schedulerEnableDisable
  }
  
  export default SchedulerSettingSerivce;