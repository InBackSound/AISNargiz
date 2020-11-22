const crew = require('serenity-js/lib/stage_crew');

exports.config = {
    chromeOnly: true,
    directConnect: true,
    chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87',
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    params: {
        defaultTimeout: 60000,
        generatorPageURL: "https://service.webboss.pro/text-generator",
        onlinerPageURL: "https://www.onliner.by/"
    },

    cucumberOpts: {
        require: ['./FastTest/fasttest.ts'], // запускать это
        compiler: 'ts:ts-node/register',
        format: 'pretty',
        tags: "@GeneratorTesting"
    },

    serenity: {
        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],

        dialect: 'cucumber',
    },
    specs: ['FastTest/*.feature'],

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "https://google.com",
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 4,
        chromeOptions: {
            //Standard mode
            args: ["--window-size=1280,600"]
        }
    },

};