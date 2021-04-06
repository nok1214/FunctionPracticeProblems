/*
Write a JavaScript function that accepts a string as a parameter
and counts the number of vowels within the string.
(Hint: use the "split" method, the Array#includes method, and a "for" loop.)
*/

/*
step 1: write a function(numberOfVowels) that passes string(str) into it;
step 2: declear a variable(splitString) and use .split(',') to split the string into each letter with a comma;
step 3: declear a variable(vowels) to define what vowels are;
step 4: set a variable(myVowels) counting from zero;
step 5: use "for" loop to compare the characters(char) in vowels to see if there is a match using .include method;
step 6: continue the count using ++;
step 7: return the value at the end of the function;

*/

// code starts here

function numberOfVowels(str) {
    var splitString = str.split(",");           //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];   // define what vowels are;
    var numofVowels = 0;                           //start the count at 0 or at the beginning of the string;
     for(let char of str) { 
         if (vowels.includes(char)) {           //compare the characters in our string by using .include method;
             numOfVowels++;                        //continue counting using increment;
         }
     }
    return numOfVowels;                            //return the number of vowels in our string;
}

numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'); // output 45;