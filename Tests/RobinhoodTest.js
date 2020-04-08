var pgObjects = {}

module.exports = {
    before: browser => {
        pgObjects = browser.page.robinPageObjects()
        pgObjects.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Home Page Links Test': browser => {
        pgObjects.useXpath()
        for (i = 1; i < 6; i++) {
            pgObjects.testLink2(pgObjects, i)
        }
    },

    'Search test': browser => {
        pgObjects
        .search(pgObjects, "boogerfart") //This is almost guaranteed to not appear. Sometimes searching for an invalid query first breaks future searches. This time, it didn't.
        .search(pgObjects, "Help") //Probably exists somewhere on the website
        .search(pgObjects, "Stonks") //Probably not but would be funny
    },

    'Help Center Test': browser => {
        pgObjects.useXpath()
        for (i = 1; i <22; i++) {
            pgObjects.testLink1(pgObjects, i)
        }
    },
    
}