package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passWordField;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationTextField;

    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement creatAccountTextField;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement creatAccoutnButtonField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailFieldInCreatAccount;

    public void enterEmailForCreatAccount(String email) {
        sendTextToElement(emailFieldInCreatAccount, email);
        log.info("Enter EmailForCreatAccount " + email + "to EmailFieldInCreatAccount" + emailFieldInCreatAccount.getText());
    }

    public void clickOnCreatAccountButton() {
        clickOnElement(creatAccoutnButtonField);
        log.info("Clicking on CreatAccountButton : " + creatAccoutnButtonField.toString());
    }

    public void enterEmailForSignIn(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter EmailForSignIn " + email + "to EmailField" + emailField.getText());
    }

    public void enterPasswordForSignIn(String password) {
        sendTextToElement(passWordField, password);
        log.info("Enter PasswordForSignIn " + password + "to PassWordField" + passWordField.getText());
    }

    public String getAuthenticationText() {
        log.info("Getting text from : " + authenticationTextField.toString());
        return getTextFromElement(authenticationTextField);
    }

    public String getCreatAnAccountText() {
        log.info("Getting text from : " + creatAccountTextField.toString());
        return getTextFromElement(creatAccountTextField);
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("Clicking onSignInButton : " + signInButton.toString());
    }

    public void signInApplication(String username, String password) {
        enterEmailForSignIn(username);
        enterPasswordForSignIn(password);
        clickOnElement(signInButton);
        log.info("signInApplication :" + username + password + signInButton);

    }

}
