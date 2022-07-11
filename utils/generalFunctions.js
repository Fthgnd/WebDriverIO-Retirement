class GeneralFunctions {

    async executeScript(locator, value) {
        await browser.execute((elementLocator, elementValue) => {
            document.querySelector(elementLocator).value = elementValue
        },locator, value)
    }

    async setInputValue(locator, value) {
        await locator.waitForDisplayed({timeout:10000})
        await locator.setValue(value)
        
    }

    async click(locator) {
        await locator.waitForClickable({timeout: 10000} )
        await locator.click()
    }
}

module.exports.GeneralFunctions = new GeneralFunctions()