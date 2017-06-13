const PWMetrics = require('pwmetrics');
const serve = require('serve');
global['atob'] = require('atob');

const TIMES = 5;
const TARGETS = ['http://localhost:5000/apps/aot-closure',
  'http://localhost:5000/apps/ng-bootstrap-closure-compiler'
];

const tasks = [];
TARGETS.forEach(target => {
  tasks.push(() => getPerf(target));
});

const server = serve(__dirname, {
  port: 5000,
  ignore: ['node_modules']
})
 

promiseSerial(tasks)
.then(results => {
    const reference = extractResult(results[0]);
    const target = extractResult(results[1]);
    Object.keys(target.timings).forEach((id) => {
      target.timings[id].score = (target.timings[id].timing / reference.timings[id].timing).toFixed(2);
      target.timings[id].timing = (target.timings[id].timing).toFixed(2);
    });
    console.log(target);
    server.stop();
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

function promiseSerial(promises) {
  return promises.reduce((promise, func) =>
      promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]));
}

function getPerf(url) {
  const pwMetrics = new PWMetrics(url, {
    flags: {
        runs: TIMES,
        output: true
    }
  });
  return pwMetrics.start();
}

function extractResult(result) {
  const rawData = result.median ? result.median : result.runs[0];
  const data = {
    url: rawData.url,
    timings: {}
  };
  rawData.timings.forEach((timing) => {
    data.timings[timing.id] = {
      title: timing.title,
      timing: timing.timing
    };
  });
  return data;
}