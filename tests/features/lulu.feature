Feature: Lululemon Mobified Site

Scenario: Lululemon home page

    When I open http://www.lululemon.com
    then it should be mobified
    and it should use the home template
    and it should make a screenshot titled home
    then wait 0.5 seconds

Scenario: Lululemon Lightened Up Pullover page

    When I open http://shop.lululemon.com/products/clothes-accessories/tops-long-sleeve/Lightened-Up-Pullover
    then it should be mobified
    and the title should be Lightened Up Pullover
    and it should use the pdp template
    and it should make a screenshot titled pdp
    and close the browser
