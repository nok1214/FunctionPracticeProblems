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
//With 3 condition

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



//version 2: combine 3 and 5 together;


for(var i = 1; i <= 100; i++){
  if(i % 15 ===0){
    console.log("FizzBuzz");
  }
  else if(i % 3 ===0){
    console.log("Fizz");
  }
  else if(i % 5 ===0){
    console.log("Buzz");
  }
  else console.log(i);
}


//version 3: function method

function fizzBuzz(i) {
  var word = ""                     //set output as one of the variable(word) with an empty string;

  if(i % 3 ===0)                    // first condition if true, "Fizz" will be our string; If false, output i;
  word += 'Fizz'

  if(i % 5 ===0)                    //second condition if true, "Buzz" will be our string; If false, output i;
  word += 'Buzz'  

  if(i >= 100)                      //tell the function to stop when i reach to 100;
  return

  console.log(word || i)           //log the output if one of condition is true by using "||";

  fizzBuzz(i++)
  
}
fizzBuzz(1);



