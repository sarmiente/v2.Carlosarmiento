const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto flex justify-between py-7 px-6 lg:px-32 text-sm md:text-lg">
          <div className="text-white hover:translate-x-1 transition transform hover:tracking-widest duration-100">
            <a href="/">
              carlos<span className="font-bold">.sarmiento</span>
            </a>
          </div>
          <nav className="flex flex-wrap">
            <a
              href=""
              className="mr-3 hover:font-bold text-white hover:-translate-x-1 transition transform hover:tracking-widest duration-100"
            >
              .proyectos
            </a>
            <a
              href=""
              className="hover:font-bold text-white hover:-translate-x-1 transition transform hover:tracking-widest duration-100"
            >
              .contacto
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
