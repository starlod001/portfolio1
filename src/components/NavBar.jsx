import React from 'react'
import { TbGridDots } from "react-icons/tb";
import ButtonType1 from './ButtonType1';
import { Link } from 'react-scroll';
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
        <nav className="fixed w-full max-w-7xl z-50 mx-auto flex items-center justify-between backdrop-blur-md ml-10">
            <div className="text-white text-2xl font-bold">
                <img alt="Logo" className="inline-block w-[90px] h-[90px]" src="../src/assets/images/logo.png"/>
            </div>
            <div className="bg-transparent rounded-full px-4 py-2 flex items-center space-x-4">
                <Link 
                    to="home" 
                    activeClass='active'
                    spy="true" 
                    smooth={true} 
                    duration={1000}
                    >
                        <ButtonType1 text="Home"/>
                </Link>
                <Link 
                    to="about" 
                    activeClass='active'
                    spy="true" 
                    smooth={true} 
                    duration={1000}
                    >
                        <ButtonType1 text="About"/>
                </Link>
                <Link 
                    to="work" 
                    activeClass='active' 
                    spy="true" 
                    smooth={true} 
                    duration={1000}
                    >
                        <ButtonType1 text="Work"/>
                </Link>
                <Link 
                    to="blog" 
                    activeClass='active' 
                    spy="true" 
                    smooth={true} 
                    duration={1000}
                    >
                        <ButtonType1 text="Blog"/>
                </Link>
                <Link 
                    to="contact" 
                    activeClass='active'  
                    spy="true" 
                    smooth={true} 
                    duration={1000}
                    >
                        <ButtonType1 text="Contact Me"/>
                </Link>
            </div>
            <div className="text-white text-2xl cursor-pointer">
                <TbGridDots />
            </div>
        </nav>
    </>
  )
}

export default NavBar
