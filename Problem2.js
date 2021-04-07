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

//code starts here

function numberOfVowels(str) {
    var splitString = str.split("");                                //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];                       // define what vowels are;
    var numOfVowels = 0;                                            //start the count at 0;
     for(let char of str) { 
         if (vowels.includes(char.toLowerCase())) {                 //compare the characters in our string by using .include method, and use .toLowerCase() in case there are capital letters inside the string;
             numOfVowels++;                                         //continue counting using increment;
         }
     }
    console.log(numOfVowels);                                       //log the number of vowels in our string;
}

numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'); // output 45;


//using .forEach() and .indexOf() to find vowels in a string;
//code starts here

function numberOfVowels(str) {
    var splitString = str.split('');                                //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];                       // define what vowels are;
    var numOfVowels = 0;                                            //start the count at 0;
    
    splitString.forEach(function (vowelCounts) {                    //using .forEach on the variable we just decleared with vowelCounts as our function value;
        if(vowels.indexOf(vowelCounts.toLowerCase()) !== -1){       //use .indexOf() to return the position of the value that matches const vowels, and use .toLowerCase() in case there are capital letters inside the string; 
            numOfVowels++;                                          //continue counting using increment;
        }
    });
    console.log(numOfVowels);                                       //log the number of vowels in our string;
}

numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');// output 45;

//using .map() and .indexOf() to find vowels in a string;
//code starts here

function numberOfVowels(str) {
    var splitString = str.split('');                                //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];                       // define what vowels are;
    var numOfVowels = 0;                                            //start the count at 0;
    
    splitString.map(function (vowelCounts) {                        //using .map() on the variable we just decleared with vowelCounts as our function value;
        if(vowels.indexOf(vowelCounts.toLowerCase()) !== -1){       //use .indexOf() to return the position of the value that matches const vowels, and use .toLowerCase() in case there are capital letters inside the string; 
            numOfVowels++;                                          //continue counting using increment;
        }
    });
    return numOfVowels;                                             //log the number of vowels in our string;
}

console.log(numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));// output 45;

//using .filter() and .indexOf() to find vowels in a string;
//code starts here

function numberOfVowels(str) {
    var splitString = str.split('');                                //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];                       // define what vowels are;
    var numOfVowels = 0;                                            //start the count at 0;
    
    splitString.filter(function (vowelCounts) {                     //using .filter() on the variable we just decleared with vowelCounts as our function value;
        if(vowels.indexOf(vowelCounts.toLowerCase()) !== -1){       //use .indexOf() to return the position of the value that matches const vowels, and use .toLowerCase() in case there are capital letters inside the string; 
            numOfVowels++;                                          //continue counting using increment;
        }
    });
    return numOfVowels;                                             //log the number of vowels in our string;
}

console.log(numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));// output 45;

//using .forEach() and .includes() to find vowels in a string;
//code starts here

function numberOfVowels(str) {
    var splitString = str.split('');                                //spliting string into individual letters;
    const vowels = ['a', 'e', 'i', 'o', 'u'];                       // define what vowels are;
    var numOfVowels = 0;                                            //start the count at 0;
    
    splitString.forEach(function (vowelCounts) {                    //using .forEach() on the variable we just decleared with vowelCounts as our function value;
        if(vowels.includes(vowelCounts.toLowerCase())){             //compare the characters in our string by using .include method, and use .toLowerCase() in case there are capital letters inside the string;
            numOfVowels++;                                          //continue counting using increment;
        }
    });
    return numOfVowels;                                             //log the number of vowels in our string;
}

console.log(numberOfVowels('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));// output 45;