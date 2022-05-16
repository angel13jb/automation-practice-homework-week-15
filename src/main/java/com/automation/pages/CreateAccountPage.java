package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "id_gender2")
    WebElement mrsRadioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement infoFirstNameField;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement infoLastNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement infoPassWordField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='days']")
    WebElement dateDropDownField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='months']")
    WebElement monthdropDownField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='years']")
    WebElement yearDropDownField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement addressFirstNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement addressLastNameFeild;

    @CacheLookup
    @FindBy(xpath = "//input[@id='company']")
    WebElement companyField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address2']")
    WebElement addressLine2Field;

    @CacheLookup
    @FindBy(id = "city")
    WebElement cityField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateDropDownField;

    @CacheLookup
    @FindBy(id = "postcode")
    WebElement zipCodeField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryDropDownField;

    @CacheLookup
    @FindBy(xpath = "//textarea[@id='other']")
    WebElement additionalField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone']")
    WebElement homePhoneField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumberField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement addressAliasField;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButtonField;


    public void clickOnMrsRadioButton() {
        clickOnElement(mrsRadioButton);
        log.info("Clicking on mrsRadioButton :" + mrsRadioButton.toString());
    }

    public void enterFirstNameInInfo(String fName) {
        sendTextToElement(infoFirstNameField, fName);
        log.info("Enter firstname" + fName + "to firstnamefield" + infoFirstNameField.getText());

    }

    public void enterlastNameInInfo(String lName) {
        sendTextToElement(infoLastNameField, lName);
        log.info("Enter lastname" + lName + "to lastNameInInfo" + infoLastNameField.getText());
    }

    public void enterPasswordInInfo(String password) {
        sendTextToElement(infoPassWordField, password);
        log.info("Enter password" + password + "to PasswordInInfo" + infoPassWordField.getText());
    }

    public void clickOnDatedropDown() {
        clickOnElement(dateDropDownField);
        log.info("Clicking on DatedropDown :" + dateDropDownField.toString());
    }

    public void selectDateFromDropDown(String text) {
        selectByVisibleTextFromDropDown(dateDropDownField, text);
        log.info("Select Date " + text);

    }

    public void clickOnMonthDropDown() {
        clickOnElement(monthdropDownField);
        log.info("Clicking on MonthDropDown :" + monthdropDownField.toString());
    }

    public void selectMonthFromDropDown(String text) {
        selectByVisibleTextFromDropDown(monthdropDownField, text);
        log.info("Select Month " + text);
    }

    public void clickOnYearDropDown() {
        clickOnElement(yearDropDownField);
        log.info("Clicking on YearDropDown :" + yearDropDownField.toString());
    }

    public void selectYearFromDropDown(String text) {
        selectByVisibleTextFromDropDown(yearDropDownField, text);
        log.info("Select Year " + text);
    }

    public void enterFirstNameInAddress(String fName) {
        sendTextToElement(addressFirstNameField, fName);
        log.info("Enter firstname" + fName + "to Addressfield" + addressFirstNameField.getText());

    }

    public void enterLastNameInAddress(String lName) {
        sendTextToElement(addressLastNameFeild, lName);
        log.info("Enter lasttname" + lName + "to Addressfield" + addressLastNameFeild.getText());
    }

    public void enterCompanyName(String name) {
        sendTextToElement(companyField, name);
        log.info("Enter CompanyName" + name + "to Companyfield" + companyField.getText());
    }

    public void enterAddress(String address) {
        sendTextToElement(addressField, address);
        log.info("Enter Address" + address + "to Addressfield" + addressField.getText());
    }

    public void enterAddressLine2(String line2) {
        sendTextToElement(addressLine2Field, line2);
        log.info("Enter AddressLine2" + line2 + "to AddressLine2" + addressLine2Field.getText());
    }

    public void enterCity(String city) {
        sendTextToElement(cityField, city);
        log.info("Enter City" + city + "to CityField" + cityField.getText());
    }

    public void clickOnStateDropDown() {
        clickOnElement(stateDropDownField);
        log.info("Clicking on StateDropDown :" + stateDropDownField.toString());
    }

    public void selectStateFromDropDown(String text) {
        selectByVisibleTextFromDropDown(stateDropDownField, text);
        log.info("Select State " + text);
    }

    public void enterZipCode(String code) {
        sendTextToElement(zipCodeField, code);
        log.info("Enter ZipCode" + code + "to zipCodeField " + zipCodeField.getText());
    }

    public void clickOnCountrydropDownField() {
        clickOnElement(countryDropDownField);
        log.info("Clicking on CountrydropDown :" + countryDropDownField.toString());
    }

    public void selectCountryFromDropDown(String country) {
        selectByVisibleTextFromDropDown(countryDropDownField, country);
        log.info("Select Country " + country);
    }

    public void enterAdditionalField(String text) {
        sendTextToElement(additionalField, text);
        log.info("Enter Additional" + text + "to additionalField " + additionalField.getText());
    }

    public void enterHomePhoneNumber(String num) {
        sendTextToElement(homePhoneField, num);
        log.info("Enter HomePhoneNumber" + num + "to homePhoneField " + homePhoneField.getText());
    }

    public void enterMobilePhone(String mobileNum) {
        sendTextToElement(mobileNumberField, mobileNum);
        log.info("Enter MobilePhone" + mobileNum + "to mobileNumberField " + mobileNumberField.getText());
    }

    public void enterAliasAddress(String add) {
        sendTextToElement(addressAliasField, add);
        log.info("Enter AliasAddress" + add + "to addressAliasField " + addressAliasField.getText());
    }

    public void clickOnRegisterField() {
        clickOnElement(registerButtonField);
        log.info("Clicking on RegisterField :" + registerButtonField.toString());
    }


}
