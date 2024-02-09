import { Button } from "@/components/ui/button"; 
import React from "react";
import {FaYoutube } from "react-icons/fa";
import { SparklesCore } from "./ui/sparkles";

const Subscribe = () => {
  return (
<>
<div className="w-full absolute inset-0 h-screen">   
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />     
      </div>
    <div className="px-4 bg-gradient-to-b  from-[#6821a3] to-[#020817]  md:px-8 lg:px-16 xl:px-24 h-screen flex flex-col md:flex-row justify-center md:justify-between items-center">
       
    
      <div data-aos="fade-right" className="text-center md:text-left">
        <h1  className="text-4xl  font-bold tracking-tighter sm:text-4xl xl:text-6xl mt-0 pt-0 selection:bg-red-400">
          Watch our <span className="bg-clip-text selection:text-white text-transparent bg-gradient-to-r from-red-600 to-rose-600">College Review videos</span>
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl mt-10" >Best review videos for engineering college in Maharashtra🚩</p>
      </div>
      <div className="mt-10 sm:mt-4 md:mt-0">
        <a href="https://www.youtube.com/@mhtcetshalamayanksingh" target="blank">
          <Button data-aos="fade-left" size='lg' className="bg-rose-600 text-white text-lg">
            <FaYoutube size={24} />&nbsp; Subscribe on Youtube
          </Button>
        </a>
      </div>
    </div>
    </>
  );
};

export default Subscribe;