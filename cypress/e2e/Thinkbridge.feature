Feature: Login page
@regression
Scenario Outline: Login using positive case

Given I access the swaglab page
When I enter the valid user id{userID}
When I enter the valid password{password}
Then I click on login button

Examples:
    |User data |  UserId          | password      |
    | Value 1  |  standard_user   | secret_sauce  |
    | Value 2  |  problem_user    | secret_sauce  |
    | Value 3  |  locked_out_user | secret_sauce  |