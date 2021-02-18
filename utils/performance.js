const { performance } = require('perf_hooks')

function performanceMeasure(callback, ...args) {
  const start = performance.now()
  callback(...args)
  const end = performance.now()
  console.log(`performance: ${end - start}`)
}

module.exports = performanceMeasure
