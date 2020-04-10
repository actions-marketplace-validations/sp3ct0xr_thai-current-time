const process = require('process');
const c_process = require('child_process');
// shows how the runner will run a javascript action with env / stdout protocol
test('Test Thai Moment', () => {
    const ip = 'index.js';
    console.log(c_process.execSync(`node ${ip}`).toString());
});
