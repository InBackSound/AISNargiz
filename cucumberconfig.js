const crew = require('serenity-js/lib/stage_crew');
const fs = require("fs");
const rimraf = require('rimraf');
const mkdirp = require("mkdirp");
const reportsFolder = process.cwd() + "/target";

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
        require: ['./stepDefinitions/*.ts'], // запускать это
        tags: "@forTest",
        compiler: 'ts:ts-node/register',
        format: 'pretty'
    },

    specs: ['features/*.feature'],

    serenity: {
        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],

        dialect: 'cucumber',
    },

    beforeLaunch: () => {
        //Check if reports directory exists, if not create it
        //If exists - clean it
        if (!fs.existsSync(reportsFolder)) {
            mkdirp.sync(reportsFolder);
        } else {
            rimraf.sync(reportsFolder);
            mkdirp.sync(reportsFolder);
        }
    },

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
            args: ["--window-size=1280,1720"]
        }
    },

};