import { GeneralFunctions } from "../utils/generalFunctions"
import testData  from '../testData/testData.json'
// adding page object model
export class Insights {

    get hme_Page() { return $("//img[2][@alt='Securian Financial Home']")}

    get current_Age() { return $("#current-age")}

    get retirement_Age() { return $("#retirement-age")}

    get current_Income() { return "#current-income"}

    get spouse_Income() { return "#spouse-income"}

    get current_total_savings() { return "#current-total-savings" }

    get current_Annual_Savings() { return "#current-annual-savings"}

    get savings_Increase_Rate() { return "#savings-increase-rate"}

    get calculate_Button() { return $("//button[contains(text(),'Calculate')]")}

    get results_Text() { return $("#calculator-results-container>h3")}

    get displayAdd_SecurityFields() { return $("//label[@for='yes-social-benefits']")} 

    get hideAdd_SecurityFields() { return $("#no-social-benefits")}

    get social_Security_Override() { return $("#social-security-override")}

    get default_Adjustment() { return $("//a[contains(text(),'Adjust default values')]")}

    get retirement_Duration() { return $("#retirement-duration")}

    get retirement_AnnualIncome() { return $("#retirement-annual-income")}

    get preRetirement_ROI() { return $("#pre-retirement-roi")}

    get postRetirement_ROI() { return $("#post-retirement-roi")}

    get saveChanges_Button() { return $("//button[contains(text(),'Save changes')]")}

// launching AUT
    async openBrowser() {
        await browser.url(testData.url)
        await browser.waitUntil(
            async () => await browser.execute(()=>  document.readyState ==='complete'),
            {timeout : 10000}
        )

    }
    //Submitting All Required values
    async submitAllRequiredFields() {
        await GeneralFunctions.setInputValue(await this.current_Age, testData.Fields.current_Age)
        await GeneralFunctions.setInputValue(await this.retirement_Age, testData.Fields.retirement_Age)
        await GeneralFunctions.executeScript(this.current_Income, testData.Fields.current_IncomeIncome)
        await GeneralFunctions.executeScript(this.current_total_savings, testData.Fields.currenRetirementSavings)
        await GeneralFunctions.executeScript(this.current_Annual_Savings, testData.Fields.currenRetirementContribution)
        await GeneralFunctions.executeScript(this.savings_Increase_Rate, testData.Fields.annualRetirementContribution)
        await GeneralFunctions.click(await this.calculate_Button)
        await this.resultsText.waitForDisplayed({timeout: 10000})
        return await this.resultsText.getText()
    }
  // verifying Security Field Display or not
    async displaySecurityField(displayAdd_SecurityFields) {
        if(displayAdd_SecurityFields === 'Yes'){
            await GeneralFunctions.click(await this.displayAdd_SecurityFields)
            await this.social_Security_Override.waitForDisplayed({timeout:10000})
            return await this.social_Security_Override.isDisplayed()? true : false
        }else{
            return await this.social_Security_Override.isDisplayed()? true : false
        }

    }
// submitting All Adjust default values
    async submitFormWithAllDefaultFields() {
        await GeneralFunctions.executeScript(this.spouse_Income, testData.Fields.current_Annual_Savings)
        return await this.submitAllRequiredFields()
    }
//Validating all Adjust Default Values
    async validateAdjustDefaultValues() {
        await GeneralFunctions.click(await this.default_Adjustment)
        await GeneralFunctions.setInputValue(await this.retirement_Duration, testData.Fields.retirementYears)
        await GeneralFunctions.setInputValue(await this.ement_AnnualIncome, testData.Fields.percentOfFinalIncomeDesired)
        await GeneralFunctions.setInputValue(await this.preRetirement_ROI, testData.Fields.preRetirementInvestmentReturn)
        await GeneralFunctions.setInputValue(await this.postRetirement_ROI, testData.Fields.postRetirementInvestmentReturn)
        await GeneralFunctions.click(await this.saveChanges_Button)
    }

}