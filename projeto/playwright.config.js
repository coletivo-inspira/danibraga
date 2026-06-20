module.exports = {
    timeout: 30000,
    use: {
        headless: true,
        browserName: 'chromium',
        screenshot: 'on',
        video: 'retain-on-failure',
    },
    reporter: [['list'], ['json', { output: 'test-results.json' }]],
    outputDir: 'test-results/',
};