import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../pages/loginPage'
import AdminPage from '../../pages/adminPage'

const loginPage = new LoginPage()
const adminPage = new AdminPage()

Given('user is logged in as standard admin user', () => {
  cy.fixture('users').then((users) => {
    const user = users.standard_admin
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginPage.enterUsername(user.username)
    loginPage.enterPassword(user.password)
    loginPage.clickLogin()
  })
})

Given('user navigates to Admin page', () => {
    adminPage.goToAdminPage()
    adminPage.assertOnAdminPage()
})

When('user adds a new admin {string} with role {string}', (newUsername, role) => {
    adminPage.clickAddUser()
    adminPage.selectUserRole(role)
    adminPage.typeEmployeeName('a') // Type 'a' and later pick first result
    cy.wait(3000)
    adminPage.selectFirstEmployeeName()
    adminPage.selectStatus('Enabled')
    const uniqueUsername = `${newUsername}-${Date.now()}` // Need to be unique since running twice with same new static username won't work
    cy.wrap(uniqueUsername).as('createdUsername')
    adminPage.enterUsername(uniqueUsername)
    cy.fixture('users').then((users) => {
        const user = users.standard_admin
        adminPage.enterPassword(user.password)
        adminPage.confirmPassword(user.password)
    })
    adminPage.saveUser()
    cy.wait(7000)
})
  
Then('the admin {string} should appear in the user list', (newUsername) => {
    cy.get('@createdUsername').then((actualUsername) => {
        adminPage.searchUser(actualUsername)
        adminPage.assertUserExists(actualUsername)
    })
})