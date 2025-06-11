"use client";
import { useState } from "react";
import Image from "next/image";
import { Facebook, Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="bg-[#D38D28] text-white h-20 flex items-center px-4 py-20 sm:px-8 lg:px-60">
        <div className="container mx-auto h-full flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={200} height={120} />
           
          </div>

          {/* Menu Toggle for small screens */}
          <div
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>

          {/* Desktop Navigation - Always visible on medium+ screens */}
          <nav className="hidden md:flex items-center gap-12 font-medium">
            <a href="#" className="hover:underline text-white">Innovations</a>
            <a href="#" className="hover:underline text-white">Business Services</a>
            <a href="#" className="hover:underline text-white">Financial Services</a>
            <a href="#" className="hover:underline text-white">Bootcamp</a>
            {/* Sidebar Toggle Button (=) style) */}
            <button 
              onClick={toggleSidebar}
              className="w-10 h-10 flex items-center justify-center text-white text-xl font-bold hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <Menu/>
            </button>
          </nav>

          {/* Mobile Menu (visible on mobile + toggle) */}
          <nav
            className={`
              absolute md:hidden top-full left-0 w-full 
              bg-white text-black px-6 py-4 
              flex-col gap-4 items-start font-medium 
              ${isMenuOpen ? "flex" : "hidden"}
            `}
          >
            <a href="#" className="hover:underline py-2">Innovations</a>
            <a href="#" className="hover:underline py-2">Business Services</a>
            <a href="#" className="hover:underline py-2">Financial Services</a>
            <a href="#" className="hover:underline py-2">Bootcamp</a>
            <button 
              onClick={toggleSidebar}
              className="hover:underline py-2 text-left"
            >
              =)
            </button>
          </nav>
        </div>
      </header>

      {/* Sidebar Overlay - Changed to translucent */}
     {isSidebarOpen && (
  <div 
    onClick={closeSidebar}
    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity-30"
  />
)}

      {/* Sidebar */}
       <div className={`
        fixed top-0 right-0 h-full w-80 bg-white/65 backdrop-blur-sm
        text-black z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-bold tracking-widest text-[#D38D28]">LEJHRO</span>
          </div>
          <button 
            onClick={closeSidebar}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Innovations
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Business Services
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Financial Services
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Bootcamp
              </a>
            </li>
             <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                About
              </a>
            </li>
             <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Contact-us
              </a>
            </li>
             <li>
              <a 
                href="#" 
                className="block py-3 px-4 text-lg font-medium hover:bg-gray-100 hover:text-[#D38D28] rounded-lg transition-colors"
                onClick={closeSidebar}
              >
                Blogs
              </a>
            </li>
            <li>
            <div className="flex gap-4">
  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
    <Twitter size={24} />
  </a>
  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
    <Facebook size={24} />
  </a>
  <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
    <Linkedin size={24} />
  </a>
  <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
    <Youtube size={24} />
  </a>
</div>
</li>
             </ul>
             
               
            
         
        </nav>

        {/* Additional Sidebar Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
          <div className="text-sm text-gray-600">
            <p>© 2025 LEJHRO</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}