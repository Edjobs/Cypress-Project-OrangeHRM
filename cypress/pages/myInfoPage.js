class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameFiel: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input--active",
            chalangeGenericField: ".oxd-select-text-input",
            optionBoxField: ".oxd-select-option",
            nickNameField: ':nth-child(3) > :nth-child(2) > .oxd-input',
            //employeeIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            //employeeIdField: ':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            //otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            //driverLicenseNumberField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            licenceExpiryDateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            callendarCloseField: '.--close',
            saveButton: '.oxd-form-actions',
            updateText: '.oxd-text--toast-message',
            nationalityClick: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',

        }
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameFiel).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId,otherId,drivlicenceName,drivlicenceDate){
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
    
            cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
                
            cy.get(this.selectorsList().genericField).eq(6).clear().type(drivlicenceName)
            cy.get(this.selectorsList().callendarCloseField).click()
            //cy.get(this.selectorsList().genericField).eq(7).clear().type(drivlicenceDate)
            
            
    }
    saveForm(){
        cy.get(this.selectorsList().saveButton).eq(0).click()
    }

    fillStatus(){
        cy.get(this.selectorsList().chalangeGenericField).eq(0).click()
        cy.get(this.selectorsList().optionBoxField).eq(27).click()
        cy.get(this.selectorsList().chalangeGenericField).eq(1).click()
        cy.get(this.selectorsList().optionBoxField).eq(2).click()
        }

    
}

export default MyInfoPage