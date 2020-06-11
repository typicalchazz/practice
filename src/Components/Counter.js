import React, { useState } from 'react';


const Counter = (props) => {
    const [state,setState] = useState(0);
    
    return(
        <React.Fragment>
          <h1>{state}</h1>
          <button onClick = {() =>{
              props.updateFunction(i => (i+1)) 
              setState(state + 1)
              }}>Button</button>
        </React.Fragment>
    );
}
export default Counter;
