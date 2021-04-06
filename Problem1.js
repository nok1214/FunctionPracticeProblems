/* Problem 1: Write a JavaScript function that accepts a string as a parameter
and find the longest word within the string.
(Hint: use the "split" and a "for" loop)
*/

/* 
step 1: write a function(findLongestWord) that passes string (str) through;
step 2: declear a variable(splitString) that stores the splited string(str.split) by space (' ') to include each word instead of something else;
step 3: declear a variable(theLongestWord) that stores the longest word inside the splited string(str.split);
step 4: write a "for" loop to set a parameter on how to find the longest word by comparing the .length between splitString and theLongestWord;
step 5: within the "for" loop element, write an "if" element to compare each words and store the new value into varable(theLongestWord);
step 6: return the variable(theLongestWord);
step 7: run the function with a given string;
*/

// start of the code

function findLongestWord(str) {
    var splitString = str.split(' ');                                   // split string into a new arry of string by space;
    var theLongestWord = 0;                                             // declear a new variable to store the longest word, which start with 0;
    var longestWord = ''                                                //set the output value to a string where it will show the longest word in our string;
    for(var i=0; i< splitString.length; i++) { 
        if(splitString[i].length > theLongestWord) {                    // check if first word inside splitString's length is greather than the previous value stored inside theLongestWord(0) variable;
            theLongestWord = splitString[i].length;                     // if is true, theLongestWord will have a new value;
            longestWord = splitString[i];                               //set our longest word equal to the value that matches the condition we are looking for and store it in variable longestWord;
        }
        
    }
    return longestWord;                                                 //return the longest word instead of number;
}

findLongestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'); // output 'consectetur'
