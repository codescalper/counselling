import React from "react";
import Image from 'next/image';

function AboutUs() {

  return <div data-aos="fade-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/2 "  id="about-us">
            <div className="md:mb-1">
                {/* <Image src="/aboutUs.png" alt="Eng Hub" width={500} height={500} /> */}
            </div>
            <div className="about-us-text p-4 md:p-0">
                <h2 className="text-4xl  sm:text-5xl xl:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-400 ">About <u>MHT-CET Shala</u></h2>
                <ul className=" text-lg sm:text-xl xl:text-xl list-disc list-inside mb-4 pr-2 xl:pr-5">
                    <li>We are MHT-CET Shala, the ultimate destination for engineering aspirants in Maharashtra.</li><br></br>
                    <li><span className="text-blue-900 dark:text-blue-400 font-bold">Reviewed over 70+ private and government colleges</span>, giving you an in-depth understanding of the engineering courses available in each college.</li><br></br>
                    <li>We provide the <span className="text-blue-900 dark:text-blue-400 font-bold">best college recommendations</span> according to your percentile, and guide you on the admission process and engineering branches.</li><br></br>
                    <li>YouTube channel with over <span className="text-blue-900 dark:text-blue-400 font-bold">1.4+ million views & 6000+ subscribers</span></li><br></br>
                    <li><span className="text-blue-900 dark:text-blue-400 font-bold">Engineering guidance</span> with all 4 Year study materials & resources </li><br></br>
                    <li>A passionate educators and counselors who are dedicated to helping you achieve your dream of becoming an engineer.</li><br></br>
                </ul>
            </div>
        </div>
  </div>;
}

export default AboutUs;
