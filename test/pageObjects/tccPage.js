const elementUtil = require('./elementUtil')
const data = require('../data.js')
class tccPage {
    
    //BasicInfo Page Objects/Locators
    get firstName () {return $('//div[@id="SurveyControl_Question943"]/div/input')}
    get lastName () {return $('//div[@id="SurveyControl_Question946"]/div/input')}
    get email () {return $('//div[@id="SurveyControl_Question949"]/div/input')}
    get streetAddress () {return $('//div[@id="SurveyControl_Question950"]/div/input')}
    get city () {return $('//div[@id="SurveyControl_Question951"]/div/input')}
    get zipCode () {return $('//div[@id="SurveyControl_Question952"]/div/input')}
    get btnNext () {return $('#SurveyControl_SurveySubmit')}

    //Questions Page Objects/Locators
    get snapQN () {return $('//div[@id="SurveyControl_Question11396"]/div/label[2]')}
    get tanfQN () {return $('//div[@id="SurveyControl_Question11397"]/div/label[2]')}
    get militaryQN () {return $('//div[@id="SurveyControl_Question914"]/div/label[2]')}
    get disabledQN () {return $('//div[@id="SurveyControl_Question11361"]/div/label[2]')}
    get felonyQN () {return $('//div[@id="SurveyControl_Question915"]/div/label[2]')}
    get unemployedQN () {return $('//div[@id="SurveyControl_Question1244"]/div/label[2]')}


    //Page Methods/Actions
     async inputBasicInfo () {
        elementUtil.doSetValue(await this.firstName,data.firstName)
        elementUtil.doSetValue(await this.lastName,data.lastName)
        elementUtil.doSetValue(await this.email,data.email)
        elementUtil.doSetValue(await this.streetAddress,data.address)
        elementUtil.doSetValue(await this.city,data.city)
        elementUtil.doSetValue(await this.zipCode,data.zipCode)
        await browser.pause(1000)
        elementUtil.doClick(await this.btnNext)
    }

    async selectYesOrNo(){
        elementUtil.doClick(await this.snapQN)
        elementUtil.doClick(await this.tanfQN)
        elementUtil.doClick(await this.militaryQN)
        elementUtil.doClick(await this.disabledQN)
        elementUtil.doClick(await this.felonyQN)
        browser.scroll(0,250);
        elementUtil.doClick(await this.unemployedQN)
        elementUtil.doClick(await this.btnNext)
    }

    async submitForm (){
        elementUtil.doClick(await this.btnNext)
        await browser.pause(4000)
    }

    async VerifyHomePageUrl (){
       expect(await browser.getUrl()).toContain('https://www.experian.com/employer-services/')
    }

    open () {
        return browser.url(data.url)
    }
}

module.exports = new tccPage();
