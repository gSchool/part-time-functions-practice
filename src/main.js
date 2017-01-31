/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

=======================================================
*/



// 1. Create a function called funnyString that simply returns a string that contains the word 'funny'
//    when it is returned.
// function funnyString() {
//   return "funny";
// }



// 2. Define a function called "divideByTwo".
//    It should accept one parameter that is divided by two and returned.




// 3. Define a function called "greeting" with two paramters that are people's names.
//    The return value should be two instances of "Hello, (someone) and (someone else)".



// 4. Create a function called avgNum that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.



// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month. Write a function that takes the price per unit and calculates the total for you each month. Since the price of the cashews can change anytime, pass that amount into the function to get your total price.




// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.




// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is greater than or equal to 8, return "Enough". If it is less than that, return "Not enough".


// 9. Develop a function called ageToYear that determines a person's age by asking them for their birth year.


// 10. Allow a user to enter a number.
//     Write a function called addDigits that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.


// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, return "Bad"
//        If the phone number is 10 digits, return "Good"
//        If the phone number is 11 digits and the first number is 1, trim the 1 and return the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then return "Bad".
//        HINT: You may need to use the charAt method.


// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine how many number there are.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]


// C. Create a die rolling function called twoDiceResult that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.


// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once using a function called howManyTimes. A monopoly board has 40 spaces total.


// E. Write a function called leapYear that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
