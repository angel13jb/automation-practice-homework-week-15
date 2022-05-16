package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage extends Utility {
    private static final Logger log= LogManager.getLogger(MyAccountPage.class.getName());
    public MyAccountPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myaccountTextField;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLinkFiled;

    public String getMyaccountText() {
        log.info("Getting text from : " +myaccountTextField.toString());
        return getTextFromElement(myaccountTextField);
    }
    public Boolean signOutLinkDisplayed(){
        log.info("  signOutLinkDisplayed : " + signOutLinkFiled.toString());
        return signOutLinkFiled.isDisplayed();
    }
    public void clickOnSignOutLink(){
        clickOnElement(signOutLinkFiled);
        log.info("Clicking on SignOutLink : " + signOutLinkFiled.toString());

    }
}
