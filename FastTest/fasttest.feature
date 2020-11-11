Feature: I am going to generate text
    @GeneratorTesting_no
    Scenario: Verify system displays the same text variant value as selected

        Given User navigates to Text Generator site
        When User enters "text" in iframe
        Then User sees "text"

    @GeneratorTesting_no
    Scenario: Verify payment system was chosen correctly

        Given User navigates to Text Generator site
        When User choose "Pay via direct carrier billing" payment system
        Then User sees "Pay via direct carrier billing" payment system was chosen

@GeneratorTesting
Scenario: Verify menu Services shows after user hover on menu item Uslugi

Given User navigates to Text Generator site
When User hover on menu item Services
Then User can hover on menu item Generator Text