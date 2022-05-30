import React from "react";



const Addproduct1 = () => {
    function handleClick() {
    
        // Send data to the backend via POST
        fetch('https://gmuw80.sse.codesandbox.io/products', {  // Enter your IP address here
    
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify() // body data type must match "Content-Type" header
    
        })
        
      }
    return (
        <>
      <button onClick={handleClick}>Add Product</button>
     </>
    )
}
export default Addproduct1;