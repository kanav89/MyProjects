import React from "react";
import { projects } from "./data";
import { Card } from 'flowbite-react';
import logo from "./p.jpg"

function Projects(){

    return(
    <section id="project" className="bg-white">
       <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                    Projects
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                    ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                    possimus est.
                </p>
                 <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                    <div className="container px-5 py-10 mx-auto text-center lg:px-40">    
                        <div className="flex h-full items-center">
                            {/* <Card 
                                className="max-w-sm m-4 border-gray-800 hover:opacity-100 opacity-0"
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={logo}
                                >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card> */}
                            <Card
                                className="max-w-sm m-4 border-gray-800"
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={logo}
                                >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                            <Card
                                className="max-w-sm m-4 border-gray-800"
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc={logo}
                                >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                            
                        </div>
                    </div>   
                    ))}
                </div>


            </div>
        </div>
    </section>
    )

}


export default Projects;