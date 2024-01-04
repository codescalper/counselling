"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Confetti from "react-dom-confetti";
import { useTheme } from "next-themes";

export default function ClientHero() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { theme } = useTheme();

  console.log(theme);

  const confettiConfig = {
    angle: 90,
    spread: 180,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "20px",
    height: "40px",
    colors: ["#F7D708", "#FF6B6B", "#70A1FF", "#23D5AB", "#E38627"],
  };

  const handleGetStartedClick = () => {
    setIsConfettiActive(true);
    setTimeout(() => {
      setIsConfettiActive(false);
    }, 100);
  };

  return (
    <div className="relative h-full w-full">
      <section
        className="flex items-center animate-fade-in justify-center w-full animate-delay-100 h-screen py-12 md:py-24 lg:py-32 xl:py-48"
        id="top"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-[-1]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#63e_100%)]"></div>
        <div className="container px-4 md:px-6 max-w-full">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="selection:bg-purple-400 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-8xl mb-5">
                  Find your dream college
                  <span className="selection:text-white bg-clip-text text-transparent text-gradient ">
                     with MHT-CET Shala 
                  </span>
                  counselling
                </h1>

                <p className="selection:bg-lime-400 font-bold selection:text-black max-w-[750px] md:text-2xl mx-auto ">
                  Get{" "}
                  <span className=" text-yellow-500">
                    personalized guidance
                  </span>{" "}
                  and expert advice based on your{" "}
                  <span className="text-red-500">MHT-CET percentile</span> and
                  preferences. Explore the best colleges and courses for you and{" "}
                  <span className="text-yellow-500">secure</span> your
                  admission.
                </p>
              </div>

              <div className="w-full max-w-sm space-y-2 mx-auto">
                <Button
                  data-aos="fade-right"
                  className="bg-white text-gray-900"
                  onClick={handleGetStartedClick}
                >
                  View Details
                </Button>
                <div className="mt-4 mx-auto flex justify-center">
                  <Confetti active={isConfettiActive} config={confettiConfig} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
