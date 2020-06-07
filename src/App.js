import React, {useState} from 'react'
import Counter from './Components/Counter';
let App = () => {

  const [total,setTotal] = useState(0);
    return(
    <div>
        <h1>{total}</h1>
        <Counter updater={setTotal}/>
        <Counter updater={setTotal}/> 
    </div>

      );
   }


export default App;
