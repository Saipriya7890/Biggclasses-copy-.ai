// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom"; // <-- Add this import

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleScrollTo = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false); // close mobile menu if open
//     }
//   };

//   return (
//     <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
//       <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
//         <div className="flex items-center">
//           <a href="/" className="flex items-center gap-2">
//             <img 
//               src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
//               alt="BigClasses.AI Logo" 
//               className="h-10 w-auto"
//             />
//             <span className="text-2xl font-bold text-primary">
//               Big<span className="text-secondary">Classes.AI</span>
//             </span>
//           </a>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <button 
//             onClick={() => handleScrollTo("home")}
//             className="text-gray-600 hover:text-primary transition-colors"
//           >
//             Home
//           </button>

//           {/* Courses Dropdown */}
//           <div className="relative group">
//             <a href="#courses" className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1">
//               <span>Courses</span>
//               <svg className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M19 9l-7 7-7-7" />
//               </svg>
//             </a>
//             <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Artificial Intelligence</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Generative AI Training</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Data Science & AI Online Training</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Full Stack Data Analytics</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Python for AI</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">MLOps Training</a>
//             </div>
//           </div>

//           {/* Features Dropdown */}
//           <div className="relative group">
//             <a href="#features" className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1">
//               <span>Features</span>
//               <svg className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <path d="M19 9l-7 7-7-7" />
//               </svg>
//             </a>
//             <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Hands-on Projects</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Mentor Support</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Career Services</a>
//               <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Certifications</a>
//             </div>
//           </div>

//           <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
//             Testimonials
//           </a>

//           {/* Auth Buttons */}
//           <div className="flex items-center space-x-4">
//             <Link to="/login">
//               <Button variant="outline" className="rounded-full px-6">Log in</Button>
//             </Link>
//             <Button className="rounded-full px-6">Sign up</Button>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={toggleMenu}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white py-4 px-4 shadow-lg">
//           <div className="flex flex-col space-y-4">
//             <button 
//               onClick={() => handleScrollTo("home")}
//               className="text-left text-gray-600 hover:text-primary transition-colors py-2"
//             >
//               Home
//             </button>
//             <a 
//               href="#courses" 
//               className="text-gray-600 hover:text-primary transition-colors py-2"
//               onClick={toggleMenu}
//             >
//               Courses
//             </a>
//             <a 
//               href="#features" 
//               className="text-gray-600 hover:text-primary transition-colors py-2"
//               onClick={toggleMenu}
//             >
//               Features
//             </a>
//             <a 
//               href="#testimonials" 
//               className="text-gray-600 hover:text-primary transition-colors py-2"
//               onClick={toggleMenu}
//             >
//               Testimonials
//             </a>
//             <div className="flex flex-col space-y-3 pt-3">
//               <Link to="/login" onClick={toggleMenu}>
//                 <Button variant="outline" className="rounded-full w-full">Log in</Button>
//               </Link>
//               <Button className="rounded-full w-full">Sign up</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo using Link */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
              alt="BigClasses.AI Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary">
              Big<span className="text-secondary">Classes.AI</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleScrollTo("home")}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </button>

          {/* Courses Dropdown */}
          <div className="relative group">
            <a href="#courses" className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1">
              <span>Courses</span>
              <svg className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Artificial Intelligence</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Generative AI Training</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Data Science & AI Online Training</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Full Stack Data Analytics</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Python for AI</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">MLOps Training</a>
            </div>
          </div>

          {/* Features Dropdown */}
          <div className="relative group">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1">
              <span>Features</span>
              <svg className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Hands-on Projects</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Mentor Support</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Career Services</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Certifications</a>
            </div>
          </div>

          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
            Testimonials
          </a>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-full px-6" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button className="rounded-full px-6" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleScrollTo("home")}
              className="text-left text-gray-600 hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <a 
              href="#courses" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="rounded-full w-full" onClick={() => { toggleMenu(); navigate("/login"); }}>
                Log in
              </Button>
              <Button className="rounded-full w-full" onClick={() => { toggleMenu(); navigate("/signup"); }}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
