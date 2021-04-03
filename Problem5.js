/*
Problem 5
Write a JavaScript program which iterates the intergers from 1 to 100
but for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'
for numbers which are multiples of both three and five print 'FizzBuzz'.
*/

/*
step 1: write a "for" loop set variable i=1 so the counting starts from 1;
step 2: set i <= 100 as a parameter so the count will stop at 100;
step 3: set i++ for our value to increment after counting;
step 4: use "if" statement to give condition for how our program should run;
*/

//code starts here

for(var i=1; i <= 100; i++){
    if (i % 3 ===0 && i % 5 ===0){                  //the condition is going on top because checking this first so that when the program met other condition before this will not get skipped;
      console.log("FizzBuzz");                      //satisfy multiples of 3 and 5 will print "FizzBuzz";
    }
    else if (i % 3 ===0){                           //multiples of 3 prints "Fizz";
      console.log("Fizz");
    }
    else if (i % 5 ===0){                           //multiples of 5 prints "Buzz";
      console.log("Buzz");
    }
    else console.log(i);                            //if none of the condition met above, comtinue counting;
}