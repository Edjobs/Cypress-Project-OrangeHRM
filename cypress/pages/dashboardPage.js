class DashBoardPage{

    selectorsList(){
        const selectors = {
            sectionTileTopBar: ".oxd-topbar-header-breadcrumb-module",
        }
        return selectors
    }
    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().sectionTileTopBar).contains('Dashboard')
    }
}

export default DashBoardPage