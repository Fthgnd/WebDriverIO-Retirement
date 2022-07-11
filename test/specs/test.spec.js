import { Insights } from '../../Pages/Insights.page'

const insightsObj = new Insights()

describe('submiting the data', () => {
// Before each test opening browser
    beforeEach(async () => {
        await insightsObj.openBrowser()
    })
    // User should be able to submit form with all required fields filled in
    it('Validate submit form functionality with Required fields fill in', async () => {
        await browser.maximizeWindow()
        const result = await insightsObj.submitRequiredFields()
        expect(result).toEqual('Results')
        })
    // Additional Social Security fields should display
    it('Additional Social Security fields should display ', async () => {
        const displayFields = await insightsObj.displaySecurityField('Yes')
        expect(displayFields).toBe(true)
        })
    // hide based on Social Security benefits toggle 
    it('Additional Social Security fields should hide ', async () => {
        const hideFields = await insightsObj.displayAdd_SecurityFields('No')
        expect(hideFields).toBe(false)
       })
    //  User should be able to submit form with all fields filled in
    it('user should be able to submit form with all the fields filled in', async() => {
        const result = await insightsObj.submitFormWithAllDefaultFields()
        expect(result).toEqual('Results')  
       })
    //User should be able to update default calculator values 
    it('User should be able to update default calculator values ', async ()=>{
        await insightsObj.validateAdjustDefaultValues()
    })
})