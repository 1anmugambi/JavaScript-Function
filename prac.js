// Functions
// function is like a mini-program within a program, designed to be reusable this is used so that you don't have to repeat code in a repetitive task.

// syntax

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Moe"); // Output: Hello, Moe!

// function expression
  // with name as a parameter and Ian as an argument
  
const hello = function (name) {
    console.log("Hello, " + name + "!");
  };
  
  hello("Ian"); // Output: Hello, Ian!

// function with return value

//function multiply(num1, num2) { 
    //return num1 * num2;
  }
  
  //const result = multiply(5, 5); 
  //console.log(result); // Output: 25

// arrow function

const multiply = (num1, num2) => {
    return num1 * num2;
  }
  
  const result = multiply(5, 6);
  
  console.log(result); // Output: 30

// arrow function one-line code
  //because it doesn't have a parameter we can leave () empty
  // because it's one line it's allowed to not use {} after the =>

  const world = () => console.log('hello world!');

  world() // Output: hello world!

// arrow function one-line code with return
  // because it has only 1 parameter it's allowed to not use ()
  // because it's one-line it's using () as a return
   
  const double = num => (num * 2)

  const result = double(5)
  
  console.log(result); // Output: 10
  