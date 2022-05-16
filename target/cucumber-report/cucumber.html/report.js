$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create.account.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As user I want to create account in automation practice website",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15867086900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@smoke,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email address \"pretty123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter firstname \"pretty\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter lastname \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password \"patel543\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter address \"1 albany street\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter cityname \"dehli\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select state name \"Delaware\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter zipcode \"24536\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select country name \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter homephone number \"9956734564\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter aliasaddress \"25 canary\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I  should create account successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I should see my account message",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 109357100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 12011612100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pretty123@gmail.com",
      "offset": 23
    }
  ],
  "location": "CreateAccountSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 148837600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 81055500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pretty",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 7194056700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 115096500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel543",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 99873800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 albany street",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 110938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dehli",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterCityname(String)"
});
formatter.result({
  "duration": 100901600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delaware",
      "offset": 21
    }
  ],
  "location": "CreateAccountSteps.iSelectStateName(String)"
});
formatter.result({
  "duration": 145509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24536",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iEnterZipcode(String)"
});
formatter.result({
  "duration": 109988700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "CreateAccountSteps.iSelectCountryName(String)"
});
formatter.result({
  "duration": 59155400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9956734564",
      "offset": 26
    }
  ],
  "location": "CreateAccountSteps.iEnterHomephoneNumber(String)"
});
formatter.result({
  "duration": 116114200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 canary",
      "offset": 22
    }
  ],
  "location": "CreateAccountSteps.iEnterAliasaddress(String)"
});
formatter.result({
  "duration": 115877700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 10283962500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldCreateAccountSuccessfully()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldSeeMyAccountMessage()"
});
formatter.result({
  "duration": 40115096400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027My account\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e0ba42d24b37ffc841c1dd81bfff1067, findElement {using\u003dxpath, value\u003d//h1[contains(text(),\u0027My account\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51362}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51362/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0ba42d24b37ffc841c1dd81bfff1067\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.automation.pages.MyAccountPage.getMyaccountText(MyAccountPage.java:27)\r\n\tat com.automation.cucumber.steps.CreateAccountSteps.iShouldSeeMyAccountMessage(CreateAccountSteps.java:91)\r\n\tat ✽.And I should see my account message(create.account.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 968797700,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Test",
  "description": "As a user I want to sign in to automation practice website",
  "id": "signin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10076174900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to sign in page successfully",
  "description": "",
  "id": "signin-test;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@smoke,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to sign in page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see authentication message",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2114173000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldSeeAuthenticationMessage()"
});
formatter.result({
  "duration": 36252800,
  "status": "passed"
});
formatter.after({
  "duration": 731261500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"\u003cerrormessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errormessage"
      ],
      "line": 20,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 21,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 22,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 23,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 24,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6379407600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6934011200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 97583300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 109388300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3596183900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 42176100,
  "status": "passed"
});
formatter.after({
  "duration": 696924200,
  "status": "passed"
});
formatter.before({
  "duration": 5262070500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 11685133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 110478700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 92623200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3313238700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 36090000,
  "status": "passed"
});
formatter.after({
  "duration": 705348100,
  "status": "passed"
});
formatter.before({
  "duration": 9110488600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"adfdgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 6178870600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 102492600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 106579400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6621850700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 36367100,
  "status": "passed"
});
formatter.after({
  "duration": 845263200,
  "status": "passed"
});
formatter.before({
  "duration": 10754779900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 7020758900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 113149200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 96610000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3518406300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 33041900,
  "status": "passed"
});
formatter.after({
  "duration": 728539000,
  "status": "passed"
});
formatter.before({
  "duration": 4672196600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify that user should login successfully with valid credentials",
  "description": "",
  "id": "signin-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter username \"priti123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"patel123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should see sign out link",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 8049298300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priti123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 122723000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 99246500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4493729600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldSeeSignOutLink()"
});
formatter.result({
  "duration": 40076566300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Log me out\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dc29f73a7935375f4a594e1e2bdf525b, findElement {using\u003dxpath, value\u003d//a[@title\u003d\u0027Log me out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51584/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc29f73a7935375f4a594e1e2bdf525b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.automation.pages.MyAccountPage.signOutLinkDisplayed(MyAccountPage.java:31)\r\n\tat com.automation.cucumber.steps.SignInSteps.iShouldSeeSignOutLink(SignInSteps.java:67)\r\n\tat ✽.And I should see sign out link(signin.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 908330800,
  "status": "passed"
});
formatter.before({
  "duration": 8416409600,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that user should log out successfully",
  "description": "",
  "id": "signin-test;verify-that-user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter username \"priti123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter password \"patel123\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I should log out successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I should see sign in link",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 4348042800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priti123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 114912900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 104148300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 738985500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 20048771300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027Log me out\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [97340567758f6c0d1b883353ab7dae1f, findElement {using\u003dxpath, value\u003d//a[@title\u003d\u0027Log me out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51622}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51622/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 97340567758f6c0d1b883353ab7dae1f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.automation.pages.MyAccountPage.clickOnSignOutLink(MyAccountPage.java:34)\r\n\tat com.automation.cucumber.steps.SignInSteps.iClickOnSignOutLink(SignInSteps.java:72)\r\n\tat ✽.And I click on sign out link(signin.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.iShouldLogOutSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.iShouldSeeSignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 926004100,
  "status": "passed"
});
formatter.uri("women.category.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Test",
  "description": "As user I want to select products from women category in automation practice website",
  "id": "women-category-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7054909200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User should navigate to women category page successfully",
  "description": "",
  "id": "women-category-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@smoke,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to women category page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see womwn text",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5402714100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldSeeWomwnText()"
});
formatter.result({
  "duration": 50834500,
  "error_message": "org.junit.ComparisonFailure: Text not match expected:\u003cWOM[W]N\u003e but was:\u003cWOM[E]N\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.WomenCategorySteps.iShouldSeeWomwnText(WomenCategorySteps.java:25)\r\n\tat ✽.And I should see womwn text(women.category.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1211330100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@smoke,"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message that product successfully added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on close button and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 23,
      "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 24,
      "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 25,
      "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 26,
      "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 27,
      "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4267666000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message that product successfully added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on close button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1968736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1629295800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 128182100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 111492100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 139301800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 68571000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldSeeMessageThatProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 32494200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnCloseButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 1134988700,
  "status": "passed"
});
formatter.after({
  "duration": 705124700,
  "status": "passed"
});
formatter.before({
  "duration": 7870137500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message that product successfully added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on close button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1929068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1229384400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 120959400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 101842900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 92055400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 62505600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldSeeMessageThatProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 38718200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnCloseButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 697772900,
  "status": "passed"
});
formatter.after({
  "duration": 710813900,
  "status": "passed"
});
formatter.before({
  "duration": 3921620100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message that product successfully added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on close button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1926671600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1178685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 129393200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 54329200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "duration": 123466400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 81150900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldSeeMessageThatProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 36134100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnCloseButtonAndCloseThePopup()"
});
formatter.result({
  "duration": 782216300,
  "status": "passed"
});
formatter.after({
  "duration": 725847100,
  "status": "passed"
});
formatter.before({
  "duration": 4362834000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldaddproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message that product successfully added to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on close button and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 4406600400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategorySteps.iClickOnProduct(String)"
});
formatter.result({
  "duration": 159546300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iEnterQuantity(String)"
});
formatter.result({
  "duration": 20067866300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027JALPA\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9bc921d3a62bc0e2d07ef15a21b017b4, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51781}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51781/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9bc921d3a62bc0e2d07ef15a21b017b4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.clear(Unknown Source)\r\n\tat com.automation.pages.ProductPage.enterQuantity(ProductPage.java:47)\r\n\tat com.automation.cucumber.steps.WomenCategorySteps.iEnterQuantity(WomenCategorySteps.java:35)\r\n\tat ✽.And I enter quantity \"2\"(women.category.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.iClickOnColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldSeeMessageThatProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnCloseButtonAndCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1126296500,
  "status": "passed"
});
});