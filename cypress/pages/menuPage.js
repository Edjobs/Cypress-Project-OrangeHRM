class MenuPage{
    selectorsList(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            myPerformanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
        }
        return selectors
    }
    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    accessMyPerformance(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
}
export default MenuPage