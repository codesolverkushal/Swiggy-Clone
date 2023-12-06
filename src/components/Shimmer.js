import "./Main.css"

const Shimmer = ()=>{
    const backgroundImageStyle = {
        backgroundImage:
          "url('https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    return (
        <div className="flex flex-wrap justify-center items-center p-5" style={backgroundImageStyle}>
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className="w-52 h-72 bg-gray-400 rounded-lg m-4 relative overflow-hidden animate-shimmer"
          ></div>
        ))}
      </div>
    );
};

export default Shimmer;