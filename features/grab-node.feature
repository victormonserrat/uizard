Feature: Grab node

Scenario: Grabbing nodes
    Given there are 1 nodes
    When I grab node 1
    Then I should see node 1 grabbed

Scenario: Ungrabbing nodes
    Given there are 1 nodes
    When I grab node 1
    And I ungrab nodes
    Then I should see node 1 ungrabbed
