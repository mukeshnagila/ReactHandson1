import {Component} from "react";

class ClassComponent extends Component{
    render(){
        return(
            <>
                <div className="box2">
                    <h2>This is created using Class Component</h2>
                    <p>This is done using external CSS</p>
                    <p style={{color:"red"}}>This is done using inline CSS</p>
                </div>
            </>
        )
    }
}

export default ClassComponent;