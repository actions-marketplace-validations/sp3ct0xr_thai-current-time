const core = require('@actions/core');
const moment = require('moment');
const timezone = require('moment-timezone');


function run() {
  moment.locale('th');
  let th_format = 'DD MMM YY เวลา HH:mm';
  let th_zone = timezone.tz('Asia/Bangkok').add(543, 'years');
  try {
    core.setOutput('thaiTime', th_zone.format(th_format));
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}
run();
