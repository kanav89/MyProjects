import React from "react";

import { Button,Badge,Card } from "flowbite-react";


function Contact(){

    return(
       <section id="contact" className="bg-white">
            <div className="flex flex-col  items-center justify-center mx-auto text-center space-y-6">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">Get In Touch</h1>
                <Card className="max-w-sm m-4 border-gray-800">
                    <Badge color="gray" size="lg">Kanav Gupta</Badge>
                    <Badge color="gray" size="lg" href="#">Kanavg004@gmail.com</Badge>
                    <Badge color="gray" size="lg">Tempe,Arizona</Badge>
                    <Button gradientDuoTone="greenToBlue" size = "lg" pill>
                        Say Hi!
                    </Button>
                </Card>
            </div>
        </section>

    )
}

export default Contact;