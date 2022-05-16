package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[@class='title_block']")
    WebElement womanTextField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='block_content']//a[normalize-space()='Tops']")
    WebElement topLinkField;

    @CacheLookup
    @FindBy(xpath = "//div[@class='block_content']//a[contains(@title,'Find your favorites dresses from our wide choice of evening, casual or summer dresses!')][normalize-space()='Dresses']")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='block_content']//a[contains(@title,'Find your favorites dresses from our wide choice of evening, casual or summer dresses!')][normalize-space()='Dresses']")
    WebElement shortBydropDownField;

    @CacheLookup
    @FindBy(xpath = "//a[@class=\"product-name\"]")
    List<WebElement> productLists;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Blouse']")
    WebElement blouse;

    public String getWomenText() {
        log.info("Getting text from : " + womanTextField.toString());
        return getTextFromElement(womanTextField);
    }

    public void clickOnTopsLink() {
        clickOnElement(topLinkField);
        log.info("Clicking on TopsLink : " + topLinkField.toString());
    }

    public void clickOnDressesLink() {
        clickOnElement(dressesLink);
        log.info("Clicking on DressesLink : " + dressesLink.toString());
    }

    public void clickOnDropDownField() {
        clickOnElement(shortBydropDownField);
        log.info("Clicking on DropDownField : " + shortBydropDownField.toString());
    }

    public int getProductListsize() {
        List<WebElement> lists = productLists;
        log.info("Getting lists from : " + productLists.toString());
        return lists.size();

    }

    public String getTextFromBlouseLink() {
        log.info("Getting text from : " + blouse.toString());
        return getTextFromElement(blouse);
    }

    public void clickOnProduct(String product) {
        for (WebElement lists : productLists)
            if (lists.getText().matches(product)) {
                lists.click();
                break;

            }
        log.info("Clicking on Product : " + productLists.toString());
    }

}


