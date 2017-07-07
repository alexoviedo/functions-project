// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1,num2){
    // Your answer here
    if(num1 > num2){
      return num1
    }
    else {
      return num2
    }
}

console.log(max(1,2))


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(n1,n2,n3){
    // Your answer here
    if((n1>n2)&&(n1>n3)){
      return n1
    }


else if((n2>n1)&&(n2>n3)){
  return n2
}


else {
  return n3
}}


  console.log(maxOfThree(5,2,3))


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(L){
    // Your answer here
    if ((L==='A')||(L==='a')||
        (L==='E')||(L==='e')||
        (L==='I')||(L==='i')||
        (L==='O')||(L==='o')||
        (L==='U')||(L==='u')){
     return true

    }

    else if ((L==='Y')||(L==='y')) {
      return "Sometimes true... why?"
    }

    else {
      return false
    }
}

  console.log(isVowel('y'))


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (P1,P2){
  return P1+P2
}

console.log(sum(1,2))

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.


function avg (PQ,PW,PE){
    return (PQ+PW+PE)/3
}

console.log(avg(5,6,7))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(ST){
  return ST.length
}

console.log(getLength("this string"))


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(PA,PS){
  if (PS>PA) {
    return true

  } else {
    false
  }
}

console.log(greaterThan(3,75))

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(NM){

  return ("Hello, "+NM+"!")
}

console.log(greet("Alex"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(QW,QE,QR,QT){
  return ("The "+QW+ " tall "+QE+" ate "+QR+" "+QT+".")
}

// =====================instructions======================
// =======================================================
// Enter the following (adjective, noun, adjective, noun)
// =======================================================
// =======================================================

console.log(madlib("slow","sloth","excited","marbles"))
