class ElementUtil {

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element,value){
        element.waitForDisplayed()
        element.setValue(value)
    }

}

module.exports = new ElementUtil()