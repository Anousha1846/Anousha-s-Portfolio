import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const MyFooter = () => {
  return (
    <div className="w-[100%] min-h-[80px] bg-slate-500 text-center p-4 text-white">
      <h1>
        Created by <b><i>@Anousha AsadUllah</i></b>
      </h1>
      <h5>All rights are reserved</h5>

      {/* Social Media and Email Links */}
      <div className="flex gap-4 justify-center p-4">
        {/* GitHub */}
        <a 
          href="https://github.com/Anousha1846" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaGithub size={30} />
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/feed/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaLinkedin size={30} />
        </a>

        {/* Email */}
        <a 
          href="mailto:anoushaasadullah18@gmail.com"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <MdEmail size={30} />
        </a>
      </div>
    </div>
  );
};

export default MyFooter;
