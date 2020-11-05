Feature: I am going to generate text

@GeneratorTesting
Scenario: Entering parameters and generating text

Given User navigates to "textgenerator" site
When User selects english language in text variants
    And User sets number of paragraph are "1" 
    And User sets min number of symbols are "130"
    And User sets max number of symbols are "150"
    And User sets symbols before paragraph are "<p>"
    And User sets symbols after paragraph are "/<p>"
    And User sets convert everything to uppercase checkbox to "false"
    And User sets strict regime checkbox to "false"
    And User clicks generate button
Then text was generated
    And number of symbols should be between "130" and "150"