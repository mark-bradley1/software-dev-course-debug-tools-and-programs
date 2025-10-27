Comments for fixes made:

For the calculateTotal function changed <= to just <. This caused the loop to run one step to far and resulted in the last iteration to be undefined. Also added input validation. 

For the applyDiscount function updated the function to ensure that the correct data type is entered. Added error messages if data type was not a number and if the number was less that 0 or greater than 1. 

For the generateReceipt function added validation to ensure total was numeric and that cart items were an array. Added .toFixed(2) to each price for consistancy. Added validation for cart items to ensure each item has a name and price. 

The debugging tools helped to be able to pinpoint problem areas with the original code and make sure that my solution was running correctly. I was able to run the code step by step and see how each line was interacting with the code.