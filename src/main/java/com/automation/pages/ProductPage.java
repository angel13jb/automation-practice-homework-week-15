package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantityField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeField;

    @CacheLookup
    @FindBy(xpath = "//a[contains(@class,'color_pick' )]")
    List<WebElement> coulrList;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCartField;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement successfullyAddedMessageTextField;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindowTAb;


    public void enterQuantity(String qty) {
        quantityField.clear();
        sendTextToElement(quantityField, qty);
        log.info("Enter quantity" + qty + "to QuantityField" + quantityField.getText());

    }

    public void selectSize(String siz) {
        selectByVisibleTextFromDropDown(sizeField, siz);
        log.info("Select Size " + siz);
    }

    public void clickOnColur(String colur) {
        for (WebElement cLists : coulrList) {
            if (cLists.getAttribute("title").equals(colur)) {
                cLists.click();
            }
        }
        log.info("Clicking on Colour : " + colur);
    }

    public void clickOnAddCart() {
        clickOnElement(addCartField);
        log.info("Clicking on AddCart : " + addCartField.toString());

    }

    public String getSuccessFullyAddedText() {
        log.info("Getting text from : " + successfullyAddedMessageTextField.toString());
        return successfullyAddedMessageTextField.getAttribute("innerHTML");
    }

    public void clickOnCloseWindowTab() {
        clickOnElement(closeWindowTAb);
        log.info("Clicking on CloseWindowTab : " + closeWindowTAb.toString());

    }


}
