import React from "react";
class UserClass extends React.Component{
   
    constructor(props)
    {
        super(props);
    

        this.state = {
            userInfo:{
                name:"Dummy Name",
                location:"Default Location",
            }
        }

        console.log("Child Constructor");
    }

    async componentDidMount(){
        console.log("Child Component Did Mount");

        const data = await fetch("https://api.github.com/users/codesolverkushal");
        const json = await data.json();
        
        
        this.setState({
            userInfo: json,
        });
        
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }
    
    render(){

        const {name,location,bio,avatar_url} = this.state.userInfo;
        
        console.log("Child Render");

        return(
            <div className="user-card">
            

        <img className="githubAvar" src={avatar_url} alt="" />
            <h1>Name: {name} </h1>
            <h2>Location: {location} </h2>
            <h2>{bio}</h2>
            <h2>email: mohitsinghkpsc@gmail.com</h2>
            
        </div>      
      );
    };
}

export default UserClass;




/****
 * --- Mouting ----
 * 
 * 
 * Constructor (dummy)
 * Render (dummy)
 * <HTML Dummy>
 * componentDidMount
 * 
 * API Call
 * this.setState -> state variable is updated
 * 
 * --- Update
 * 
 * render (API Data)
 * <HTML (New API data)>
 * 
 * component Did Update.
 */ 