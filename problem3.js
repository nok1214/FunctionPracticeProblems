/*
problem 3:
Write a JavaScript function that accepts two arguments
a string and a letter and the function will count the number of the specified letter within the string.
*/

/*
step 1: write a fucntion(counter) that accpets 2 arguments which is a string(str) and letter(letter);
step 2: set counting variable's(countLetter) starting position at 0;
step 3: write a "for" loop element with .length to track the number of characters in a string;
step 4: under "for" loop elemet, write an "if" statement to set the parameter by using .charAt which will index the character we are looking for;
step 5: specify our counting variable(countLetter) to increase 1 value as we move along the string;
step 6: return our counting variable(countLetter);
step 7: call our function providing a string and the letter we want to count;


*/

//use "for" loop to find the specified letter in a string;
//code starts here


function counter(str, letter) {             // function with 2 arguments, str and letter;
    var countLetter = 0;                    // set a counter position at 0 as starting position;
    for (var i=0; i < str.length; i++){     // using "if" statement with .length to track the number of characters;
        if(str.charAt(i) === letter) {      // compare the letter we are looking for with .charAt on the string provided;
            countLetter++;                  // increment along the string provided once str.charAt(i) === letter;
        }
    }
    return countLetter
}

counter('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', "s");//output 6;
