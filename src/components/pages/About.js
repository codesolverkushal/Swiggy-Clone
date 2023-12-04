import User from "./User";
import React,{Component} from "react";
import UserClass from './UserClass';

class About extends Component{
    constructor(props){
        super(props);
    }



    render(){
        // console.log("Parent Render")
        return(
            <div className="about-card">
            
            {/* <UserClass/> */}
            
            <User/>
           
        </div>
        );
    }
}
export default About;


