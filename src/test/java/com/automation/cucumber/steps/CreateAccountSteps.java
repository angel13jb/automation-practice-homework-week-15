package com.automation.cucumber.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountSteps {

    @And("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email)  {
        new SignInPage().enterEmailForCreatAccount(email);
    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreatAccountButton();
    }
    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String fname)  {
        new CreateAccountPage().enterFirstNameInInfo(fname);

    }
    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lname)  {
        new CreateAccountPage().enterLastNameInAddress(lname);

    }

    @And("^I enter password$")
    public void iEnterPassword( String password) {
        new CreateAccountPage().enterPasswordInInfo(password);
    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String address )  {
        new CreateAccountPage().enterAddress(address);

    }

    @And("^I enter cityname \"([^\"]*)\"$")
    public void iEnterCityname(String city)  {
        new CreateAccountPage().enterCity(city);

    }

    @And("^I select state name \"([^\"]*)\"$")
    public void iSelectStateName(String state)  {
        new CreateAccountPage().selectStateFromDropDown(state);

    }

    @And("^I enter zipcode \"([^\"]*)\"$")
    public void iEnterZipcode(String code)  {
        new CreateAccountPage().enterZipCode(code);

    }

    @And("^I select country name \"([^\"]*)\"$")
    public void iSelectCountryName(String country)  {
        new CreateAccountPage().selectCountryFromDropDown(country);

    }

    @And("^I enter homephone number \"([^\"]*)\"$")
    public void iEnterHomephoneNumber(String num)  {
        new CreateAccountPage().enterHomePhoneNumber(num);

    }

    @And("^I enter aliasaddress \"([^\"]*)\"$")
    public void iEnterAliasaddress(String add)  {
        new CreateAccountPage().enterAliasAddress(add);

    }
    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterField();
    }

    @Then("^I  should create account successfully$")
    public void iShouldCreateAccountSuccessfully() {
    }

    @And("^I should see my account message$")
    public void iShouldSeeMyAccountMessage() {
        String expactedmessage="My Account";
        String actualmessage=new MyAccountPage().getMyaccountText();
        Assert.assertEquals("message not diaplayed",expactedmessage,actualmessage);
    }

}
