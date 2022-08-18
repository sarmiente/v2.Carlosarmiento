import React from 'react';
import Github from '../../public/assets/github.svg';
import Instagram from '../../public/assets/instagram.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto items-center">
        <div className="flex justify-center space-x-3">
          <a href="" className="hover:-translate-y-1 transition transform">
            <Image width={20} src={Github} alt="" />
          </a>
          <a href="" className="hover:-translate-y-1 transition transform">
            <Image width={20} src={Instagram} alt="" />
          </a>
          <a href="" className="hover:-translate-y-1 transition transform">
            <Image width={20} src={Github} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
