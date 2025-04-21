import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/#");
  };

  return (
    <nav className="bg-white py-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="\lovable-uploads\Big_Classes_LOGO.png"
              alt="BigClasses.AI Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex justify-center flex-1 items-center space-x-8">
          <button
            onClick={() => handleScrollTo("home")}
            className="text-black hover:text-blue-500 transition-colors"
          >
            Home
          </button>

          <div className="relative group">
            <a
              href="#courses"
              className="text-black hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>Courses</span>
              <svg
                className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-100 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Python Programming</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Machine Learning</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Deep Learning</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">NLP</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Generative AI</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">LangChain</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">LangGraph</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">MLOps</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">LLMOps</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Agents</a>
              <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-800">Ethics in AI and Scaling AI systems</a>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#features"
              className="text-black hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>Features</span>
              <svg
                className="w-4 h-4 mt-[2px] transform group-hover:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
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

          <a href="#testimonials" className="text-black hover:text-primary transition-colors">
            Testimonials
          </a>
        </div>

        {/* Right Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="rounded-full px-6" onClick={handleLogout}>
                Sign out
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" className="rounded-full px-6" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button className="rounded-full px-6" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleScrollTo("home")}
              className="text-left text-black hover:text-blue-500 transition-colors py-2"
            >
              Home
            </button>
            <a
              href="#courses"
              className="text-black hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a
              href="#features"
              className="text-black hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-black hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <Button className="rounded-full w-full" onClick={() => { toggleMenu(); handleLogout(); }}>
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="rounded-full w-full" onClick={() => { toggleMenu(); navigate("/login"); }}>
                    Log in
                  </Button>
                  <Button className="rounded-full w-full" onClick={() => { toggleMenu(); navigate("/signup"); }}>
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
