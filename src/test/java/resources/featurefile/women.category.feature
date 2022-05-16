Feature: Women Category Test
  As user I want to select products from women category in automation practice website

 @sanity,@smoke,@regression
  Scenario:Verify User should navigate to women category page successfully
    Given I am on homepage
    When I click on women tab
    Then I should navigate to women category page successfully
    And I should see womwn text

 @smoke,@regression
  Scenario Outline: verifyUserShouldAddProductToTheCartSuccessfully
    Given I am on homepage
    When I click on women tab
    And I click on product "<product>"
    And I enter quantity "<qty>"
    And I select size "<size>"
    And I click on colour "<colour>"
    And I click on add to cart button
    Then I should see message that product successfully added to your shopping cart
    And I click on close button and close the popup
    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |