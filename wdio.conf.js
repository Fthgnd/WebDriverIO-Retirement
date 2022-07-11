exports.config = {
    
    path: '/',
    
    specs: [
        './test/specs/test.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
    
        maxInstances: 5,
        
        browserName: 'chrome',
        
    }],
    
    logLevel: 'silent',
    
    bail: 0,
    baseUrl: 'http://localhost',
    
    // waitforTimeout: 1000000,
    // connectionRetryTimeout: 120000,
    // connectionRetryCount: 3,
    services: ['chromedriver','docker'],
    
    framework: 'jasmine',
    reporters: ['spec'],


    jasmineOpts: {
        defaultTimeoutInterval: 600000
    }

    
    
}
