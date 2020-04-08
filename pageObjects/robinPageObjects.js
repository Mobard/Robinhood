var robinCommands = {
    testLink1: function (browser, index) {
        var self = this
        this
            .api.url('https://robinhood.com/us/en/support/')
        this
            .waitForElementVisible('html')
            .getAttribute('xpath', `(//a[@class="css-z23lrj e1nhd6ps0"])[${index}]`, 'href', function (result) {
                href = result.value
                console.log("ORA")
                self
                    .click('xpath', `(//a[@class="css-z23lrj e1nhd6ps0"])[${index}]`)
                    .verify.urlContains(href)
            })
            return this
    },
    testLink2: function (browser, index) {
        var self = this
        this
            .waitForElementVisible('@productsButton')
            .click('@productsButton')
            .waitForElementPresent('@navLinksContainer')
            .getAttribute('xpath', `(//a[@class="css-1nmn2mj-UnstyledAnchor"])[${index}]`, 'href', function (result) {
                href = result.value
                console.log("ORA")
                self
                    .click('xpath', `(//a[@class="css-1nmn2mj-UnstyledAnchor"])[${index}]`)
                    .verify.urlContains(href)
            })
            return this
    },
    search: function(browser,searchTerm) {
        this
            .api.url('https://robinhood.com/us/en/support/')
        this
            .waitForElementPresent('html')
            .waitForElementPresent('@searchInput')
            .setValue('@searchInput', [searchTerm, browser.api.Keys.ENTER])
            .useXpath()
            .verify.containsText('//h4[@class="css-cucpbj"]' , searchTerm)
            .navigate()
        return this
    }
}


module.exports = {
    url: 'https://robinhood.com/us/en/',
    commands: [robinCommands],
    elements: {
        homeButton: {
            selector: '//a[@id="ac-gn-firstfocus"]',
            locateStrategy: 'xpath'
        },
        signInButton: {
            selector: '//span[@class="css-1c3pfuh"]',
            locateStrategy: 'xpath'
        },
        supportLink: {
            selector: '//span[@class="css-11lwfwe"]',
            locateStrategy: 'xpath'
        },
        searchInput: {
            selector: '//input[@id="react-select-support-search-input"]', //'/html/body/div[1]/div/div[1]/div/div/div/div/div/div[1]/div/div/input', //'input[@id="react-select-support-search-input"]',
            locateStrategy: 'xpath'
        },
        productsButton: {
            selector: '//button[@class="css-cw2lue-UnstyledButton-ProductsDropDown"]',
            locateStrategy: 'xpath'
        },
        navLinksContainer: {
            selector: '//ul[@class="css-ox0vgx-NavigationLinksContainer"]',
            locateStrategy: 'xpath'
        },

    }
}