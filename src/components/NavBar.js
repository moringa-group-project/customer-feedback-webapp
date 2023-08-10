const Navbar = () => {
    return (
      <nav className="bg-white bg-opacity-75 sticky top-0 z-50 p-3  flex md:gap-8 gap-4 items-center justify-center ">
        <a href="#home" className="p-2 rounded hover:bg-primary">
          Home
        </a>
        <a href="#about" className="p-2 rounded hover:bg-primary">
          About us
        </a>
        <a href="#feedback" className="p-2 rounded hover:bg-primary">
          Feedback
        </a>
        <a href="#faqs" className="p-2 rounded hover:bg-primary">
          Faqs
        </a>
        <a href="#contact-us" className="p-2 rounded hover:bg-primary">
          Contact Us
        </a>
      </nav>
    );
  };
  
export default Navbar;