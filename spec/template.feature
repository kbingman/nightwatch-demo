Feature: Home Page

Scenario: should have the 'home' template

   Given the http://www.lululemon.com page
   When I navigate to home
   Then it should have the home template
