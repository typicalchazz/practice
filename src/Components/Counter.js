import React, { useState } from 'react';


const Counter = (setTotal) => {
    const [state,setState] = useState(0);
    
    return(
        <React.Fragment>
          <h1>{state}</h1>
          <button onClick = {() =>{
              setTotal.updateFunction(i => (i+1)) 
              setState(state + 1)
              }}>Button</button>
        </React.Fragment>
    );
}
export default Counter;
