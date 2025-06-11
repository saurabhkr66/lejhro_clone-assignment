// export default function Footer() {
//   return (
//     <footer className="bg-blue-600 text-white text-center py-4">

//       <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
//     </footer>
//   );
// }
"use client";
import { Twitter, Facebook, Linkedin, Youtube, ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 py-16  px-40 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Innovations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Business Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Financial services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Lejhro Recruiter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Programs</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Lejhro Bootcamp</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Statement</a></li>
            </ul>
          </div>

          {/* Connect with us Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Connect with us</h3>
            <div className="flex space-x-4">
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
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600">© 2025 LEJHRO. All Rights Reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}