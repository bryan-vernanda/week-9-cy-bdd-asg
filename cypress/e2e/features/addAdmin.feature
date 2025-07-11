Feature: Add Multiple Admin Functionality

  Scenario Outline: Add new admin user
    Given user is logged in as standard admin user
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>" and status "<status>"
    Then the admin "<newUsername>" with its unique username should appear in the user list

    Examples:
      | newUsername  | role  | status   |
      | cypressuser1 | ESS   | Enabled  |
      | cypressuser2 | Admin | Disabled |