Feature: Add Multiple Admin Functionality

  Scenario Outline: Add new admin user
    Given user is logged in as standard admin user
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>"
    Then the admin "<newUsername>" should appear in the user list

    Examples:
      | newUsername  | role  |
      | cypressuser1 | ESS   |
      | cypressuser2 | Admin |