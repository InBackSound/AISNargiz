    Feature: Onliner Footer check
    
    @OnlinerFooter
    Scenario Outline: Homepage sections footer check

        Given I am on Onliner homepage footer
        When I click on "<footerlinks>" on footer
        Then The "<link>" page opens from footer

        Examples:
            | footerlinks  | link                             |
            | О компании   |  https://blog.onliner.by/about   |
            | Манифест     |  https://blog.onliner.by/manifest|