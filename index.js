let count = 0; 

try {
  function increment() {
    count++;  
    increment(); 
  }
  increment(); 
 
} catch (error) {
  console.log(error); 
  console.log(count); 
}


