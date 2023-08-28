Feature: Drag node

Scenario: Dragging nodes
    Given there are 1 nodes
    When I drag node 1
    Then I should see node 1 grabbed
    And I should see node 1 moved
