// import React from 'react';
import banner from "../../assets/banner.png";
const Hero = () => {
    return (
        
            <div className="hero min-h-screen w-full  ">
                  <div className="hero-content w-full max-w-none px-0 flex-col lg:flex-row-reverse justify-between">
                    <img
                        alt=" hero component"
                        src={banner}
                        className=" rounded-lg shadow-2xl sm:max-w-10/12 md:max-w-sm "
                    />
                    <div >
                        <button className="btn btn-[#E1E7FF] bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-2 rounded-lg">
                            New: AI-Powered Tools Available
                        </button>
                        <h1 className="text-5xl font-extrabold ">Supercharge Your<br></br> Digital Workflow</h1>
                        <p className="py-6 text-[12px] text-[#627382]">
                            Access premium AI tools, design assets, templates, and productivity<br></br> software—all in one place. Start creating faster today.<br></br>
                            Explore Products
                        </p>
                        <div className="flex gap-4 ">
                            <button className="btn bg-linear-to-r from-blue-500 to-purple-600">Explore Products</button>
                            <button className="btn btn-outline bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text font-bold text-transparent">Explore Products</button>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Hero; 