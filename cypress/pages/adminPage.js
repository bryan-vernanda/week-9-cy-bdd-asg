class AdminPage {
    goToAdminPage() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
    }

    assertOnAdminPage() {
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('contain', 'Admin')
        cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain', 'System User')
    }

    clickAddUser() {
        cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click()
    }

    selectUserRole(role) {
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper').should('be.visible').click()
        cy.contains('.oxd-select-option', role).should('be.visible').click()
    }

    typeEmployeeName(name) {
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible').type(name)
    }

    selectFirstEmployeeName() {
        cy.get('.oxd-autocomplete-option').first().click()
    }

    selectStatus(status) {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper').should('be.visible').click()
        cy.contains('.oxd-select-option', status).should('be.visible').click()
    }

    enterUsername(username) {
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(username)
    }

    enterPassword(password) {
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(password)
    }

    confirmPassword(password) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(password)
    }

    saveUser() {
        cy.get('.oxd-button--secondary').should('be.visible').click()
    }

    searchUser(username) {
        cy.get(':nth-child(2) > .oxd-input').should('be.visible').type(username)
        cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click()
    }

    assertUserExists(username) {
        cy.get('.oxd-table-card > .oxd-table-row').should('contain', username)
    }
}

export default AdminPage
  