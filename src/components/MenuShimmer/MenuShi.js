import React from 'react';
// import './MenuShi.css'; // Import your CSS file


const backgroundImageStyle = {
  backgroundImage:
    "url('https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const Shimmer = () => {
  return (
    <div className="h-[84.7vh]" style={backgroundImageStyle} >
    
      <div className='flex justify-around items-center'>
        <div>
          <img src="https://media1.giphy.com/media/H7PIgwktfVtRK/giphy.gif?cid=ecf05e474m9s1tkh43uneu5kd0ihuol2sg5n0dy8k76d0a6y&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
        </div>
        <div>
          <img src="https://i.gifer.com/origin/71/71addd2131891cd84ce3a6e5692be8aa_w200.webp" alt="" />
        </div>
      
      </div>
    </div>
  );
};

export default Shimmer;