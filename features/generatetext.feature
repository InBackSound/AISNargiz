Feature: I am going to generate text

@GeneratorTesting
Scenario: Verify system displays the same text variant value as selected

Given User navigates to Text Generator site
When User selects "Английский (Lorem ipsum)" in text variant field
Then Text variant field displays "Английский (Lorem ipsum)"

@GeneratorTesting
Scenario: Verify uppercase checkbox recklick right

Given User navigates to Text Generator site
When User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "false"
    And User sets uppercase checkbox on "false"
    And User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "true"
    And User sets uppercase checkbox on "false"
Then Text uppercase checkbox state should be "false"

# @GeneratorTesting_notest
# Scenario: Verify strict regime checkbox was clicked

# Given User navigates to Text Generator site
# When User sets strict regime checkbox on "false"
# Then Text strict regime checkbox state is "false"

@GeneratorTesting
Scenario: Verify generated text has expected number of symbols

Given User navigates to Text Generator site
When User selects "Английский (Lorem ipsum)" in text variant field 
    And User sets number of paragraphs: "1" 
    And User sets min number of symbols in each paragraph: "50"
    And User sets max number of symbols in each paragraph: "100"
    And User sets symbols before paragraph: "<p>"
    And User sets symbols after paragraph: "/<p>"
    And User sets uppercase checkbox on "true"
    #And User sets strict regime checkbox on "false"
    And User clicks generate button
Then Number of symbols in generated text should be between "50" and "100"