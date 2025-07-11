import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/loginPage'
import AdminPage from '../../pages/adminPage'

const loginPage = new LoginPage()
const adminPage = new AdminPage()

Given('user is logged in as standard admin user', () => {
    cy.fixture('users').then((users) => {
        const user = users.standard_admin
        loginPage.visitLoginPage()
        loginPage.enterUsername(user.username)
        loginPage.enterPassword(user.password)
        loginPage.clickLogin()
    })
})

Given('user navigates to Admin page', () => {
    adminPage.goToAdminPage()
    adminPage.assertOnAdminPage()
})

When('user adds a new admin {string} with role {string} and status {string}', (newUsername, role, status) => {
    adminPage.clickAddUser()
    cy.fixture('users').then((users) => {
        const user = users.standard_admin
        adminPage.fillAddAdminFields(newUsername, role, status, user.password)
    })
    adminPage.saveUser()
})
  
Then('the admin {string} with its unique username should appear in the user list', (newUsername) => {
    adminPage.searchUser()
    adminPage.assertUserExists()
})