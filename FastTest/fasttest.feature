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

@GeneratorTesting_no
Scenario: Verify menu Services shows after user hover on menu item Uslugi

Given User navigates to Text Generator site
When User hover on menu item Services
Then User can hover on menu item Generator Text

@GeneratorTesting_no
Scenario: Homepage is avaliable check

        Given I am on Onliner homepage
        Then Logo on the top of the page is avaliable
            And First news from news_title is avaliable
            And First news from news_teaser is avaliable


@GeneratorTesting_no
    Scenario Outline: Homepage newssection opens

        Given I am on Onliner homepage
        When I click on "<newssection>" on the homepage
        Then The "<link>" page opens

    Examples:
        | newssection    | link |
        | Люди        | https://people.onliner.by/  |
        | Мнения      | https://people.onliner.by/opinions |
        | Авто        | https://auto.onliner.by/ |
        | Технологии  | https://tech.onliner.by/ |
        | Недвижимость| https://realt.onliner.by/|


    @GeneratorTesting_no
    Scenario: Homepage sections header check fullsize

        Given I am on Onliner homepage
        When Size of screen is full
        Then Logo on the top of the page is avaliable
            And Menu is available
            And Search section is available

    @GeneratorTesting_no
    Scenario Outline: Homepage sections header click tinysize

        Given I am on Onliner homepage
        When Size of screen is tiny
           And I click on hamburger
           And I click on  "<mainmenuitem>" on the bottom menu
        Then The "<link>" page opens

        Examples:
            | mainmenuitem | link                          |
            | Услуги       | https://s.onliner.by/tasks    |
            | Барахолка    | https://baraholka.onliner.by/ |


    @GeneratorTesting
    Scenario Outline: Homepage sections footer check

        Given I am on Onliner homepage
        When I click on "<footerlinks>" on footer
        Then The "<link>" page opens

    Examples:
            | footerlinks  | link                             |
            | О компании   |  https://blog.onliner.by/about   |
            | Манифест     |  https://blog.onliner.by/manifest|