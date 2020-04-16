const core = require('@actions/core');
const {DateTime} = require('luxon');

function run() {
  try {
    let th_format = 'EEE dd MMM yy เวลา HH:mm';
    let t_time = DateTime.local().setZone('Asia/Bangkok').plus({years: 543}).minus({days: 2}).toFormat(th_format);
    core.setOutput('thaiTime', t_time);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}
run();
