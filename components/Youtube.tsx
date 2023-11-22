  "use client";
  import React, { useEffect, useState } from "react";
  import axios from "axios"; 
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  const videoIds = [
    "Gzxua2f7MCE",
    "ZJciV32Ru4E",
    "q6qIJtmuvSY",
    "wI4qn0YPif8",
    "OSo_WpAksm4",
    "AOripfOh4To",
    "3CK4-rMPrW8",
  ];

  const apiKey = 'AIzaSyCPDPjiFMl8ZsJilwrcwgPRbNRaDgxstkk'


  type Video = {
    id: string;
    snippet: {
      title: string;
    };
    statistics: {
      viewCount: string;
    };
  };

  export default function Youtube() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const results: Video[] = [];
        for (let i = 0; i < 2; i++) {
          for (let id of videoIds) {
            const response = await axios.get(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${apiKey}`
            );
            const data = response.data.items[0];
            results.push(data);
          }
        }
        setVideos(results);
      };
      fetchData();
    }, []);

    return (
      <div data-aos="fade-up"  className="container mx-auto px-4 py-8">
        <div className="logo-container" style={{ overflowX: "scroll", scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}>
          {videos.map((video) => (
            <div  className="logo" style={{ scrollSnapAlign: "center" }} key={Math.random()}>
              <Card className="max-w-sm lg:max-w-sm md:max-w-md sm:max-w-lg mx-auto lg:flex md:flex-col sm:flex-row"  style={{pointerEvents: "none"}}>
                <CardHeader>
                  <CardTitle>{video.snippet.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{pointerEvents: "auto"}}
                    ></iframe>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Views: {video.statistics.viewCount}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <style jsx>{`
    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-100% * ${videos.length}));
      }
    }

    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .logo-container .logo {
      flex: 0 0 auto;
      margin: 10px;
      animation: scrollLeft ${videos.length * 10}s linear infinite; // Adjust the speed based on your preference
    }

    .logo {
      scroll-snap-align: center;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  `}</style>

      </div>
    );
  }
