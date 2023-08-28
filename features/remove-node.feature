Feature: Remove node

Scenario: Removing nodes
    Given there are 1 nodes
    When I grab node 1
    And I remove it
    Then I should see 0 nodes

Scenario: Removing nodes when it is has not been grabbed
    When I ungrab nodes
    Then I should see remove disabled
