// Admin Page
const MENU_ADMIN = ':nth-child(1) > .oxd-main-menu-item'
const PAGE_HEADER = '.oxd-topbar-header-breadcrumb-module'
const FILTER_TITLE = '.oxd-table-filter-header-title > .oxd-text'
const BTN_ADD_USER = '.orangehrm-header-container > .oxd-button'

// Add Admin Form
const SELECT_USER_ROLE = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper'
const INPUT_EMPLOYEE_NAME = '.oxd-autocomplete-text-input > input'
const FIRST_AUTOCOMPLETE_OPTION = '.oxd-autocomplete-option'
const SELECT_STATUS = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper'
const INPUT_USERNAME = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
const INPUT_PASSWORD = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
const INPUT_CONFIRM_PASSWORD = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
const BTN_SAVE = '.oxd-button--secondary'
const INPUT_SEARCH_USERNAME = ':nth-child(2) > .oxd-input'
const BTN_SEARCH = '.oxd-form-actions > .oxd-button--secondary'
const USER_ROW = '.oxd-table-card > .oxd-table-row'

class AdminPage {
    goToAdminPage() {
        cy.get(MENU_ADMIN).should('be.visible').click()
    }

    assertOnAdminPage() {
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
        cy.get(PAGE_HEADER).should('contain', 'Admin')
        cy.get(FILTER_TITLE).should('contain', 'System User')
    }

    clickAddUser() {
        cy.get(BTN_ADD_USER).should('be.visible').click()
    }

    fillAddAdminFields(newUsername, role, status, password) {
        cy.get(SELECT_USER_ROLE).should('be.visible').click()
        cy.contains('.oxd-select-option', role).should('be.visible').click()

        cy.get(INPUT_EMPLOYEE_NAME).should('be.visible').type('a')
        cy.wait(3000)
        cy.get(FIRST_AUTOCOMPLETE_OPTION).first().click()

        cy.get(SELECT_STATUS).should('be.visible').click()
        cy.contains('.oxd-select-option', status).should('be.visible').click()

        const uniqueUsername = `${newUsername}-${Date.now()}`
        cy.wrap(uniqueUsername).as('createdUsername')
        cy.get(INPUT_USERNAME).should('be.visible').type(uniqueUsername)

        cy.get(INPUT_PASSWORD).should('be.visible').type(password)
        cy.get(INPUT_CONFIRM_PASSWORD).should('be.visible').type(password)
    }

    saveUser() {
        cy.get(BTN_SAVE).should('be.visible').click()
        cy.wait(7000)
    }

    searchUser() {
        cy.get('@createdUsername').then((actualUsername) => {
            cy.get(INPUT_SEARCH_USERNAME).should('be.visible').type(actualUsername)
            cy.get(BTN_SEARCH).should('be.visible').click()
        })
    }

    assertUserExists() {
        cy.get('@createdUsername').then((actualUsername) => {
            cy.get(USER_ROW).should('contain', actualUsername)
        })
    }
}

export default AdminPage
  