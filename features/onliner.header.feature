@OnlinerHeader @forTest
Feature: Onliner Header check

    
    Scenario: Homepage sections header check fullsize

        Given I am on Onliner homepage header
        When Size of screen is full
        Then Logo on the header is avaliable
        And Main menu is available
        And Search section is available


    Scenario: Homepage sections header check tinysize

        Given I am on Onliner homepage
        When Size of screen is tiny
        Then Logo on the header is avaliable
        And Hamburger is available


    Scenario Outline: Homepage sections header menu click fullsize

        Given I am on Onliner homepage
        When Size of screen is full
        And I click on "<mainmenuitem>" on mainmenu       
        Then The "<link>" page opens from header

        Examples:
            | mainmenuitem | link                          |
            | Услуги       | https://s.onliner.by/tasks    |
            | Барахолка    | https://baraholka.onliner.by/ |

    
    Scenario Outline: Homepage sections header click tinysize

        Given I am on Onliner homepage
        When Size of screen is tiny
        And I click on hamburger
        And I click on  "<mainmenuitem>" on the side menu
        Then The "<link>" page opens from header

        Examples:
            | mainmenuitem | link                          |
            | Услуги       | https://s.onliner.by/tasks    |
            | Барахолка    | https://baraholka.onliner.by/ |


    
    Scenario Outline: Homepage sections header menu ddl check fullsize

        Given I am on Onliner homepage
        When Size of screen is full
        And I hover on "<mainmenuitem>" on mainmenu
        Then Drop-down menu of "<mainmenuitem>" opens

        Examples:
            | mainmenuitem  |
            | Новости       |
            | Автобарахолка |


    
    Scenario: Homepage sections header logoclick fullsize

        Given I am on Onliner homepage
        When Size of screen is full
        And I click on logo
        Then The "https://www.onliner.by/" page opens from header


   
    Scenario: Homepage sections header logoclick tinysize

        Given I am on Onliner homepage
        When Size of screen is tiny
        And I click on logo
        Then The "https://www.onliner.by/" page opens from header





