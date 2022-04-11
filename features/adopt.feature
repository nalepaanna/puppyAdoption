Feature: Feature for Adoption Puppies with payment

  Scenario Outline: As a user, I can adopt puppy, add two products and pay

    Given Main page
    When I add to cart "Brook" puppy from "1" page
    And I add "Chew Toy" product for "Brook" 
    And I add "Travel Carrier" product for "Brook"
    And I complete adoption with "Check" payment method
    Then I should see confirmation notice

  Scenario Outline: As a user, I can adopt puppy, add one product and pay

    Given Main page
    When I add to cart "Sparky" puppy from "2" page
    And I add "Collar & Leash" product for "Sparky"
    And I complete adoption with "Credit card" payment method
    Then I should see confirmation notice

  Scenario Outline: As a user, I can adopt 2 random dogs, add the same product for each and pay

    Given Main page
    When I add to cart random puppy from "1" page
    And I click Adopt another puppy
    And I add to cart random puppy from "2" page
    And I add "Collar & Leash" product for each puppy
    And I complete adoption with "Credit card" payment method
    Then I should see confirmation notice
    
  Scenario Outline: As a user, I can adopt 2 random dogs, add 3 random product for first and pay

    Given Main page
    When I add to cart random puppy from "1" page
    And I click Adopt another puppy
    And I add to cart random puppy from "2" page
    And I add "3" random products for "1" puppy
    And I complete adoption with "Credit card" payment method
    Then I should see confirmation notice
