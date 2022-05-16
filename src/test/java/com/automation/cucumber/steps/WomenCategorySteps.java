package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategorySteps {
    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
        new HomePage().clickOnWomanField();
    }

    @Then("^I should navigate to women category page successfully$")
    public void iShouldNavigateToWomenCategoryPageSuccessfully() {
    }

    @And("^I should see womwn text$")
    public void iShouldSeeWomwnText() {
        String expactedText = "WOMWN";
        String actualText=new WomenCategoryPage().getWomenText();
        Assert.assertEquals("Text not match",expactedText,actualText);
    }

    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product)  {
        new WomenCategoryPage().clickOnProduct(product);
    }

    @And("^I enter quantity \"([^\"]*)\"$")
    public void iEnterQuantity(String qty) {
        new ProductPage().enterQuantity(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^I click on colour \"([^\"]*)\"$")
    public void iClickOnColour(String colour)  {
        new ProductPage().clickOnColur(colour);

    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddCart();
    }

    @Then("^I should see message that product successfully added to your shopping cart$")
    public void iShouldSeeMessageThatProductSuccessfullyAddedToYourShoppingCart() {
        String actualText=new ProductPage().getSuccessFullyAddedText();
Assert.assertTrue(actualText.contains("Product successfully added to your shopping cart"));
    }

    @And("^I click on close button and close the popup$")
    public void iClickOnCloseButtonAndCloseThePopup() {
        new ProductPage().clickOnCloseWindowTab();
    }
}
