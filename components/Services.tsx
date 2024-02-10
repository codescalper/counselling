import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundGradient } from "./ui/background-gradient";

const json = 
    [
        {
            "id": 1,
            "title": "College Selection",
            
            "description": "",
            "imageSrc" : "/11.jpeg" ,
            "content": "Card Content",
            
        },
        {
            "id": 2,
            "title": "Branch Selection",
            "description": "Card Description",
            "imageSrc" :"/13.jpeg",
            "content": "Card Content",
            
        },
        {
            "id": 3,
            "title": "Roadmap to become 10x Engineer",
            "imageSrc":"/15.jpeg",
            "description": "Card Description",
            "content": "Card Content",
            
        }
    ]


const Services = () => {
  return (
    <div>
         <h1 data-aos="fade-up" className="text-center  font-bold xl:text-7xl md:text-4xl text-3xl underline text-gradient2">Services</h1>
      <section
        className="min-h-screen w-full py-12 flex items-center justify-center"
        id="pricing"
      >
       
        <div className="container px-4 md:px-6 absolute  ">
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            {json.map((item) => (
            
              <Card className="rounded-[22px]  border border-purple-500 hover:border-pink-500 duration-500 max-w-sm p-4 sm:p-10 " key={item.id} >
                <CardHeader>
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <img  src={item.imageSrc} alt="image" className="h-32 w-32 lg:h-64 lg:w-64" />
                </CardContent>
                <CardDescription>{item.description}</CardDescription>
                <CardFooter>{item.content}</CardFooter>
              </Card>
              

            ))}
          </div>
          </div>
     </section >
    </div>
  );
};
export default Services;
