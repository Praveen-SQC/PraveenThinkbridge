Feature: Login page

Scenario: Login using positive case

Given I access the swaglab page
When I enter the valid user id
When I enter the valid password
Then I click on login button