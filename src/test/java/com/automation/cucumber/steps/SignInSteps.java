package com.automation.cucumber.steps;

import com.automation.pages.AuthenticationPage;
import com.automation.pages.HomePage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }
    @When("^I click on sign in link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnsignInLinkFiled();

    }
    @Then("^I should navigate to sign in page successfully$")
    public void iShouldNavigateToSignInPageSuccessfully() {

    }

    @And("^I should see authentication message$")
    public void iShouldSeeAuthenticationMessage() {
        String expectedMessage="AUTHENTICATION";
        String actualMessage=new SignInPage().getAuthenticationText();
        Assert.assertEquals("message not displayed",expectedMessage,actualMessage);

    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new SignInPage().enterEmailForSignIn(username);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new SignInPage().enterPasswordForSignIn(password);

    }

    @And("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errormessage)  {
        Assert.assertEquals("Error message not displayed",errormessage,new AuthenticationPage().getErrorMessage());


    }

     @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
    }

    @And("^I should see sign out link$")
    public void iShouldSeeSignOutLink() {
       Assert.assertTrue( new MyAccountPage().signOutLinkDisplayed());
    }

    @And("^I click on sign out link$")
    public void iClickOnSignOutLink() {
        new MyAccountPage().clickOnSignOutLink();

    }

    @Then("^I should log out successfully$")
    public void iShouldLogOutSuccessfully() {
    }

    @And("^I should see sign in link$")
    public void iShouldSeeSignInLink() {
        Assert.assertTrue(new HomePage().signInLinkDisplayed());
    }
}
