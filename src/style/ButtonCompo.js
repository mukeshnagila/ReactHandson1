// import React from react;

import { useState } from "react";
import ClassComponent from "../component/ClassComponent";
import FunctionComponent from "../component/FunctionComponent";

function ButtonCompo(){
        const [count, setCount] = useState(false);
        const [count2, setCount2] = useState(false);
    return(
        <>
            <div className="btnsection">
                <div className="buttons">
                    <button className="btn" onClick={() => setCount(!count)}>To see styling in functional component</button>
                    <button className="btn" onClick={() => setCount2(!count2)}>To see styling in class component</button>
                </div>
            </div>
            
            <div className='container'>
                    {count ? <FunctionComponent /> : "" }
                    {count2 ? <ClassComponent /> : ""}
            </div>
        </>
    )
}

export default ButtonCompo;