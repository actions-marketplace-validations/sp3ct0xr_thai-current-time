const core = require('@actions/core');
const {DateTime} = require('luxon');

function run() {
  try {
    let th_format = 'dd LLL yy เวลา HH:mm';
    let t_time = DateTime.local().plus({ years: 543 }).setZone('Asia/Bangkok').toFormat(th_format,{ locale: 'th', numberingSystem: 'thai'});
    core.setOutput('thaiTime', t_time);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}
run();
