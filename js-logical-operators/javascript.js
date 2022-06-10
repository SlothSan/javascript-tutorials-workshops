let age = window.prompt("Enter your age.");


/* && and operator if one condition is false it will return false and execute the else. */

if (age >= 14 && age <= 90) {
    alert("You are between 14 & 90");
} 


/* !() checking not using the logical operator ! */
if (!(age >=14 && age <=90)) {
    alert("You are less than 14 years old or over 90 years old");
}

/* can also be done using the or operator || as below. */

if (!(age < 14 || age > 90)) {
    alert("You are less than 14 years old or over 90 years old"); 
}

/*More on the || or operator. */
//Runs
//The result of -1 || 0 = -1 = truthy
if (-1 || 0) alert("first");

//doesn't run 
// -1 && 0 , falsy
if (-1 && 0) alert("second");

//Executes
//Operator && has a higher precedence than ||
// so -1 && 1 executes first give using the chain: 
// null || -1 && 0 -> null || 1 -> 1
if(null || -1 && 1) alert("third");