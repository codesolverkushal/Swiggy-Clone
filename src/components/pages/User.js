import { useEffect, useState } from "react";

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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="user-card bg-gray-100 p-4 md:p-6 rounded-md md:rounded-lg shadow-md text-center">
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
      </div>
    </div>
  );
};

export default User;
