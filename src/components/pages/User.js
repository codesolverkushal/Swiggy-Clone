import { useEffect, useInsertionEffect, useState } from "react";

const User = ()=>{

    const [githubData,setGithubData] = useState(0);

    useEffect(()=>{
     getUserInfo();
    },[]);

    async function getUserInfo(){
        const data = await fetch("https://api.github.com/users/codesolverkushal");
        const json = await data.json();
        console.log(json);
        setGithubData(json);

    }


    const {name,location,bio,avatar_url} = githubData;
    return(
        <div className="user-card">
            <h1>GitHub Profile</h1>
            <img className="githubAvar" src={avatar_url} alt="" />
            <h5>Name: {name}</h5>
            <p>Location: {location}</p>
            <p>{bio}</p>
            <p>email: mohitsinghkpsc@gmail.com</p>
        </div>
    )
}

export default User;