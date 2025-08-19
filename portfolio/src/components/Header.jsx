import "boxicons/css/boxicons.min.css";

function Header() {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  const closeMobileMenuAndScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu after clicking a link
    const mobileMenu = document.getElementById("mobileMenu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-lg flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0 "
      >
        {/* Add your name or logo here */}
      </h1>

      <nav className="hidden md:flex items-center gap-12 cursor-pointer">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          onClick={() => closeMobileMenuAndScroll("#skills")}
        >
          Skills
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          onClick={() => closeMobileMenuAndScroll("#projects")}
        >
          Projects
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          onClick={() => closeMobileMenuAndScroll("#about")}
        >
          About
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          onClick={() => closeMobileMenuAndScroll("#contact")}
        >
          Contact
        </a>
      </nav>

      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            onClick={() => closeMobileMenuAndScroll("#skills")}
          >
            Skills
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            onClick={() => closeMobileMenuAndScroll("#projects")}
          >
            Projects
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            onClick={() => closeMobileMenuAndScroll("#about")}
          >
            About
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            onClick={() => closeMobileMenuAndScroll("#contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;