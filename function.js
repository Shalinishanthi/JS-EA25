//1) 

function func() {
    console.log("Hello, world!");
  }
    
  // Call the func function to output the message to the console
  func(); 
  
  //2) 
  
  function printSum(a, b) {
    const sum = a + b;
    console.log(`Sum of ${a}, ${b} is ${sum}`);
  }
  printSum(3, 4); // Output: Sum of 3, 4 is 7
  
  //3) 
  
  const square = (num) => num * num;
  console.log(square(5)); // Output: 25
  
  //4) 
  
  var x = 21;
    var girl = function () {
      console.log(x);
      var x = 20;
  };
  girl ();
  
  //5) 
  
  var x = 21;
    girl ();
    console.log(x)
    function girl() {
        console.log(x);
        var x = 20;
    };
  
  //6) 
  
  var x = 21;
  a();
  b();
  
    function a() {
      
     x = 20;
    console.log(x);
  };
   function b() {
      
      x = 40;
     console.log(x);
  };
  
  //7)
  
  function factorial(n) {
    // Check if n is negative or not
    if (n < 0) {
      return "Error: Factorial of a negative number does not exist.";
    }
    // If n is 0 or 1, return 1
    else if (n === 0 || n === 1) {
      return 1;
    }
    // Otherwise, calculate the factorial using recursion
    else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5)); // 120
  
  //8) 
  
  function FindSum(a, b){
    return a + b;
  }
  
  function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
  }
  
  DisplayData("PrepBytes", FindSum(10, 11));
  
  //9)
  
  Abc();
  const Abc = function(){
      let value = 20;
      console.log(value);
  }
  
  //10)
  
  var a = 10;
    (function (){
        console.log(a);
        var a = 20;
    })();
  
    //11) 
  
    const greet =  function(name){
      return function(m){    
          console.log(`Hi!! ${name}, ${m}`);
      }
  }  
  const greet_message = greet('EA23');
  greet_message("Welcome To PrepBytes")