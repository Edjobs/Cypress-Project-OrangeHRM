class LoginPage{
    selectorsList() {
        const selectors = {
                usernameField: "[name='username']",
                passwordField: "[name='password']",
                loginButoon: ".oxd-button",
                wrongCredentialAlert: ".oxd-alert-content-text",
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButoon).click()

    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage