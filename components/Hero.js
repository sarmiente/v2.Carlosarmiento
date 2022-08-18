import React from 'react';

const Hero = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex pt-40 lg:pt-40 items-center flex-col px-6">
        <div className="text-center text-2xl lg:text-4xl">
          <p>Hola, yo soy Carlos</p>
          <p>
            un <span className="font-bold">diseñador</span> y{' '}
            <span className="font-bold">desarrollador</span>{' '}
          </p>
          <p>de paginas web</p>
        </div>
        <div className="flex justify-center pt-10">
          <a
            href="#contact"
            className="inline-flex text-white bg-transparent border-1 py-2 px-6 outline hover:bg-white hover:outline-none hover:text-black text-lg shadow hover:-translate-y-2 transition transform"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
