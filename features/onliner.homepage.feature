Feature: Onliner Homepage check

    @OnlinerHomepage
    Scenario: Homepage is avaliable check

        Given I am on Onliner homepage
        Then Logo on the top of the page is avaliable
        And First news from news_title is avaliable
        And First news from news_teaser is avaliable


    @OnlinerHomepage
    Scenario Outline: Homepage newssection opens

        Given I am on Onliner homepage
        When I click on "<newssection>" on the homepage
        Then The "<link>" page opens after homepage

        Examples:
            | newssection     | link                               |
            | Люди         | https://people.onliner.by/         |
            | Мнения       | https://people.onliner.by/opinions |
            | Авто         | https://auto.onliner.by/           |
            | Технологии   | https://tech.onliner.by/           |
            | Недвижимость | https://realt.onliner.by/          |
