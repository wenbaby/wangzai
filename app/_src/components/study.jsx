import React,{useState} from "react";
import A from './A'
import B from './B'
function Study() {
    const AppContext = React.createContext({});
    const [num, setnum] = useState('我是旺仔')
    function clickMe(){
       return  setnum('hahha')
    }
    return  <AppContext.Provider value ={{
            username:'stufy'
        }}></AppContext.Provider>
    <div>
        <h2>{num}</h2>
        <button onClick={()=>clickMe()}>点我</button>
        <A/>
        <B/>
    </div>
}

export default Study    
