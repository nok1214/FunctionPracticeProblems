/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is a word, phase, or sequence that reads the same backward as forward
e.g., madam or nurses run.
*/

/*
step 1: creat a function that accepts string(str) as an argument;
step 2: set a parameter using regular expression(/[^A-za-z0-9]/g) with a modifier;
step 3: create a variable(myString) and use .toLowerCase() to keep the whole string in lower case for easy comparison;
step 4: on myString variable, use .replace() to remove any characters that we don't want inside the string with the regular expression we set earlier;
step 5: set another variable(reverseString) to compare with myString variable to check if the string is palindrome;
step 6: on myString variable, use .split("") .reverse() and .join("") to split the string and reverse it and join back together for comparison;
step 7: the function will return true or false;
*/


// method 1: check palindrome with built-in functions
// code starts here

function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;                                                //set up our regular expression that will do a global(g modifier) search for the character-span that is not from A-Z, a-z, and 0-9;
    var myString = str.toLowerCase().replace(re, "");                        //set our string to lower case and remove anything that is not from A-Z, a-z, and 0-9 replace with an empty quotation mark("");
    var reverseString = myString.split("").reverse().join("");               //split our string, reverses it and join back together for comparsion;
    return myString === reverseString;                                       //check to see if our string is palindrome, returns true or false value;
}

console.log(isPalindrome("Pull up, Eva! we’re here! Wave! Pull up!"));                   // return true;
console.log(isPalindrome("Lorem ipsum dolor sit amet, consectetur adipiscing elit."))    // return false;



// method 2: check for palindromes with "for" loop;

/*
step 1: create a function that accepts string(str) as an argument;
step 2: set a parameter using regular expression(/[^A-za-z0-9]/g) with a modifier;
step 3: set our string(str) to lowercase and replace any characters we don't want using our regular expression rules;
step 4: use .length to return the length of a string and set as variable(strLength);
step 5: create a "for" loop where we set i starting from 0, divide strLength in half for faster calculation against large string;
step 6: inside "for" loop create an "if" statement to check if the first index is the same as the last index;
step 7: use "return false" to stop the function from running once the characters don't match anymore and exit the loop;
step 8: ourside of the "for" loop, use "return true" if all the character matches;
step 9: the function will return true or false;
*/

//method 2: check palindrom using "for" loop
// code starts here

function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;                                                      //set up our regular expression that will do a global(g modifier) search for the character-span that is not from A-Z, a-z, and 0-9;
    str = str.toLowerCase().replace(re, "");                                       //set our string to lower case and remove anything that is not from A-Z, a-z, and 0-9 replace with an empty quotation mark("");
    var strLength = str.length;                                                    //use .lenth to get the length of our string;
    for (var i= 0; i< strLength/2; i++ ){                                          //divide the string length in half for faster calculation against large string;
        if(str[i] !== str[strLength - 1 - i]){                                     //compare each letter, strLength-1 is because index is different than length, index starts from 0 while .length counts from 1; 
            return false;                                                          //return false once the character don't match and exit the loop;
        }
    }
    return true;
}

console.log(isPalindrome("Pull up, Eva! we’re here! Wave! Pull up!"));                   // return true;
console.log(isPalindrome("Lorem ipsum dolor sit amet, consectetur adipiscing elit."))    // return false;