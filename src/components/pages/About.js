import User from "./User";
import UserClass from "./UserClass";
import React,{Component} from "react";

class About extends Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor");

    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }

    render(){
        // console.log("Parent Render")
        return(
            <div className="about-card">
            
            <User name={"Kushal Pratap Singh (function)"}/>
            {/* <UserClass name = {"Kushal Pratap Singh (class)"} location={"Dehradun"}/> */}
           
        </div>
        );
    }
}
export default About;


