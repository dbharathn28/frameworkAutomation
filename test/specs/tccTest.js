const tccPage = require('../pageObjects/tccPage');

describe('TCC web page Validation', () => {
    it('Launch tcc web page', async () => {
        await tccPage.open();
    })

    it('Input Basic Info', async () => {
        await tccPage.inputBasicInfo()
    })
    it('Select Yes or No for the asked questions', async () => {
        await tccPage.selectYesOrNo()
    })

    it('Submit Form and verify user naviagtes to homepage', async () => {
        await tccPage.submitForm()
        await tccPage.VerifyHomePageUrl()
    })
});


