@GeneratorTesting @forTest
Feature: Text generator
    
    Scenario: Verify system displays the same text variant value as selected

        Given User navigates to Text Generator site
        When User selects "Собственные символы" in text variant field
        Then Text variant field displays "Собственные символы"


Scenario: Verify uppercase checkbox recklick right

Given User navigates to Text Generator site
When User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "false"
    And User sets uppercase checkbox on "false"
    And User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "false"
Then Text uppercase checkbox state should be "false"


Scenario: Verify strict regime checkbox was clicked

Given User navigates to Text Generator site
When User sets strict regime checkbox on "true"
    And User sets strict regime checkbox on "false"
    And User sets strict regime checkbox on "false"
    And User sets strict regime checkbox on "true"
    And User sets strict regime checkbox on "true"
Then Text strict regime checkbox state should be "true"


Scenario: Verify generated text has expected number of symbols

Given User navigates to Text Generator site
When User selects "Русский текст" in text variant field 
    And User sets number of paragraphs: "1" 
    And User sets min number of symbols in each paragraph: "50"
    And User sets max number of symbols in each paragraph: "100"
    And User sets symbols before paragraph: "<p>"
    And User sets symbols after paragraph: "/<p>"
    And User sets uppercase checkbox on "false"
    And User sets strict regime checkbox on "true"
    And User clicks generate button
Then Number of symbols in generated text should be between "50" and "100"




Scenario: Verify text, written by user in Donate iframe, displays correctly

Given User navigates to Text Generator site
When User enters "Место для донатов" in Donate field iframe
Then Donate field displays "Место для донатов"



Scenario: Verify radio button of payment system was chosen correctly in Donate iframe

Given User navigates to Text Generator site
When User choose "Заплатить картой" payment system
Then User sees "Заплатить картой" payment system was chosen



Scenario: Verify menu Services shows after user hover on menu item Uslugi

Given User navigates to Text Generator site
When User hovers on menu item Services
Then Servises list opens

