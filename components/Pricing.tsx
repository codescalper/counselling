"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Pricing() {
  return (
    <>
      <section
        className="min-h-screen w-full bg-gradient-to-t from-purple-800 via-zinc-900 to-[#020817] py-12 flex items-center justify-center"
        id="pricing"
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2  md:gap-8">
            <div
              data-aos="fade-right"
              className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 text-center">
                  Basic
                </h3>

                <div className="mt-4 text-center text-zinc-900">
                  <span className="text-4xl font-bold">₹299</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    720p Video Rendering
                  </li>
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    2GB Cloud Storage
                  </li>
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    Basic Video Templates
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Drawer>
                  <DrawerTrigger>
                    <Button className="w-[100%]">Pay</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                      <DrawerDescription>
                        This action cannot be undone.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="relative  flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border-[3px] border-red-500"
            >
              <div className="px-3 py-1 text-sm text-zinc-900 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center text-zinc-900">
                  Pro
                </h3>
                <div className="mt-4 text-center text-zinc-900">
                  <span className="text-4xl font-bold">₹399</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-2xs"
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    1080p Video Rendering
                  </li>
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    10GB Cloud Storage
                  </li>
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    Premium Video Templates
                  </li>
                  <li className="flex items-center text-zinc-900">
                    <span className="bg-green-500 rounded-full mr-2 p-1">
                      <svg
                        className=" text-zinc-900 text-xs"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    Collaboration Tools
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Drawer>
                  <DrawerTrigger>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                      Pay
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                      <DrawerDescription>
                        This action cannot be undone.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
