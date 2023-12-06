import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin,FaGithub } from "react-icons/fa";


const User = () => {
  const [githubData, setGithubData] = useState({
    name: "Dummy Name",
    location: "Default Location",
    bio: "Default Bio",
    avatar_url: "",
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/codesolverkushal");
    const json = await data.json();
    console.log(json);
    setGithubData(json);
  }

  const { name, location, bio, avatar_url } = githubData;

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };


  return (
    <div className="flex items-center justify-center h-[84.6vh]" style={backgroundImageStyle}>
      <div className="user-card p-8 md:p-6 rounded-md md:rounded-lg shadow-md text-center bg-rose-200">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          GitHub Profile
        </h1>
        <img
          className="github-avatar rounded-full mx-auto mb-2 md:mb-4 h-20 w-20 md:h-32 md:w-32"
          src={avatar_url}
          alt=""
        />
        <h5 className="text-lg md:text-xl font-semibold mb-2">{name}</h5>
        <p className="text-sm md:text-base mb-2">{location}</p>
        <p className="text-gray-600 mb-2">{bio}</p>
        <p className="text-blue-500 text-sm">Email: mohitsinghkpsc@gmail.com</p>
         <div className="flex justify-around mt-3">
         <NavLink to="#"><FaLinkedin size={30}/></NavLink>
         <NavLink to="#"><FaGithub size={30}/></NavLink>
         </div>
        
      </div>
    </div>
  );
};

export default User;
