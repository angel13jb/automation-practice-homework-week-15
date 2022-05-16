Feature: Create Account Test
  As user I want to create account in automation practice website

  @sanity,@smoke,@regression
    Scenario:Verify that user should create account successfully
    Given I am on homepage
    When I click on sign in link
    And I enter email address "pretty123@gmail.com"
    And I click on create account button
    And I enter firstname "pretty"
    And I enter lastname "patel"
    And I enter password "patel543"
    And I enter address "1 albany street"
    And I enter cityname "dehli"
    And I select state name "Delaware"
    And I enter zipcode "24536"
    And I select country name "United States"
    And I enter homephone number "9956734564"
    And I enter aliasaddress "25 canary"
    And I click on register button
    Then I  should create account successfully
    And I should see my account message
