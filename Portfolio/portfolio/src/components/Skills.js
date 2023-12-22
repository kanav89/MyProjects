import React from "react";
import {skills} from './data'
import { Badge } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';
function About(){
    return(
    <section id="skills" className="bg-white">
       <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                    Skills and Technologies
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                    ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                    possimus est.
                </p>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                            <Badge icon={HiCheck}className="text-black bg-green-500 w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font text-lg text-black">
                            {skill}
                            </span>
                            
                        </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    </section>
  );
}

export default About;