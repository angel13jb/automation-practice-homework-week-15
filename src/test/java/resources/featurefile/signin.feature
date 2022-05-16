Feature: SignIn Test
  As a user I want to sign in to automation practice website

  @sanity,@smoke,@regression
  Scenario:User should navigate to sign in page successfully
    Given I am on homepage
    When I click on sign in link
    Then I should navigate to sign in page successfully
    And I should see authentication message

  @smoke,@regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on sign in link
    And I enter username "<username>"
    And I enter password "<password>"
    And I click on sign in button
    Then I should see the error message "<errormessage>"
    Examples:
      | username       | password | errormessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdgfg        | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @regression
  Scenario: Verify that user should login successfully with valid credentials
    Given I am on homepage
    When I click on sign in link
    And I enter username "priti123@gmail.com"
    And I enter password "patel123"
    And I click on sign in button
    Then I should login successfully
    And I should see sign out link

  @regression
  Scenario: Verify that user should log out successfully
    Given I am on homepage
    When I click on sign in link
    And I enter username "priti123@gmail.com"
    And I enter password "patel123"
    And I click on sign in button
    And I click on sign out link
    Then I should log out successfully
    And I should see sign in link
