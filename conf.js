exports.config = {
    framework: 'jasmine',
    specs: ['spec.js'],
    // capabilities: {
    //   browserName: 'firefox'
    // }


    // multiCapabilities: [{
    //   browserName: 'firefox'
    // }, {
    //   browserName: 'chrome'
    // }]
jasmineNodeOpts: { defaultTimeoutInterval: 260000 } 

  }
