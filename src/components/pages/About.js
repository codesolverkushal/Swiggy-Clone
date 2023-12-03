import User from "./User";
import React,{Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
    }



    render(){
        // console.log("Parent Render")
        return(
            <div className="about-card">
            
            <User name={"Kushal Pratap Singh (function)"}/>
           
        </div>
        );
    }
}
export default About;


