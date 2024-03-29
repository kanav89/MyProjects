import React from "react";
import "./Navibar.css"
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import logo from "./p.jpg";



function Navibar() {
  return (
    <div >
      <Navbar fluid rounded className="bg-white">
        <NavbarBrand >
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="React" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-black">Kanav Gupta</span>
        </NavbarBrand>

        <NavbarToggle />
        <NavbarCollapse className="nav">
          <Button href="#" >
            Home
          </Button>
        
          <Button href="#about" >
            About
          </Button>
        
          
          <Button href="#skills" >
            Skills
          </Button>
          <Button href="#project">
            Projects
          </Button>
          <Button href="#contact">
            Contact
          </Button>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default Navibar;
