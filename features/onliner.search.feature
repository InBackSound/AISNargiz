    @OnlinerSearch @forTest
    Feature: Onliner Search check

    
    Scenario: Goods search

        Given I am on Onliner homepage search
        When I enter "дед мороз" in Search field
        Then I see found first item contains "дед мороз" in name


    Scenario: Go to good's page from search

        Given I am on Onliner homepage search
        When I enter "дед мороз" in Search field
        And I see found first item contains "дед мороз" in name
        And I copy href of first search element for next checks
        And I click on the first link is Search results
        Then The item page opens