function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    // inner function
    function innerFunction() {
      console.log(outerVariable); // inner function can access outer function's variable
    }
  
    return innerFunction; // returning the inner function
  }
  
  const closureExample = outerFunction(); 
  closureExample(); // Output: "I am from the outer function"
  


// 📌 Closures in JavaScrip
function greet() {
    let greeting = "Hello";
  
    return function(name) {
      console.log(greeting + " " + name);
    };
  }
  
  const sayHello = greet();
  sayHello("Alice");  // Output: Hello Alice
  sayHello("Bob");    // Output: Hello Bob
  

  function cookieJar() {
    let cookies = 5;  // There are 5 cookies in the jar

    function takeCookie() {
        cookies--; // Your friend takes one cookie out of the jar
        console.log("Yum! I took a cookie. " + cookies + " cookies left.");
    }

    return takeCookie; // Your friend gets to remember the cookies
}

const eatCookie = cookieJar(); // Open the jar and your friend comes out

eatCookie(); // Friend takes 1 cookie, says: "Yum! I took a cookie. 4 cookies left."
eatCookie(); // Friend takes 1 more, says: "Yum! I took a cookie. 3 cookies left."
